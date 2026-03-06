
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './views/Home';
import Catalog from './views/Catalog';
import ProductDetail from './views/ProductDetail';
import FAQ from './views/FAQ';
import Location from './views/Location';
import About from './views/About';
import { View, Product } from './types';
import { generateWhatsAppLink } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    // Only scroll to top if not intended for a specific section
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [currentView, selectedProduct]);

  const navigateToProduct = (p: Product) => {
    setSelectedProduct(p);
    setCurrentView('detail');
  };

  const renderView = () => {
    if (selectedProduct && currentView === 'detail') {
      return (
        <ProductDetail 
          product={selectedProduct} 
          onBack={() => {
            setSelectedProduct(null);
            setCurrentView('catalog');
          }} 
        />
      );
    }

    switch (currentView) {
      case 'home':
        return (
          <>
            <Home onProductClick={navigateToProduct} />
            <Catalog onProductClick={navigateToProduct} />
          </>
        );
      case 'catalog':
        return <Catalog onProductClick={navigateToProduct} />;
      case 'faq':
        return <FAQ />;
      case 'location':
        return <Location />;
      case 'about':
        return <About />;
      default:
        return <Home onProductClick={navigateToProduct} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-zinc-950 selection:bg-white selection:text-black">
      <Navbar 
        setView={(view) => {
          setSelectedProduct(null);
          setCurrentView(view);
        }} 
        currentView={currentView} 
      />
      
      <main className="flex-grow">
        {renderView()}
      </main>

      <Footer />

      {/* Floating WhatsApp Action for General Queries */}
      <a 
        href={generateWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-white text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center border border-zinc-200 active:scale-90"
        title="Consulta Directa"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.316 1.592 5.43 0 9.856-4.426 9.858-9.855.002-5.43-4.425-9.856-9.856-9.858-5.43 0-9.856 4.426-9.858 9.856 0 2.115.556 4.108 1.611 5.86l-.609 2.226 2.288-.6zm10.364-7.441c-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        </svg>
      </a>
    </div>
  );
};

export default App;
