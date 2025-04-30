
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="glassmorphism rounded-xl p-6 group hover:border-datax-teal/50 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
      {/* Decorative glow effect */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-datax-teal/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <div className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center mb-6 group-hover:bg-datax-teal/20 transition-all duration-300">
        <Icon className="w-6 h-6 text-datax-teal" />
      </div>
      
      <h3 className="text-xl font-bold mb-3 group-hover:text-datax-teal transition-colors duration-300">{title}</h3>
      <p className="text-gray-400 mt-auto">{description}</p>
    </div>
  );
};

export default FeatureCard;
