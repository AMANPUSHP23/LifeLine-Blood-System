
import React from 'react';
import FeatureCard from '@/components/home/FeatureCard';
import { UserPlus, MapPin, HeartHandshake, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorksSection = () => {
  const steps = [
    { icon: <UserPlus />, title: "Register & Verify", description: "Securely create your donor profile. Your data is encrypted and protected.", delay: 0.1 },
    { icon: <MapPin />, title: "AI-Powered Alerts", description: "Receive intelligent notifications for critical needs based on your location and blood type.", delay: 0.3 },
    { icon: <HeartHandshake />, title: "Donate & Impact", description: "Visit a certified center, donate with ease, and track the journey of your life-saving gift.", delay: 0.5 },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold tracking-tight text-center text-primary sm:text-5xl mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          The Future of Donation: <span className="animated-gradient-text">Simple & Smart</span>
        </motion.h2>
        <motion.p 
          className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our streamlined process, enhanced with cutting-edge technology, makes saving lives more accessible and efficient than ever before.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <FeatureCard 
              key={index}
              icon={step.icon} 
              title={step.title} 
              description={step.description}
              delay={step.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
  