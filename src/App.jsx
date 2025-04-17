import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/index/Hero";
import Products from "./components/index/Products";
import Donators from "./components/index/Donators";
import Contributors from "./components/index/Contributors";
import Footer from "./components/Footer";
import Details from "./components/index/Details";
import GalleryDashboard from "./components/dashboard/Gallery";
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
                <GalleryDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
