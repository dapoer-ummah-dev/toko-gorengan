import { useMemo, useState } from 'react';
import { CATEGORIES, products } from '../data/products.js';
import ProductCard from './ProductCard.jsx';

export default function ProductList() {
  const [activeCategory, setActiveCategory] = useState('Semua');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'Semua') return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="menu" className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-6 text-center sm:text-left">
        <h2 className="font-display text-2xl font-bold text-brown-700 sm:text-3xl">
          Menu Gorengan Hari Ini
        </h2>
        <p className="mt-1 text-sm text-brown-400">
          Pilih gorengan favoritmu, langsung masuk ke keranjang.
        </p>
      </div>

      <div className="mb-6 flex gap-2 overflow-x-auto pb-1 sm:flex-wrap sm:overflow-visible">
        {CATEGORIES.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? 'bg-brown-700 text-cream shadow-warm'
                  : 'bg-white text-brown-500 ring-1 ring-brown-100 hover:bg-brown-50'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="mt-10 text-center text-sm text-brown-400">Belum ada menu di kategori ini.</p>
      )}
    </section>
  );
}
