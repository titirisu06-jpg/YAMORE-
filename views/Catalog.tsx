
import React from 'react';
import { products } from '../data/products';
import { Category, Product } from '../types';
import CategorySection from '../components/CategorySection';

interface CatalogProps {
  onProductClick: (p: Product) => void;
}

const Catalog: React.FC<CatalogProps> = ({ onProductClick }) => {
  const categories = Object.values(Category);

  return (
    <div id="catalogo" className="pt-24 min-h-screen scroll-mt-20">
      <header className="px-4 mb-16 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase mb-6 leading-none">Catálogo</h1>
        <div className="h-1 w-20 bg-white mb-6" />
        <p className="text-zinc-500 text-sm md:text-lg max-w-xl font-medium uppercase tracking-tight">
          Navega por nuestras colecciones. Cada prenda está pensada para ofrecer máxima comodidad sin perder el estilo premium.
        </p>
      </header>

      <div className="max-w-7xl mx-auto">
        {categories.map((cat) => (
          <CategorySection 
            key={cat} 
            category={cat} 
            products={products.filter(p => p.category === cat)}
            onProductClick={onProductClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
