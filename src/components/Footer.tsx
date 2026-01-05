import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { z } from 'zod';
import { Send, Loader2 } from 'lucide-react';

const emailSchema = z.string().trim().email({ message: "Please enter a valid email address" }).max(255);

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = emailSchema.safeParse(email);
    if (!result.success) {
      toast({
        title: "Invalid email",
        description: result.error.errors[0]?.message || "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('subscribe-newsletter', {
        body: { email: result.data },
      });

      if (error) throw error;

      if (data?.error) {
        toast({
          title: "Subscription failed",
          description: data.error,
          variant: "destructive",
        });
      } else {
        toast({
          title: "Successfully subscribed!",
          description: "Thank you for joining our newsletter. We'll keep you updated on the latest news.",
        });
        setEmail('');
      }
    } catch (error: any) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="pt-16 pb-24 border-t border-white/10 bg-[hsl(220,70%,6%)]">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h3 className="text-2xl font-bold text-white mb-3">
            Stay Updated
          </h3>
          <p className="text-gray-400 mb-6">
            Subscribe to our newsletter for the latest updates on healthcare data collaboration and AI innovation.
          </p>
          <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-primary"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-6"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  Subscribe
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link to="/" className="font-bold text-2xl">
              <span className="text-white">Data</span>
              <span className="text-primary">X</span>
            </Link>
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
        
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 DataX. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-gray-500 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-500 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
