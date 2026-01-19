// Test if backend can connect to database
const axios = require('axios');

const BACKEND_URL = 'https://haywood123.onrender.com';

async function testBackend() {
  console.log('🔍 Testing Three Space Shine Backend Connection\n');
  console.log('Backend URL:', BACKEND_URL);
  console.log('Frontend URL: https://threespacshine-production.netlify.app\n');

  // Test 1: Root endpoint
  console.log('Test 1: Checking if backend is running...');
  try {
    const rootResponse = await axios.get(BACKEND_URL);
    console.log('✅ Backend is running!');
    console.log('Response:', JSON.stringify(rootResponse.data, null, 2));
  } catch (error) {
    console.log('❌ Backend root endpoint failed:', error.message);
  }

  // Test 2: Health endpoint
  console.log('\nTest 2: Checking health endpoint...');
  try {
    const healthResponse = await axios.get(`${BACKEND_URL}/api/health`);
    console.log('✅ Health endpoint working!');
    console.log('Response:', JSON.stringify(healthResponse.data, null, 2));
  } catch (error) {
    console.log('❌ Health endpoint failed:', error.message);
  }

  // Test 3: Services endpoint (requires database)
  console.log('\nTest 3: Checking services endpoint (database test)...');
  try {
    const servicesResponse = await axios.get(`${BACKEND_URL}/api/services`);
    console.log('✅ Services endpoint working! Database is connected!');
    console.log(`Found ${servicesResponse.data.length} services`);
  } catch (error) {
    console.log('❌ Services endpoint failed:', error.response?.data || error.message);
    console.log('⚠️  This means backend cannot connect to database!');
  }

  // Test 4: Try registration
  console.log('\nTest 4: Testing registration endpoint...');
  const testUser = {
    firstName: 'Test',
    lastName: 'User',
    email: `test${Date.now()}@example.com`,
    phone: '555-0123',
    password: 'Test123!'
  };
  
  try {
    const registerResponse = await axios.post(`${BACKEND_URL}/api/auth/register`, testUser);
    console.log('✅ Registration working!');
    console.log('User created:', registerResponse.data.user?.email);
  } catch (error) {
    console.log('❌ Registration failed:', error.response?.data || error.message);
  }

  console.log('\n' + '='.repeat(60));
  console.log('DIAGNOSIS:');
  console.log('='.repeat(60));
  console.log('\nIf services endpoint failed, the backend is NOT connected to database.');
  console.log('You MUST update DATABASE_URL on Render:\n');
  console.log('1. Go to https://dashboard.render.com');
  console.log('2. Click "haywood123" web service');
  console.log('3. Click "Environment" tab');
  console.log('4. Update DATABASE_URL to:');
  console.log('   postgresql://threespaceshine_user:CS1KlIPusXa6CjjFRfI0Tuit8Kf8c8c4@dpg-d5mnkld6ubrc73abq9tg-a.ohio-postgres.render.com/threespaceshine');
  console.log('5. Save and wait 2-3 minutes for redeploy\n');
}

testBackend();
