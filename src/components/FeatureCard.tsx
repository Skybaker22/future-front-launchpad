
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <div className="glassmorphism rounded-xl p-6 group hover:border-datax-teal/50 transition-all duration-300">
      <div className="w-12 h-12 rounded-full glassmorphism flex items-center justify-center mb-6 group-hover:bg-datax-teal/20">
        <Icon className="w-6 h-6 text-datax-teal" />
      </div>
      
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default FeatureCard;
