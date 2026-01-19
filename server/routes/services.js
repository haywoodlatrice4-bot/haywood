const express = require('express');
const db = require('../config/db');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const { category, package_type } = req.query;
    
    let query = 'SELECT * FROM services WHERE is_active = true';
    const params = [];
    
    if (category) {
      params.push(category);
      query += ` AND category = $${params.length}`;
    }
    
    if (package_type) {
      params.push(package_type);
      query += ` AND package_type = $${params.length}`;
    }
    
    query += ' ORDER BY category, price';
    
    const result = await db.query(query, params);
    res.json(result.rows);
  } catch (error) {
    console.error('Get services error:', error);
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT * FROM services WHERE id = $1 AND is_active = true',
      [req.params.id]
    );
    
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Service not found' });
    }
    
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Get service error:', error);
    res.status(500).json({ error: 'Failed to fetch service' });
  }
});

router.get('/category/:category', async (req, res) => {
  try {
    const result = await db.query(
      'SELECT * FROM services WHERE category = $1 AND is_active = true ORDER BY price',
      [req.params.category]
    );
    
    res.json(result.rows);
  } catch (error) {
    console.error('Get services by category error:', error);
    res.status(500).json({ error: 'Failed to fetch services' });
  }
});

module.exports = router;
