const axios = require('axios');

async function testLogin() {
  console.log('Testing admin login...\n');
  
  try {
    const response = await axios.post('https://haywood123.onrender.com/api/auth/login', {
      email: 'haywoodlatrice4@gmail.com',
      password: 'Admin123!'
    });
    
    console.log('✅ Login successful!');
    console.log('User:', response.data.user);
    console.log('Token received:', response.data.token ? 'Yes' : 'No');
  } catch (error) {
    console.log('❌ Login failed');
    console.log('Error:', error.response?.data || error.message);
  }
}

testLogin();
