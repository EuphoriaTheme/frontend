import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Donators from "./components/Donators";
import Contributors from "./components/Contributors";
import Footer from "./components/Footer";
import Details from "./components/Details";
import ProtectedRoute from './ProtectedRoute'; // Import the protected route
import './styles.css';

export default function App() {
  return (
    <Router>
      <div className="bg-dark text-white">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Details />
                <Products />
                <Donators />
                <Contributors />
              </>
            }
          />
          {/* Protected Route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Details />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
