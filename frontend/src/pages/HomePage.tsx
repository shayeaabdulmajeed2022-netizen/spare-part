import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const HomePage: React.FC = () => {
  const [products] = useState([
    {
      id: '1',
      name: 'Laptop Battery',
      price: 79.99,
      image: 'https://via.placeholder.com/300x200?text=Laptop+Battery',
      rating: 4.5,
    },
    {
      id: '2',
      name: 'USB-C Cable',
      price: 19.99,
      image: 'https://via.placeholder.com/300x200?text=USB-C+Cable',
      rating: 4.8,
    },
    {
      id: '3',
      name: 'Screen Protector',
      price: 9.99,
      image: 'https://via.placeholder.com/300x200?text=Screen+Protector',
      rating: 4.3,
    },
    {
      id: '4',
      name: 'Phone Charger',
      price: 29.99,
      image: 'https://via.placeholder.com/300x200?text=Phone+Charger',
      rating: 4.6,
    },
  ]);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Spare Part</h1>
          <p className="text-xl mb-8">Find quality electronics spare parts at unbeatable prices</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </section>

      {/* Products Section */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Quick delivery to your doorstep</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-semibold mb-2">Secure Payment</h3>
              <p className="text-gray-600">Safe and encrypted transactions</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-600">Authentic products with warranty</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
