require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
app.use(express.json());

// Allow all origins for Vercel Deployment to avoid CORS issues
app.use(cors());

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

// Get all data at once for the frontend offline-first sync
app.get('/api/all', async (req, res) => {
  try {
    const categoriesReq = db.query('SELECT * FROM categories ORDER BY id ASC');
    const companiesReq = db.query('SELECT * FROM companies ORDER BY id ASC');
    const projectsReq = db.query('SELECT * FROM projects ORDER BY id ASC');
    
    const [catRes, compRes, projRes] = await Promise.all([categoriesReq, companiesReq, projectsReq]);
    
    // Format companies into the COMPANY_DATA structure: { 'cat-id': [ ... ] }
    const companyData = {};
    compRes.rows.forEach(c => {
      if (!companyData[c.category_id]) companyData[c.category_id] = [];
      companyData[c.category_id].push({
        id: c.id,
        name: c.name,
        url: c.url,
        desc: c.description
      });
    });

    res.json({
      categories: catRes.rows.map(c => ({
        id: c.id,
        name: c.name,
        icon: c.icon,
        gradient: c.gradient,
        desc: c.description
      })),
      companies: companyData,
      projects: projRes.rows.map(p => ({
        id: p.id,
        domain: p.domain,
        level: p.level,
        title: p.title,
        tools: p.tools,
        desc: p.description
      }))
    });
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

// For Vercel Serverless Functions, we export the Express app
module.exports = app;
