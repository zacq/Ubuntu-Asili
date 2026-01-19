
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <Link to="/" className="flex flex-col">
          <span className={`text-2xl font-serif font-black tracking-tighter ${scrolled ? 'text-[#1E3A34]' : 'text-white'}`}>
            UBUNTU ASILI
          </span>
          <span className={`text-[10px] font-bold tracking-[0.3em] uppercase ${scrolled ? 'text-[#C5A059]' : 'text-white/80'}`}>
            Africa Travel & Land
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-10">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-[11px] font-bold tracking-widest transition-colors hover:text-[#C5A059] ${
                location.pathname === item.path ? 'text-[#C5A059]' : (scrolled ? 'text-[#1E3A34]' : 'text-white')
              }`}
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
          <Link
            to="/contact"
            className="bg-[#C5A059] hover:bg-[#b08e4d] text-white px-8 py-3 rounded-full text-xs font-bold transition-all hover:shadow-lg shadow-[#C5A059]/20"
          >
            PLAN YOUR TRIP
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 rounded-lg bg-white/10 backdrop-blur-sm" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className={scrolled ? 'text-[#1E3A34]' : 'text-white'} /> : <Menu className={scrolled ? 'text-[#1E3A34]' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-[#1E3A34] z-[-1] flex flex-col justify-center items-center space-y-8 animate-in fade-in duration-300">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="text-3xl font-serif text-white hover:text-[#C5A059] transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-[#C5A059] text-white px-12 py-4 rounded-full text-lg font-bold"
          >
            Plan Your Trip
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
