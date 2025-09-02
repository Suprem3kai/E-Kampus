// Simple API test without service worker
export const testAPI = async () => {
  try {
    const response = await fetch('https://e-kampus.co.zw/accounts/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        username: 'test_user',
        email: 'test@example.com',
        password: 'test_password'
      })
    });
    
    console.log('API Test Response Status:', response.status);
    console.log('API Test Response Headers:', response.headers);
    
    const data = await response.json();
    console.log('API Test Response Data:', data);
    
    return { success: true, data, status: response.status };
  } catch (error) {
    console.error('API Test Error:', error);
    return { success: false, error: error.message };
  }
};

// Test function to call from browser console
window.testEKampusAPI = testAPI;
