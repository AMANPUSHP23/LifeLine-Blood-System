
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, scale: 0.9 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay, type: 'spring', stiffness: 100 }}
    className="h-full"
  >
    <Card className="h-full text-center glassmorphism-card border-primary/30 hover:border-primary/60 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-2">
      <CardHeader>
        <motion.div 
          className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 text-primary mb-6 shadow-lg"
          whileHover={{ scale: 1.1, rotate: 15 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {React.cloneElement(icon, { size: 40, className: "interactive-icon" })}
        </motion.div>
        <CardTitle className="text-2xl font-bold text-primary">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-foreground/80 text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  </motion.div>
);

export default FeatureCard;
  