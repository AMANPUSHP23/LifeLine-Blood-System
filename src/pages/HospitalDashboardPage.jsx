
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Hotel as Hospital, Search, ListChecks, Users, Activity, BarChart3, PlusCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import AdvancedDonorSearchModal from '@/components/hospital/AdvancedDonorSearchModal';

const StatCard = ({ icon, title, value, trend, delay, iconBgColor = "bg-primary/10" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.4, delay }}
    className="h-full"
  >
    <Card className="h-full glassmorphism-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/15 transform hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold text-primary">{title}</CardTitle>
        <div className={`p-2 rounded-lg ${iconBgColor}`}>
          {React.cloneElement(icon, { className: "h-6 w-6 text-primary interactive-icon" })}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-foreground">{value}</div>
        {trend && <p className="text-xs text-muted-foreground mt-1">{trend}</p>}
      </CardContent>
    </Card>
  </motion.div>
);

const HospitalDashboardPage = () => {
  const handleAdvancedSearch = (filters) => {
    // In a real app, you would use these filters to fetch data
    alert(`Advanced search submitted with filters: ${JSON.stringify(filters)}`);
  };

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <motion.h1 
        className="text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="animated-gradient-text">Hospital Operations Hub</span>
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        <StatCard icon={<ListChecks />} title="Active Requests" value="3 Pending" trend="2 fulfilled this week" delay={0.1} iconBgColor="bg-yellow-500/10" />
        <StatCard icon={<Activity />} title="Blood Units Used (Month)" value="128 Units" trend="+15% from last month" delay={0.2} iconBgColor="bg-red-500/10" />
        <StatCard icon={<Users />} title="Matched Donors (Today)" value="7 Donors" trend="AI Match Success: 92%" delay={0.3} iconBgColor="bg-green-500/10" />
      </div>

      <motion.div 
        className="mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Card className="glassmorphism-card border-accent/30">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-accent flex items-center">
              <PlusCircle className="h-7 w-7 mr-3 interactive-icon" /> Quick Actions
            </CardTitle>
            <CardDescription className="text-foreground/70">Streamline your critical tasks with one-click access.</CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Button size="lg" className="w-full futuristic-glow-sm transform hover:scale-105 transition-transform duration-200">
              <PlusCircle className="mr-2 h-5 w-5" /> Create New Blood Request
            </Button>
            <AdvancedDonorSearchModal onSearch={handleAdvancedSearch} />
            <Button size="lg" variant="secondary" className="w-full futuristic-glow-sm transform hover:scale-105 transition-transform duration-200">
              <BarChart3 className="mr-2 h-5 w-5" /> View Inventory Analytics
            </Button>
          </CardContent>
        </Card>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.5 }}>
          <Card className="glassmorphism-card border-blue-500/30">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-600">Real-time Request Tracking</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4">Monitor the status of all active blood requests. AI-powered updates provide live ETAs and donor matching progress.</p>
              <div className="h-40 bg-muted/30 rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Request Tracking Interface (Placeholder)</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6, duration: 0.5 }}>
          <Card className="glassmorphism-card border-purple-500/30">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-purple-600">Emergency Protocol Activation</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-foreground/80 mb-4">In critical situations, activate emergency protocols to broadcast urgent needs to all nearby, available, and compatible donors.</p>
              <Button variant="destructive" className="w-full futuristic-glow-lg transform hover:scale-105 transition-transform duration-200">
                Activate Emergency Broadcast
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default HospitalDashboardPage;
  