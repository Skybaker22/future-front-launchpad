
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Calendar } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#data-developers', label: 'Data Developers' },
    { href: '#data-partners', label: 'Data Partners' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glassmorphism py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl">
            <span className="text-white">Data</span>
            <span className="text-datax-teal">X</span>
          </span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors rounded-full hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
        </div>
        
        <div className="hidden md:flex items-center gap-3">
          <Button 
            variant="outline"
            className="rounded-full px-5 border-white/20 text-white hover:bg-white/10 hover:border-white/40"
            asChild
          >
            <a 
              href="https://calendly.com/info-datax/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book a Call
            </a>
          </Button>
          <Button 
            className="bg-datax-teal text-datax-navy hover:bg-datax-teal/80 rounded-full px-6"
            asChild
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden glassmorphism absolute top-full left-0 w-full py-6 px-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="px-4 py-3 text-sm hover:bg-white/5 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button 
            variant="outline"
            className="w-full mt-2 rounded-full border-white/20 text-white hover:bg-white/10"
            asChild
          >
            <a 
              href="https://calendly.com/info-datax/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Calendar className="w-4 h-4 mr-2" />
              Book a Call
            </a>
          </Button>
          <Button 
            className="w-full mt-2 bg-datax-teal hover:bg-datax-teal/80 text-datax-navy rounded-full"
            asChild
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
