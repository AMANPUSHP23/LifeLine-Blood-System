
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Zap, ShieldHalf } from 'lucide-react';

const HeroSection = () => {
  return (
    <motion.section
      className="relative py-24 md:py-40 gradient-hero text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>
      <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/20 rounded-full filter blur-3xl opacity-50 animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h1
          className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 100 }}
        >
          <span className="block animated-gradient-text">Be a Lifeline.</span>
          <span className="block text-primary-foreground/90 mt-2">Donate Blood, Transform Futures.</span>
        </motion.h1>
        <motion.p
          className="mt-8 max-w-md mx-auto text-lg text-primary-foreground/80 sm:max-w-xl md:text-xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Join LifeLine: a futuristic platform connecting compassionate donors with urgent needs. Your single act of kindness echoes through countless lives.
        </motion.p>
        <motion.div
          className="mt-12 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-gray-100 futuristic-glow-sm shadow-lg transform hover:scale-105 transition-transform duration-200" asChild>
            <Link to="/register">
              <Zap className="mr-2 h-5 w-5" /> Become a Donor
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white/10 futuristic-glow-sm shadow-lg transform hover:scale-105 transition-transform duration-200" asChild>
            <Link to="/hospital-dashboard">
              <ShieldHalf className="mr-2 h-5 w-5" /> Hospital Portal
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
  