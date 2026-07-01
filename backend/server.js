require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(express.json());

const allowedOrigins = (process.env.ALLOWED_ORIGINS || '').split(',');
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));

// Get all categories
app.get('/api/categories', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM categories ORDER BY id ASC');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get companies by category
app.get('/api/companies/:categoryId', async (req, res) => {
  try {
    const { rows } = await db.query('SELECT * FROM companies WHERE category_id = $1 ORDER BY id ASC', [req.params.categoryId]);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all projects or filter by domain/level
app.get('/api/projects', async (req, res) => {
  try {
    const { domain, level } = req.query;
    let query = 'SELECT * FROM projects WHERE 1=1';
    let params = [];
    let paramIndex = 1;

    if (domain) {
      query += ` AND domain = $${paramIndex++}`;
      params.push(domain);
    }
    if (level && level !== 'All') {
      query += ` AND level = $${paramIndex++}`;
      params.push(level);
    }
    query += ' ORDER BY id ASC';

    const { rows } = await db.query(query, params);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
