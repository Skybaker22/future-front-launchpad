
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Rocket, Menu, X } from 'lucide-react';

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
          <Rocket className="h-6 w-6 text-futuristic-purple" />
          <span className="font-bold text-xl">FutureX</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm hover:text-futuristic-purple transition-colors">Features</a>
          <a href="#how-it-works" className="text-sm hover:text-futuristic-purple transition-colors">How It Works</a>
          <a href="#testimonials" className="text-sm hover:text-futuristic-purple transition-colors">Testimonials</a>
          <a href="#contact" className="text-sm hover:text-futuristic-purple transition-colors">Contact</a>
        </div>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost">Log in</Button>
          <Button className="bg-futuristic-purple hover:bg-futuristic-purple/80">Get Started</Button>
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
          <a href="#features" className="text-sm hover:text-futuristic-purple transition-colors py-2">Features</a>
          <a href="#how-it-works" className="text-sm hover:text-futuristic-purple transition-colors py-2">How It Works</a>
          <a href="#testimonials" className="text-sm hover:text-futuristic-purple transition-colors py-2">Testimonials</a>
          <a href="#contact" className="text-sm hover:text-futuristic-purple transition-colors py-2">Contact</a>
          <div className="flex flex-col gap-2 mt-2">
            <Button variant="ghost" className="w-full justify-center">Log in</Button>
            <Button className="w-full justify-center bg-futuristic-purple hover:bg-futuristic-purple/80">Get Started</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
