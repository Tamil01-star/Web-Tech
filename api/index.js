const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  max: 3,
  connectionTimeoutMillis: 10000,
});

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();

  try {
    const [catRes, compRes, projRes] = await Promise.all([
      pool.query('SELECT * FROM categories ORDER BY id ASC'),
      pool.query('SELECT * FROM companies ORDER BY id ASC'),
      pool.query('SELECT * FROM projects ORDER BY id ASC'),
    ]);

    const companyData = {};
    compRes.rows.forEach(c => {
      if (!companyData[c.category_id]) companyData[c.category_id] = [];
      companyData[c.category_id].push({ id: c.id, name: c.name, url: c.url, desc: c.description });
    });

    return res.status(200).json({
      categories: catRes.rows.map(c => ({ id: c.id, name: c.name, icon: c.icon, gradient: c.gradient, desc: c.description })),
      companies: companyData,
      projects: projRes.rows.map(p => ({ id: p.id, domain: p.domain, level: p.level, title: p.title, tools: p.tools, desc: p.description }))
    });
  } catch (err) {
    console.error('API error:', err.message);
    return res.status(500).json({ error: 'Server error', detail: err.message });
  }
};
