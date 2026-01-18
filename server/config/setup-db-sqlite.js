const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const setupDatabase = () => {
  try {
    console.log('Setting up Three Space Shine SQLite database...\n');

    const db = new Database('threespacshine.db');

    db.exec(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        first_name TEXT,
        last_name TEXT,
        phone TEXT,
        role TEXT DEFAULT 'customer',
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✓ Users table created');

    db.exec(`
      CREATE TABLE IF NOT EXISTS services (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        category TEXT NOT NULL,
        package_type TEXT NOT NULL,
        price REAL NOT NULL,
        duration INTEGER NOT NULL,
        description TEXT,
        features TEXT,
        active INTEGER DEFAULT 1,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `);
    console.log('✓ Services table created');

    db.exec(`
      CREATE TABLE IF NOT EXISTS bookings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        service_id INTEGER,
        booking_date DATE NOT NULL,
        booking_time TIME NOT NULL,
        status TEXT DEFAULT 'pending',
        address TEXT NOT NULL,
        city TEXT DEFAULT 'Indianapolis',
        state TEXT DEFAULT 'Indiana',
        zip_code TEXT,
        special_instructions TEXT,
        total_price REAL NOT NULL,
        payment_status TEXT DEFAULT 'pending',
        payment_id TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id),
        FOREIGN KEY (service_id) REFERENCES services(id)
      );
    `);
    console.log('✓ Bookings table created');

    db.exec(`
      CREATE TABLE IF NOT EXISTS reviews (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        booking_id INTEGER,
        user_id INTEGER,
        rating INTEGER CHECK (rating >= 1 AND rating <= 5),
        comment TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (booking_id) REFERENCES bookings(id),
        FOREIGN KEY (user_id) REFERENCES users(id)
      );
    `);
    console.log('✓ Reviews table created');

    db.exec(`
      CREATE TABLE IF NOT EXISTS gallery (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        booking_id INTEGER,
        image_url TEXT NOT NULL,
        image_type TEXT CHECK (image_type IN ('before', 'after')),
        category TEXT,
        created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (booking_id) REFERENCES bookings(id)
      );
    `);
    console.log('✓ Gallery table created');

    const hashedPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD || 'Admin123!', 10);
    const insertAdmin = db.prepare(`
      INSERT OR IGNORE INTO users (email, password, first_name, last_name, role)
      VALUES (?, ?, ?, ?, ?)
    `);
    insertAdmin.run(
      process.env.ADMIN_EMAIL || 'admin@threespacshine.com',
      hashedPassword,
      'Admin',
      'User',
      'admin'
    );
    console.log('✓ Admin user created');

    const services = [
      ['Car Detailing - Basic', 'car', 'basic', 79.00, 120, 'Exterior wash, interior vacuum, windows cleaned', JSON.stringify(['Exterior hand wash', 'Interior vacuum', 'Window cleaning', 'Tire shine'])],
      ['Car Detailing - Premium', 'car', 'premium', 149.00, 180, 'Basic package plus wax, deep interior clean, tire shine', JSON.stringify(['Everything in Basic', 'Hand wax application', 'Deep interior cleaning', 'Leather conditioning', 'Engine bay cleaning'])],
      ['Car Detailing - Elite', 'car', 'elite', 249.00, 300, 'Premium package plus paint correction, ceramic coating', JSON.stringify(['Everything in Premium', 'Paint correction', 'Ceramic coating', 'Headlight restoration', 'Complete detailing'])],
      
      ['House Detailing - Basic', 'house', 'basic', 199.00, 240, 'Standard cleaning, dusting, vacuuming', JSON.stringify(['Dusting all surfaces', 'Vacuum all floors', 'Kitchen cleaning', 'Bathroom cleaning', 'Trash removal'])],
      ['House Detailing - Premium', 'house', 'premium', 349.00, 360, 'Deep clean, windows, appliances', JSON.stringify(['Everything in Basic', 'Window cleaning', 'Appliance deep clean', 'Baseboard cleaning', 'Cabinet exteriors'])],
      ['House Detailing - Elite', 'house', 'elite', 549.00, 480, 'Premium plus carpet cleaning, pressure washing', JSON.stringify(['Everything in Premium', 'Carpet steam cleaning', 'Pressure washing exterior', 'Garage cleaning', 'Full sanitization'])],
      
      ['Office Detailing - Basic', 'office', 'basic', 299.00, 180, 'Desk areas, common spaces, trash removal', JSON.stringify(['Desk cleaning', 'Common area cleaning', 'Trash removal', 'Vacuum floors', 'Restroom cleaning'])],
      ['Office Detailing - Premium', 'office', 'premium', 499.00, 300, 'Deep clean, windows, sanitization', JSON.stringify(['Everything in Basic', 'Window cleaning', 'Deep sanitization', 'Kitchen/break room', 'Conference rooms'])],
      ['Office Detailing - Elite', 'office', 'elite', 799.00, 420, 'Premium plus carpet, upholstery, full sanitization', JSON.stringify(['Everything in Premium', 'Carpet cleaning', 'Upholstery cleaning', 'Air vent cleaning', 'Complete disinfection'])]
    ];

    const insertService = db.prepare(`
      INSERT INTO services (name, category, package_type, price, duration, description, features)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `);

    for (const service of services) {
      insertService.run(...service);
    }
    console.log('✓ Services added');

    db.close();

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
