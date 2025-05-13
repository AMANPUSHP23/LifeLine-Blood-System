
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Activity } from 'lucide-react';

const ImpactStat = ({ icon, value, label, delay }) => (
  <motion.div 
    className="p-8 rounded-xl shadow-2xl bg-card/80 glassmorphism-card border-primary/20 text-center"
    initial={{ opacity: 0, scale: 0.8, y: 30 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-primary mb-4">
      {React.cloneElement(icon, { size: 32, className: "interactive-icon" })}
    </div>
    <div className="text-5xl font-bold animated-gradient-text">{value}</div>
    <p className="mt-2 text-muted-foreground text-lg">{label}</p>
  </motion.div>
);

const ImpactSection = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          className="text-4xl font-bold tracking-tight text-primary sm:text-5xl mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          Our <span className="animated-gradient-text">Collective Impact</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ImpactStat icon={<Award />} value="10K+" label="Lives Transformed" delay={0.1} />
          <ImpactStat icon={<Users />} value="5K+" label="Future-Ready Donors" delay={0.3} />
          <ImpactStat icon={<Activity />} value="200+" label="Synergized Hospitals" delay={0.5} />
        </div>
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <img  class="mx-auto rounded-xl shadow-2xl w-full max-w-4xl object-cover h-80" alt="Futuristic medical technology interface showing global connections" src="https://images.unsplash.com/photo-1463583723781-ca0bb5b0905f" />
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
  