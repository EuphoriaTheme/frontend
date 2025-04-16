import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { redirect } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // To track loading state

  const fetchUser = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      console.error("No token found in localStorage");
      redirect('/'); // Redirect to login if no token
      return; // Prevent the request if there's no token
    }
  
    try {
      const res = await axios.get('https://api.euphoriatheme.uk/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });
  
      const fetchedUser = res.data;
      if (!fetchedUser.avatar) {
        fetchedUser.avatar = `https://cdn.discordapp.com/embed/avatars/0.png`;
      }
      setUser(fetchedUser);
    } catch (err) {
      console.error('Failed to fetch user:', err);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Auto-refresh JWT token if it's expiring
  const refreshJWT = async () => {
    const token = localStorage.getItem('token');
    if (!token) return;

    const expirationTime = new Date(localStorage.getItem('token_expiry')); // Set the expiry time when token is first set
    const currentTime = new Date();

    // If the token is expiring within 5 minutes, refresh it
    if (expirationTime - currentTime < 5 * 60 * 1000) {
      try {
        const res = await axios.post('https://api.euphoriatheme.uk/auth/refresh', null, {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        });
        const newToken = res.data.token;
        localStorage.setItem('token', newToken);
        // Optionally update expiry
        localStorage.setItem('token_expiry', res.data.expiry);
        fetchUser(); // Re-fetch the user with the new token
      } catch (err) {
        console.error('Failed to refresh token:', err);
      }
    }
  };

  // Auto-refresh token every 5 minutes (adjust based on your needs)
  useEffect(() => {
    if (user) {
      const interval = setInterval(() => {
        refreshJWT();
      }, 60 * 60 * 1000); // Refresh every 60 minutes
      return () => clearInterval(interval); // Clear interval on cleanup
    }
  }, [user]);

  useEffect(() => {
    fetchUser(); // Fetch user on mount
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser, fetchUser, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
