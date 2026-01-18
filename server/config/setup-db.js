const { pool } = require('./db');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const setupDatabase = async () => {
  try {
    console.log('Setting up Three Space Shine database...\n');

    await pool.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        first_name VARCHAR(100),
        last_name VARCHAR(100),
        phone VARCHAR(20),
        role VARCHAR(20) DEFAULT 'customer',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✓ Users table created');

    await pool.query(`
      CREATE TABLE IF NOT EXISTS services (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100) NOT NULL,
        category VARCHAR(50) NOT NULL,
        package_type VARCHAR(50) NOT NULL,
        price DECIMAL(10, 2) NOT NULL,
        duration INTEGER NOT NULL,
        description TEXT,
        features TEXT[],
        active BOOLEAN DEFAULT true,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✓ Services table created');

    await pool.query(`
      CREATE TABLE IF NOT EXISTS bookings (
        id SERIAL PRIMARY KEY,
        user_id INTEGER REFERENCES users(id),
        service_id INTEGER REFERENCES services(id),
        booking_date DATE NOT NULL,
        booking_time TIME NOT NULL,
        status VARCHAR(50) DEFAULT 'pending',
        address TEXT NOT NULL,
        city VARCHAR(100) DEFAULT 'Indianapolis',
        state VARCHAR(50) DEFAULT 'Indiana',
        zip_code VARCHAR(10),
        special_instructions TEXT,
        total_price DECIMAL(10, 2) NOT NULL,
        payment_status VARCHAR(50) DEFAULT 'pending',
        payment_id VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✓ Bookings table created');

    await pool.query(`
      CREATE TABLE IF NOT EXISTS reviews (
        id SERIAL PRIMARY KEY,
        booking_id INTEGER REFERENCES bookings(id),
        user_id INTEGER REFERENCES users(id),
        rating INTEGER CHECK (rating >= 1 AND rating <= 5),
        comment TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✓ Reviews table created');

    await pool.query(`
      CREATE TABLE IF NOT EXISTS gallery (
        id SERIAL PRIMARY KEY,
        booking_id INTEGER REFERENCES bookings(id),
        image_url VARCHAR(500) NOT NULL,
        image_type VARCHAR(20) CHECK (image_type IN ('before', 'after')),
        category VARCHAR(50),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✓ Gallery table created');

    const hashedPassword = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'Admin123!', 10);
    await pool.query(`
      INSERT INTO users (email, password, first_name, last_name, role)
      VALUES ($1, $2, $3, $4, $5)
      ON CONFLICT (email) DO NOTHING;
    `, [
      process.env.ADMIN_EMAIL || 'admin@threespacshine.com',
      hashedPassword,
      'Admin',
      'User',
      'admin'
    ]);
    console.log('✓ Admin user created');

    const services = [
      ['Car Detailing - Basic', 'car', 'basic', 79.00, 120, 'Exterior wash, interior vacuum, windows cleaned', ['Exterior hand wash', 'Interior vacuum', 'Window cleaning', 'Tire shine']],
      ['Car Detailing - Premium', 'car', 'premium', 149.00, 180, 'Basic package plus wax, deep interior clean, tire shine', ['Everything in Basic', 'Hand wax application', 'Deep interior cleaning', 'Leather conditioning', 'Engine bay cleaning']],
      ['Car Detailing - Elite', 'car', 'elite', 249.00, 300, 'Premium package plus paint correction, ceramic coating', ['Everything in Premium', 'Paint correction', 'Ceramic coating', 'Headlight restoration', 'Complete detailing']],
      
      ['House Detailing - Basic', 'house', 'basic', 199.00, 240, 'Standard cleaning, dusting, vacuuming', ['Dusting all surfaces', 'Vacuum all floors', 'Kitchen cleaning', 'Bathroom cleaning', 'Trash removal']],
      ['House Detailing - Premium', 'house', 'premium', 349.00, 360, 'Deep clean, windows, appliances', ['Everything in Basic', 'Window cleaning', 'Appliance deep clean', 'Baseboard cleaning', 'Cabinet exteriors']],
      ['House Detailing - Elite', 'house', 'elite', 549.00, 480, 'Premium plus carpet cleaning, pressure washing', ['Everything in Premium', 'Carpet steam cleaning', 'Pressure washing exterior', 'Garage cleaning', 'Full sanitization']],
      
      ['Office Detailing - Basic', 'office', 'basic', 299.00, 180, 'Desk areas, common spaces, trash removal', ['Desk cleaning', 'Common area cleaning', 'Trash removal', 'Vacuum floors', 'Restroom cleaning']],
      ['Office Detailing - Premium', 'office', 'premium', 499.00, 300, 'Deep clean, windows, sanitization', ['Everything in Basic', 'Window cleaning', 'Deep sanitization', 'Kitchen/break room', 'Conference rooms']],
      ['Office Detailing - Elite', 'office', 'elite', 799.00, 420, 'Premium plus carpet, upholstery, full sanitization', ['Everything in Premium', 'Carpet cleaning', 'Upholstery cleaning', 'Air vent cleaning', 'Complete disinfection']]
    ];

    for (const service of services) {
      await pool.query(`
        INSERT INTO services (name, category, package_type, price, duration, description, features)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        ON CONFLICT DO NOTHING;
      `, service);
    }
    console.log('✓ Services added');

    console.log('\n✅ Database setup complete!');
    console.log('\nDefault Admin Credentials:');
    console.log('Email:', process.env.ADMIN_EMAIL || 'admin@threespacshine.com');
    console.log('Password:', process.env.ADMIN_PASSWORD || 'Admin123!');
    console.log('\n⚠️  CHANGE THESE IN PRODUCTION!\n');

    process.exit(0);
  } catch (error) {
    console.error('Error setting up database:', error);
    process.exit(1);
  }
};

setupDatabase();
