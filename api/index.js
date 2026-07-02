const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
  max: 3,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 10000,
});

module.exports = async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const path = req.url.split('?')[0];

  try {
    if (path === '/api/all' || path === '/api') {
      const [catRes, compRes, projRes] = await Promise.all([
        pool.query('SELECT * FROM categories ORDER BY id ASC'),
        pool.query('SELECT * FROM companies ORDER BY id ASC'),
        pool.query('SELECT * FROM projects ORDER BY id ASC'),
      ]);

      const companyData = {};
      compRes.rows.forEach(c => {
        if (!companyData[c.category_id]) companyData[c.category_id] = [];
        companyData[c.category_id].push({
          id: c.id, name: c.name, url: c.url, desc: c.description
        });
      });

      return res.status(200).json({
        categories: catRes.rows.map(c => ({
          id: c.id, name: c.name, icon: c.icon, gradient: c.gradient, desc: c.description
        })),
        companies: companyData,
        projects: projRes.rows.map(p => ({
          id: p.id, domain: p.domain, level: p.level,
          title: p.title, tools: p.tools, desc: p.description
        }))
      });
    }

    if (path === '/api/categories') {
      const { rows } = await pool.query('SELECT * FROM categories ORDER BY id ASC');
      return res.status(200).json(rows);
    }

    const companyMatch = path.match(/^\/api\/companies\/(.+)$/);
    if (companyMatch) {
      const { rows } = await pool.query(
        'SELECT * FROM companies WHERE category_id = $1 ORDER BY id ASC',
        [companyMatch[1]]
      );
      return res.status(200).json(rows);
    }

    if (path === '/api/projects') {
      const { domain, level } = req.query || {};
      let query = 'SELECT * FROM projects WHERE 1=1';
      const params = [];
      if (domain) { query += ` AND domain = $${params.length + 1}`; params.push(domain); }
      if (level && level !== 'All') { query += ` AND level = $${params.length + 1}`; params.push(level); }
      query += ' ORDER BY id ASC';
      const { rows } = await pool.query(query, params);
      return res.status(200).json(rows);
    }

    return res.status(404).json({ error: 'Route not found' });

  } catch (err) {
    console.error('API error:', err.message);
    return res.status(500).json({ error: 'Server error', message: err.message });
  }
};
