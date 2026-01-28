import { Flower2, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
            <Flower2 className="w-8 h-8 text-amber-700" />
            <div>
              <h1 className="text-2xl font-bold text-amber-900">Al Henna</h1>
              <p className="text-xs text-amber-700">by Iram</p>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-700 transition-colors">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-amber-700 transition-colors">Services</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-amber-700 transition-colors">Gallery</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-700 transition-colors">About</button>
            <button onClick={() => scrollToSection('contact')} className="bg-amber-700 text-white px-6 py-2 rounded-full hover:bg-amber-800 transition-colors">Book Now</button>
          </div>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-amber-700 transition-colors text-left">Home</button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-amber-700 transition-colors text-left">Services</button>
            <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-amber-700 transition-colors text-left">Gallery</button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-amber-700 transition-colors text-left">About</button>
            <button onClick={() => scrollToSection('contact')} className="bg-amber-700 text-white px-6 py-2 rounded-full hover:bg-amber-800 transition-colors text-center">Book Now</button>
          </div>
        )}
      </nav>
    </header>
  );
}
