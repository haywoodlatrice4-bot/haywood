// Fix Admin Password - Hash the password properly
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');

const connectionString = 'postgresql://threespaceshine_user:CS1KlIPusXa6CjjFRfI0Tuit8Kf8c8c4@dpg-d5mnkld6ubrc73abq9tg-a.ohio-postgres.render.com/threespaceshine';

const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

async function fixAdminPassword() {
  console.log('🔐 Fixing admin password...\n');

  try {
    // Hash the password "Admin123!"
    const password = 'Admin123!';
    const hashedPassword = await bcrypt.hash(password, 10);
    
    console.log('✅ Password hashed successfully');
    console.log('🔗 Connecting to database...\n');

    // Update admin user with proper hashed password
    const result = await pool.query(
      'UPDATE users SET password = $1 WHERE email = $2 RETURNING id, email, is_admin',
      [hashedPassword, 'haywoodlatrice4@gmail.com']
    );

    if (result.rows.length > 0) {
      console.log('✅ Admin password updated successfully!');
      console.log('📧 Email:', result.rows[0].email);
      console.log('🔑 Password: Admin123!');
      console.log('👑 Admin:', result.rows[0].is_admin);
      console.log('\n🎉 You can now login with:');
      console.log('   Email: haywoodlatrice4@gmail.com');
      console.log('   Password: Admin123!\n');
    } else {
      console.log('⚠️  Admin user not found. Creating new admin user...');
      
      const insertResult = await pool.query(
        'INSERT INTO users (name, email, phone, password, is_admin) VALUES ($1, $2, $3, $4, $5) RETURNING id, email',
        ['Admin', 'haywoodlatrice4@gmail.com', '(317) 446-3498', hashedPassword, true]
      );
      
      console.log('✅ Admin user created!');
      console.log('📧 Email:', insertResult.rows[0].email);
      console.log('🔑 Password: Admin123!\n');
    }

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await pool.end();
    console.log('🔌 Database connection closed');
  }
}

fixAdminPassword();
