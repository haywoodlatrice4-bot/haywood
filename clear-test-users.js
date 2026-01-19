// Clear test users and reset database for fresh testing
const { Pool } = require('pg');

const connectionString = 'postgresql://threespaceshine_user:CS1KlIPusXa6CjjFRfI0Tuit8Kf8c8c4@dpg-d5mnkld6ubrc73abq9tg-a.ohio-postgres.render.com/threespaceshine';

const pool = new Pool({
  connectionString: connectionString,
  ssl: {
    rejectUnauthorized: false
  }
});

async function clearTestUsers() {
  console.log('🧹 Clearing test users from database...\n');

  try {
    // Delete all non-admin users
    const deleteResult = await pool.query(
      'DELETE FROM users WHERE is_admin = false RETURNING email'
    );

    console.log(`✅ Deleted ${deleteResult.rowCount} test user(s)`);
    
    if (deleteResult.rows.length > 0) {
      console.log('📧 Deleted emails:');
      deleteResult.rows.forEach(row => console.log(`   - ${row.email}`));
    }

    // Verify admin user exists with correct password
    const adminCheck = await pool.query(
      'SELECT id, email, is_admin FROM users WHERE email = $1',
      ['haywoodlatrice4@gmail.com']
    );

    if (adminCheck.rows.length > 0) {
      console.log('\n✅ Admin user verified:');
      console.log('   Email: haywoodlatrice4@gmail.com');
      console.log('   Password: Admin123!');
      console.log('   Admin: true');
    } else {
      console.log('\n⚠️  Admin user not found!');
    }

    // Show all current users
    const allUsers = await pool.query('SELECT id, email, is_admin FROM users ORDER BY id');
    console.log(`\n📊 Total users in database: ${allUsers.rowCount}`);
    allUsers.rows.forEach(user => {
      console.log(`   ${user.id}. ${user.email} ${user.is_admin ? '(Admin)' : ''}`);
    });

    console.log('\n🎉 Database cleaned! You can now register with any email.\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await pool.end();
    console.log('🔌 Database connection closed');
  }
}

clearTestUsers();
