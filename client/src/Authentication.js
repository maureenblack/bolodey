import axios from 'axios';

const fetchUserProfile = async () => {
  try {
    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    const response = await axios.get('http://localhost:5000/api/user', config);
    const user = response.data;
    // Update user state
  } catch (error) {
    console.error(error);
    // Handle authentication error (e.g., redirect to login)
  }
};