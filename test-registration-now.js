const axios = require('axios');

async function testRegistration() {
  console.log('Testing registration with firstName and lastName...\n');
  
  const testData = {
    firstName: 'Test',
    lastName: 'User',
    email: `testuser${Date.now()}@example.com`,
    phone: '555-1234',
    password: 'Test123!'
  };
  
  console.log('Sending data:', testData);
  
  try {
    const response = await axios.post('https://haywood123.onrender.com/api/auth/register', testData);
    console.log('\n✅ Registration successful!');
    console.log('Response:', response.data);
  } catch (error) {
    console.log('\n❌ Registration failed');
    console.log('Status:', error.response?.status);
    console.log('Error:', error.response?.data);
    console.log('\nFull error:', error.message);
  }
}

testRegistration();
