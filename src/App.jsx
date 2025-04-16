import React from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Donators from "./components/Donators";
import Contributors from "./components/Contributors";
import Footer from "./components/Footer";
import Details from "./components/Details";
import './styles.css';

export default function App() {
  return (
    <div className="bg-dark text-white">
      <Header />
      <Hero />
      <Details />
      <Products />
      <Donators />
      <Contributors />
      <Footer />
    </div>
  );
}
