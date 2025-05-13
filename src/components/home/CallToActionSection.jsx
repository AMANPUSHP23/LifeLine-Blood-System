
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightCircle, Users } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/90 via-red-600/90 to-accent/80 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-4xl font-bold tracking-tight sm:text-5xl"
          initial={{ opacity: 0, y:20 }}
          whileInView={{ opacity: 1, y:0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Ready to <span className="text-yellow-300">Ignite Change</span>?
        </motion.h2>
        <motion.p 
          className="mt-6 text-lg text-primary-foreground/90 max-w-2xl mx-auto"
          initial={{ opacity: 0, y:20 }}
          whileInView={{ opacity: 1, y:0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:0.2 }}
        >
          Every drop is a beacon of hope. Join our futuristic network of donors and partner hospitals. Your action today shapes a healthier tomorrow.
        </motion.p>
        <motion.div 
          className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y:20 }}
          whileInView={{ opacity: 1, y:0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay:0.4 }}
        >
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 futuristic-glow-sm shadow-xl transform hover:scale-105 transition-transform duration-200" asChild>
            <Link to="/register">
              <Users className="mr-2 h-5 w-5" /> Register as Donor
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 futuristic-glow-sm shadow-xl transform hover:scale-105 transition-transform duration-200" asChild>
            <Link to="/hospital-dashboard">
              <ArrowRightCircle className="mr-2 h-5 w-5" /> Hospital Portal
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSection;
  