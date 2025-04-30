
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-grid">
      {/* Background decorative element */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-futuristic-magenta/10 filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto glassmorphism rounded-2xl p-8 md:p-12 border border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to <span className="text-gradient">Get Started</span>?
              </h2>
              <p className="text-gray-400 mb-6">
                Join thousands of businesses already transforming their digital experience with our platform.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full glassmorphism flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-futuristic-cyan" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email Us</h4>
                    <p className="text-sm text-gray-400">contact@futurex.com</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full glassmorphism flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5 text-futuristic-purple" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Live Chat</h4>
                    <p className="text-sm text-gray-400">Available 24/7 for all your questions</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <form className="space-y-4">
                <div>
                  <Input
                    className="glassmorphism border-white/10 bg-transparent"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <Input
                    className="glassmorphism border-white/10 bg-transparent"
                    placeholder="Email address"
                    type="email"
                  />
                </div>
                <div>
                  <Input
                    className="glassmorphism border-white/10 bg-transparent"
                    placeholder="Company name"
                  />
                </div>
                <Button className="w-full bg-gradient-to-r from-futuristic-purple to-futuristic-magenta hover:opacity-90">
                  Get Started <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <p className="text-xs text-center text-gray-500 mt-4">
                  By signing up, you agree to our Terms and Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
