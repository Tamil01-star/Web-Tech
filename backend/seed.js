require('dotenv').config();
const db = require('../api/db');
const fs = require('fs');
const path = require('path');

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
    for (const cat of ECE_CATEGORIES) {
      await db.query(
        'INSERT INTO categories (id, name, icon, gradient, description) VALUES ($1, $2, $3, $4, $5)',
        [cat.id, cat.name, cat.icon, cat.gradient, cat.desc]
      );
    }
    
    console.log('Inserting companies...');
    for (const [catId, companies] of Object.entries(COMPANY_DATA)) {
      for (const comp of companies) {
        await db.query(
          'INSERT INTO companies (id, category_id, name, url, description) VALUES ($1, $2, $3, $4, $5)',
          [comp.id, catId, comp.name, comp.url, comp.desc]
        );
      }
    }
    
    console.log('Inserting projects...');
    for (const proj of ALL_ECE_PROJECTS) {
      await db.query(
        'INSERT INTO projects (id, domain, level, title, tools, description) VALUES ($1, $2, $3, $4, $5, $6)',
        [proj.id, proj.domain, proj.level, proj.title, proj.tools, proj.desc]
      );
    }
    
    console.log('🎉 Database seeding completed successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seed();
