
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CTO, TechCorp",
    content: "This platform has transformed how we approach our digital strategy. The speed and flexibility are unmatched in the industry.",
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    position: "Founder, NexGen",
    content: "I've worked with many similar tools, but this one stands out for its intuitive design and powerful functionality.",
    avatar: "MC"
  },
  {
    name: "Elena Rodriguez",
    position: "Product Manager, Innovatech",
    content: "The analytics capabilities alone are worth the investment. We've seen a 40% increase in conversion rates since implementation.",
    avatar: "ER"
  }
];

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-grid">
      {/* Background decorative element */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-futuristic-cyan/10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our <span className="text-gradient">Clients Say</span></h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Join hundreds of satisfied businesses that have transformed their operations with our platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glassmorphism rounded-xl p-8 hover:border-futuristic-purple/30 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-futuristic-purple/30 flex items-center justify-center text-sm font-medium">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-xs text-gray-400">{testimonial.position}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-futuristic-cyan text-futuristic-cyan" />
                ))}
              </div>
              
              <p className="text-gray-300">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
