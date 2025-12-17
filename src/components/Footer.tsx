
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-16 border-t border-white/10 bg-datax-navy">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-2xl">
              <span className="text-white">Data</span>
              <span className="text-datax-teal">X</span>
            </span>
          </div>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#data-developers" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
              Data Developers
            </a>
            <a href="#data-partners" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
              Data Partners
            </a>
            <a href="#contact" className="text-sm text-gray-500 hover:text-gray-400 transition-colors">
              Contact
            </a>
          </div>
          
          {/* Contact */}
          <div className="text-center md:text-right">
            <a 
              href="mailto:info@datax.me" 
              className="text-datax-teal hover:text-datax-teal/80 transition-colors"
            >
              info@datax.me
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-sm text-gray-500">
            © 2025 DataX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
