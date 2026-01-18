const express = require('express');
const multer = require('multer');
const path = require('path');
const db = require('../config/db');
const { authenticateToken, isAdmin } = require('../middleware/auth');

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/gallery/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);

    if (extname && mimetype) {
      return cb(null, true);
    }
    cb(new Error('Only image files are allowed'));
  }
});

router.post('/', authenticateToken, isAdmin, upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No image file provided' });
    }

    const { bookingId, imageType, category } = req.body;
    const imageUrl = `/uploads/gallery/${req.file.filename}`;

    const result = await db.query(
      `INSERT INTO gallery (booking_id, image_url, image_type, category)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [bookingId || null, imageUrl, imageType, category]
    );

    res.status(201).json({
      message: 'Image uploaded successfully',
      image: result.rows[0]
    });
  } catch (error) {
    console.error('Upload image error:', error);
    res.status(500).json({ error: 'Failed to upload image' });
  }
});

router.get('/', async (req, res) => {
  try {
    const { category, imageType, limit = 20 } = req.query;
    
    let query = 'SELECT * FROM gallery WHERE 1=1';
    const params = [];
    
    if (category) {
      params.push(category);
      query += ` AND category = $${params.length}`;
    }
    
    if (imageType) {
      params.push(imageType);
      query += ` AND image_type = $${params.length}`;
    }
    
    params.push(limit);
    query += ` ORDER BY created_at DESC LIMIT $${params.length}`;
    
    const result = await db.query(query, params);
    res.json(result.rows);
  } catch (error) {
    console.error('Get gallery error:', error);
    res.status(500).json({ error: 'Failed to fetch gallery images' });
  }
});

router.delete('/:id', authenticateToken, isAdmin, async (req, res) => {
  try {
    const result = await db.query(
      'DELETE FROM gallery WHERE id = $1 RETURNING *',
      [req.params.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Image not found' });
    }

    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Delete image error:', error);
    res.status(500).json({ error: 'Failed to delete image' });
  }
});

module.exports = router;
