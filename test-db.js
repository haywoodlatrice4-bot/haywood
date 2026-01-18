const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

async function testConnection() {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('✓ Database connected successfully!');
    console.log('Current time:', result.rows[0].now);
    await pool.end();
    process.exit(0);
  } catch (error) {
    console.error('✗ Database connection failed:', error.message);
    await pool.end();
    process.exit(1);
  }
}

testConnection();
