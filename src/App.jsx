import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductList from './components/ProductList.jsx';
import InfoSection from './components/InfoSection.jsx';
import Footer from './components/Footer.jsx';
import CartDrawer from './components/CartDrawer.jsx';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream font-sans text-brown-700">
      <Navbar onCartClick={() => setIsCartOpen(true)} />

      <main>
        <Hero />
        <ProductList />
        <InfoSection />
      </main>

      <Footer />

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
