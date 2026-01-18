const express = require('express');
const db = require('../config/db');
const { authenticateToken, isAdmin } = require('../middleware/auth');

const router = express.Router();

router.use(authenticateToken);
router.use(isAdmin);

router.get('/dashboard', async (req, res) => {
  try {
    const stats = await db.query(`
      SELECT 
        (SELECT COUNT(*) FROM bookings WHERE status = 'pending') as pending_bookings,
        (SELECT COUNT(*) FROM bookings WHERE status = 'confirmed') as confirmed_bookings,
        (SELECT COUNT(*) FROM bookings WHERE status = 'completed') as completed_bookings,
        (SELECT COUNT(*) FROM bookings WHERE booking_date = CURRENT_DATE) as today_bookings,
        (SELECT COUNT(*) FROM users WHERE role = 'customer') as total_customers,
        (SELECT COALESCE(SUM(total_price), 0) FROM bookings WHERE status = 'completed' AND payment_status = 'paid') as total_revenue,
        (SELECT COALESCE(SUM(total_price), 0) FROM bookings WHERE status = 'completed' AND payment_status = 'paid' AND EXTRACT(MONTH FROM created_at) = EXTRACT(MONTH FROM CURRENT_DATE)) as monthly_revenue,
        (SELECT COALESCE(AVG(rating), 0) FROM reviews) as average_rating
    `);

    const recentBookings = await db.query(`
      SELECT b.*, s.name as service_name, s.category, u.first_name, u.last_name, u.email, u.phone
      FROM bookings b
      JOIN services s ON b.service_id = s.id
      JOIN users u ON b.user_id = u.id
      ORDER BY b.created_at DESC
      LIMIT 10
    `);

    const categoryStats = await db.query(`
      SELECT s.category, COUNT(*) as booking_count, SUM(b.total_price) as revenue
      FROM bookings b
      JOIN services s ON b.service_id = s.id
      WHERE b.status = 'completed'
      GROUP BY s.category
    `);

    res.json({
      stats: stats.rows[0],
      recentBookings: recentBookings.rows,
      categoryStats: categoryStats.rows
    });
  } catch (error) {
    console.error('Get dashboard error:', error);
    res.status(500).json({ error: 'Failed to fetch dashboard data' });
  }
});

router.get('/bookings', async (req, res) => {
  try {
    const { status, date, limit = 50, offset = 0 } = req.query;
    
    let query = `
      SELECT b.*, s.name as service_name, s.category, s.package_type, 
             u.first_name, u.last_name, u.email, u.phone
      FROM bookings b
      JOIN services s ON b.service_id = s.id
      JOIN users u ON b.user_id = u.id
      WHERE 1=1
    `;
    const params = [];
    
    if (status) {
      params.push(status);
      query += ` AND b.status = $${params.length}`;
    }
    
    if (date) {
      params.push(date);
      query += ` AND b.booking_date = $${params.length}`;
    }
    
    query += ` ORDER BY b.booking_date DESC, b.booking_time DESC`;
    
    params.push(limit, offset);
    query += ` LIMIT $${params.length - 1} OFFSET $${params.length}`;
    
    const result = await db.query(query, params);
    res.json(result.rows);
  } catch (error) {
    console.error('Get all bookings error:', error);
    res.status(500).json({ error: 'Failed to fetch bookings' });
  }
});

router.patch('/bookings/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ['pending', 'confirmed', 'in-progress', 'completed', 'cancelled'];
    
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ error: 'Invalid status' });
    }

    const result = await db.query(
      `UPDATE bookings 
       SET status = $1, updated_at = CURRENT_TIMESTAMP
       WHERE id = $2
       RETURNING *`,
      [status, req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    res.json({
      message: 'Booking status updated successfully',
      booking: result.rows[0]
    });
  } catch (error) {
    console.error('Update booking status error:', error);
    res.status(500).json({ error: 'Failed to update booking status' });
  }
});

router.get('/customers', async (req, res) => {
  try {
    const result = await db.query(`
      SELECT u.*, 
             COUNT(b.id) as total_bookings,
             COALESCE(SUM(b.total_price), 0) as total_spent
      FROM users u
      LEFT JOIN bookings b ON u.id = b.user_id
      WHERE u.role = 'customer'
      GROUP BY u.id
      ORDER BY total_spent DESC
    `);

    res.json(result.rows);
  } catch (error) {
    console.error('Get customers error:', error);
    res.status(500).json({ error: 'Failed to fetch customers' });
  }
});

router.get('/revenue', async (req, res) => {
  try {
    const { period = 'month' } = req.query;
    
    let dateFormat;
    switch (period) {
      case 'day':
        dateFormat = 'YYYY-MM-DD';
        break;
      case 'week':
        dateFormat = 'YYYY-WW';
        break;
      case 'year':
        dateFormat = 'YYYY';
        break;
      default:
        dateFormat = 'YYYY-MM';
    }

    const result = await db.query(`
      SELECT 
        TO_CHAR(created_at, $1) as period,
        COUNT(*) as booking_count,
        SUM(total_price) as revenue
      FROM bookings
      WHERE status = 'completed' AND payment_status = 'paid'
      GROUP BY period
      ORDER BY period DESC
      LIMIT 12
    `, [dateFormat]);

    res.json(result.rows);
  } catch (error) {
    console.error('Get revenue error:', error);
    res.status(500).json({ error: 'Failed to fetch revenue data' });
  }
});

module.exports = router;
