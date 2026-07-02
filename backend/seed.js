require('dotenv').config();
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function seed() {
  try {
    console.log('Connecting to database...');

    
    // Create tables
    console.log('Creating tables...');
    await db.query(`
      CREATE TABLE IF NOT EXISTS categories (
        id VARCHAR(50) PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        icon VARCHAR(10),
        gradient VARCHAR(100),
        description TEXT
      );
      
      CREATE TABLE IF NOT EXISTS companies (
        id VARCHAR(50) PRIMARY KEY,
        category_id VARCHAR(50) REFERENCES categories(id) ON DELETE CASCADE,
        name VARCHAR(100) NOT NULL,
        url VARCHAR(255) NOT NULL,
        description TEXT
      );
      
      CREATE TABLE IF NOT EXISTS projects (
        id VARCHAR(50) PRIMARY KEY,
        domain VARCHAR(50) NOT NULL,
        level VARCHAR(20) NOT NULL,
        title VARCHAR(200) NOT NULL,
        tools TEXT,
        description TEXT
      );
    `);
    
    console.log('Tables created. Reading data.js...');
    
    // We can't directly require data.js because it's not a Node module, 
    // it just defines globals. Let's read it and extract the JSON-like objects.
    const dataJsPath = path.join(__dirname, '../js/data.js');
    const dataCode = fs.readFileSync(dataJsPath, 'utf8');
    
    // Quick hack to parse the JS objects from data.js
    let ECE_CATEGORIES, COMPANY_DATA, ALL_ECE_PROJECTS;
    
    // Evaluate in a sandbox context
    const vm = require('vm');
    const sandbox = {};
    vm.createContext(sandbox);
    
    // Convert const to var so they attach to the sandbox
    let patchedCode = dataCode.replace(/const /g, 'var ');
    vm.runInContext(patchedCode, sandbox);
    
    ECE_CATEGORIES = sandbox.ECE_CATEGORIES;
    COMPANY_DATA = sandbox.COMPANY_DATA;
    ALL_ECE_PROJECTS = sandbox.ALL_ECE_PROJECTS;
    
    console.log('Clearing existing data...');
    await db.query('DELETE FROM projects');
    await db.query('DELETE FROM companies');
    await db.query('DELETE FROM categories');
    
    console.log('Inserting categories...');
    if (ECE_CATEGORIES.length > 0) {
      const values = [];
      const placeholders = ECE_CATEGORIES.map((cat, idx) => {
        const offset = idx * 5;
        values.push(cat.id, cat.name, cat.icon, cat.gradient, cat.desc);
        return `($${offset+1}, $${offset+2}, $${offset+3}, $${offset+4}, $${offset+5})`;
      }).join(', ');
      await db.query(`INSERT INTO categories (id, name, icon, gradient, description) VALUES ${placeholders}`, values);
    }
    
    console.log('Inserting companies...');
    const flatCompanies = [];
    for (const [catId, companies] of Object.entries(COMPANY_DATA)) {
      for (const comp of companies) {
        flatCompanies.push({ id: comp.id, category_id: catId, name: comp.name, url: comp.url, desc: comp.desc });
      }
    }
    if (flatCompanies.length > 0) {
      // Process in chunks of 50 to avoid parameter limit of 65535 in pg (though flatCompanies is ~160, so 1 chunk is fine)
      const values = [];
      const placeholders = flatCompanies.map((comp, idx) => {
        const offset = idx * 5;
        values.push(comp.id, comp.category_id, comp.name, comp.url, comp.desc);
        return `($${offset+1}, $${offset+2}, $${offset+3}, $${offset+4}, $${offset+5})`;
      }).join(', ');
      await db.query(`INSERT INTO companies (id, category_id, name, url, description) VALUES ${placeholders}`, values);
    }
    
    console.log('Inserting projects...');
    if (ALL_ECE_PROJECTS.length > 0) {
      const values = [];
      const placeholders = ALL_ECE_PROJECTS.map((proj, idx) => {
        const offset = idx * 6;
        values.push(proj.id, proj.domain, proj.level, proj.title, proj.tools, proj.desc);
        return `($${offset+1}, $${offset+2}, $${offset+3}, $${offset+4}, $${offset+5}, $${offset+6})`;
      }).join(', ');
      await db.query(`INSERT INTO projects (id, domain, level, title, tools, description) VALUES ${placeholders}`, values);
    }
    
    console.log('🎉 Database seeding completed successfully!');
    await db.end();
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    try { await db.end(); } catch (e) {}
    process.exit(1);
  }
}

seed();
