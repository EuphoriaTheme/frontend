import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext'; // Make sure this is the correct path

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // While loading, don't redirect but show nothing or a loading spinner
  if (loading) {
    return <div>Loading...</div>; // Or use a loading spinner
  }

  // If the user is not authenticated, redirect to login
  if (!user) {
    return <Navigate to="/" />;
  }

  // If authenticated, render the protected content
  return children;
};

export default ProtectedRoute;
