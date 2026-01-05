
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/10 bg-[hsl(220,70%,6%)]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-2xl">
              <span className="text-white">Data</span>
              <span className="text-primary">X</span>
            </span>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#data-developers" className="text-sm text-gray-400 hover:text-white transition-colors">
              Data Developers
            </a>
            <a href="#data-partners" className="text-sm text-gray-400 hover:text-white transition-colors">
              Data Partners
            </a>
            <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">
              Contact
            </a>
          </div>
          
          {/* Contact */}
          <div className="text-center md:text-right">
            <a 
              href="mailto:info@datax.me" 
              className="text-primary hover:text-primary/80 transition-colors"
            >
              info@datax.me
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-500">
            © 2026 DataX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
