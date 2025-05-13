
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Hotel as Hospital, Droplets, FileText, ShieldAlert, Settings, BarChartBig, Bot } from 'lucide-react';
import { motion } from 'framer-motion';
import BloodInventoryChart from '@/components/admin/BloodInventoryChart';

const StatCard = ({ icon, title, value, trend, delay, iconBgColor = "bg-primary/10" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.4, delay }}
    className="h-full"
  >
    <Card className="h-full glassmorphism-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/15 transform hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-md font-semibold text-primary">{title}</CardTitle>
         <div className={`p-2 rounded-lg ${iconBgColor}`}>
          {React.cloneElement(icon, { className: "h-5 w-5 text-primary interactive-icon" })}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-foreground">{value}</div>
        {trend && <p className="text-xs text-muted-foreground mt-1">{trend}</p>}
      </CardContent>
    </Card>
  </motion.div>
);


const AdminDashboardPage = () => {
  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <motion.h1 
        className="text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="animated-gradient-text">System Control Matrix</span>
      </motion.h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard icon={<Users />} title="Total Donors" value="5,120" trend="+201 this month" delay={0.1} iconBgColor="bg-blue-500/10" />
        <StatCard icon={<Hospital />} title="Partner Hospitals" value="235" trend="+10 this month" delay={0.2} iconBgColor="bg-green-500/10" />
        <StatCard icon={<Droplets />} title="Blood Units (Overall)" value="12.5K Units" trend="A+: Low, O-: Critical" delay={0.3} iconBgColor="bg-red-500/10" />
        <StatCard icon={<ShieldAlert />} title="System Alerts" value="3 Active" trend="Review pending approvals" delay={0.4} iconBgColor="bg-yellow-500/10" />
      </div>

      <motion.div 
        className="mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Card className="glassmorphism-card border-accent/30">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-accent flex items-center">
              <Settings className="h-7 w-7 mr-3 interactive-icon" /> Core Management Modules
            </CardTitle>
            <CardDescription className="text-foreground/70">Oversee and manage all platform operations.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button size="lg" className="w-full futuristic-glow-sm transform hover:scale-105 transition-transform duration-200">
              <Users className="mr-2 h-5 w-5" /> User Management
            </Button>
            <Button size="lg" variant="outline" className="w-full futuristic-glow-sm border-accent text-accent hover:bg-accent/10 hover:text-accent transform hover:scale-105 transition-transform duration-200">
              <Hospital className="mr-2 h-5 w-5" /> Hospital Approvals
            </Button>
            <Button size="lg" variant="secondary" className="w-full futuristic-glow-sm transform hover:scale-105 transition-transform duration-200">
              <Droplets className="mr-2 h-5 w-5" /> Inventory Oversight
            </Button>
             <Button size="lg" variant="destructive" className="w-full futuristic-glow-sm transform hover:scale-105 transition-transform duration-200">
              <FileText className="mr-2 h-5 w-5" /> Generate System Reports
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0, x: -30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <BloodInventoryChart />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 30 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Card className="glassmorphism-card border-teal-500/30 h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-teal-600 flex items-center">
                <Bot className="h-6 w-6 mr-2 interactive-icon" /> AI & Automation Settings
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80">Configure and monitor AI-driven matching algorithms, automated alert systems, and predictive inventory management.</p>
               <Button className="w-full futuristic-glow-sm bg-teal-500 hover:bg-teal-600 text-white">
                Configure AI Parameters
              </Button>
              <Button variant="outline" className="w-full futuristic-glow-sm border-teal-500 text-teal-500 hover:bg-teal-500/10 hover:text-teal-600">
                View Automation Logs
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
  