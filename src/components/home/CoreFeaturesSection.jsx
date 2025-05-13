
import React from 'react';
import FeatureCard from '@/components/home/FeatureCard';
import { Users, Hotel as HospitalIcon, ShieldCheck, TrendingUp, MapPin as MapPinIcon, HeartHandshake as HeartHandshakeIcon, Zap, BrainCircuit } from 'lucide-react';
import { motion } from 'framer-motion';

const CoreFeaturesSection = () => {
  const features = [
    { icon: <Users />, title: "Advanced Donor Portal", description: "Personalized dashboards, gamified milestones, and seamless availability management.", delay: 0.1 },
    { icon: <HospitalIcon />, title: "Smart Hospital Hub", description: "AI-driven request matching, real-time inventory sync, and predictive analytics for blood needs.", delay: 0.2 },
    { icon: <ShieldCheck />, title: "Quantum-Safe Security", description: "Next-gen encryption and decentralized identity verification for ultimate data protection.", delay: 0.3 },
    { icon: <BrainCircuit />, title: "AI Predictive Matching", description: "Intelligent algorithms connect donors to needs with unprecedented speed and accuracy.", delay: 0.4 },
    { icon: <MapPinIcon />, title: "Hyperlocal Geo-Fencing", description: "Precision alerts for donors within immediate proximity to urgent requests.", delay: 0.5 },
    { icon: <Zap />, title: "Instant Verification", description: "Biometric and digital ID checks for rapid, secure onboarding of donors and hospitals.", delay: 0.6 },
  ];

  return (
    <section className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold tracking-tight text-center text-primary sm:text-5xl mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Experience the <span className="animated-gradient-text">Next Evolution</span> in Life-Saving
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon} 
              title={feature.title} 
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreFeaturesSection;
  