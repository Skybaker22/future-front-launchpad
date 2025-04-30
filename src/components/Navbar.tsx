
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Database, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glassmorphism py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-3xl">
            <span className="text-white">Data</span>
            <span className="text-datax-teal">X</span>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className="text-sm hover:text-datax-teal transition-colors">About</a>
          <a href="#features" className="text-sm hover:text-datax-teal transition-colors">Features</a>
          <a href="#contact" className="text-sm hover:text-datax-teal transition-colors">Contact</a>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="hover:text-datax-teal hover:bg-datax-teal/10"
          >
            Join Pilot
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glassmorphism absolute top-full left-0 w-full py-5 px-4 flex flex-col gap-4">
          <a href="#about" className="text-sm hover:text-datax-teal transition-colors py-2">About</a>
          <a href="#features" className="text-sm hover:text-datax-teal transition-colors py-2">Features</a>
          <a href="#contact" className="text-sm hover:text-datax-teal transition-colors py-2">Contact</a>
          <div className="flex flex-col gap-2 mt-2">
            <Button 
              className="w-full justify-center bg-datax-teal hover:bg-datax-teal/80 text-datax-navy"
            >
              Join Pilot
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
