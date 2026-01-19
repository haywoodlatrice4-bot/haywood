// Database Setup Script for Render PostgreSQL
// This script will automatically create all tables and insert initial data

const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

// Your Render PostgreSQL connection string
const connectionString = 'postgresql://threespaceshine_user:CS1KlIPusXa6CjjFRfI0Tuit8Kf8c8c4@dpg-d5mnkld6ubrc73abq9tg-a.ohio-postgres.render.com/threespaceshine';

const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

async function setupDatabase() {
  console.log('🚀 Starting database setup...\n');

  try {
    // Read the SQL file
    const sqlFile = path.join(__dirname, 'setup-render-db.sql');
    const sql = fs.readFileSync(sqlFile, 'utf8');

    console.log('📄 SQL file loaded successfully');
    console.log('🔗 Connecting to Render PostgreSQL database...\n');

    // Execute the SQL
    await pool.query(sql);

    console.log('✅ Database setup complete!');
    console.log('✅ All tables created successfully');
    console.log('✅ Initial data inserted (9 services, admin user)');
    console.log('\n🎉 Your database is ready to use!\n');
    console.log('📋 What was created:');
    console.log('   - Users table');
    console.log('   - Services table (9 services)');
    console.log('   - Bookings table');
    console.log('   - Reviews table');
    console.log('   - Gallery table');
    console.log('   - Support Tickets table');
    console.log('   - Quotes table');
    console.log('   - Admin user: haywoodlatrice4@gmail.com\n');

  } catch (error) {
    console.error('❌ Error setting up database:', error.message);
    console.error('\nFull error:', error);
  } finally {
    await pool.end();
    console.log('🔌 Database connection closed');
  }
}

// Run the setup
setupDatabase();
