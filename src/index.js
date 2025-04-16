import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client' in React 18
import App from './App';
import { AuthProvider } from './AuthContext'; // Adjust the path as necessary

const root = ReactDOM.createRoot(document.getElementById('root')); // Create root for React 18
root.render(
  <AuthProvider>
    <App />
  </AuthProvider>
);
