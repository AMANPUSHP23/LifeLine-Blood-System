
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { Droplets } from 'lucide-react';

const bloodGroupsData = [
  { type: 'A+', stock: 75, critical: false },
  { type: 'A-', stock: 40, critical: true },
  { type: 'B+', stock: 60, critical: false },
  { type: 'B-', stock: 30, critical: true },
  { type: 'AB+', stock: 85, critical: false },
  { type: 'AB-', stock: 20, critical: true },
  { type: 'O+', stock: 90, critical: false },
  { type: 'O-', stock: 15, critical: true },
];

const BloodInventoryChart = () => {
  const maxStock = 100; // Assuming max stock is 100 units for visualization

  return (
    <Card className="glassmorphism-card border-red-500/30">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold text-red-600 flex items-center">
          <Droplets className="h-6 w-6 mr-2 interactive-icon" /> Real-Time Blood Stock Levels
        </CardTitle>
        <CardDescription className="text-foreground/70">
          Conceptual visualization of current blood inventory. (Mock Data)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {bloodGroupsData.map((group, index) => (
            <div key={group.type} className="flex items-center space-x-3">
              <span className="w-12 font-medium text-primary">{group.type}</span>
              <div className="flex-1 h-8 bg-muted/50 rounded-full overflow-hidden border border-border">
                <motion.div
                  className={`h-full rounded-full ${group.critical ? 'bg-destructive' : 'bg-gradient-to-r from-primary to-red-400'}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${(group.stock / maxStock) * 100}%` }}
                  transition={{ duration: 0.5, delay: index * 0.1, type: 'spring', stiffness: 100 }}
                >
                  <div className="flex items-center justify-end h-full pr-2">
                    <span className="text-xs font-medium text-primary-foreground">{group.stock} units</span>
                  </div>
                </motion.div>
              </div>
              {group.critical && (
                <motion.span 
                  className="text-xs font-semibold text-destructive animate-pulse"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, duration: 0.3 }}
                >
                  CRITICAL
                </motion.span>
              )}
            </div>
          ))}
        </div>
        <div className="mt-6 flex justify-between text-xs text-muted-foreground">
          <span>0 units</span>
          <span>{maxStock / 2} units</span>
          <span>{maxStock} units</span>
        </div>
      </CardContent>
    </Card>
  );
};

export default BloodInventoryChart;
  