
import React, { useState } from 'react';
import { BRAND_NAME } from '../constants';
import { View } from '../types';

interface NavbarProps {
  setView: (v: View) => void;
  currentView: View;
}

const Navbar: React.FC<NavbarProps> = ({ setView, currentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems: { label: string, view: View }[] = [
    { label: 'Inicio', view: 'home' },
    { label: 'Catálogo', view: 'catalog' },
    { label: 'Historia', view: 'about' },
    { label: 'Ubicación', view: 'location' },
    { label: 'FAQ', view: 'faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <button 
          onClick={() => setView('home')} 
          className="text-2xl font-black tracking-tighter text-white"
        >
          {BRAND_NAME}
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <button
              key={item.view}
              onClick={() => setView(item.view)}
              className={`text-sm font-medium tracking-wide transition-colors ${
                currentView === item.view ? 'text-white' : 'text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-zinc-400"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-b border-zinc-900 absolute top-16 left-0 w-full animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col p-4 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.view}
                onClick={() => {
                  setView(item.view);
                  setIsOpen(false);
                }}
                className={`text-lg font-semibold ${
                  currentView === item.view ? 'text-white' : 'text-zinc-500'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
