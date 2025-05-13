
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { User, Droplets, CalendarDays, Bell, Award, Shield, Gift, Star, Edit3, Map } from 'lucide-react';
import { motion } from 'framer-motion';
import ProfileCompletionWidget from '@/components/donor/ProfileCompletionWidget';

const StatCard = ({ icon, title, value, description, delay, bgColorClass = "bg-primary/10" }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9, y: 20 }} 
    animate={{ opacity: 1, scale: 1, y: 0 }} 
    transition={{ duration: 0.4, delay }}
    className="h-full"
  >
    <Card className="h-full glassmorphism-card border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/15 transform hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-semibold text-primary">{title}</CardTitle>
        <div className={`p-2 rounded-lg ${bgColorClass}`}>
          {React.cloneElement(icon, { className: "h-6 w-6 text-primary interactive-icon" })}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-foreground">{value}</div>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </CardContent>
    </Card>
  </motion.div>
);

const BadgeItem = ({ icon, label, variant = "default", delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay }}
  >
    <Badge variant={variant} className="text-sm px-4 py-2 shadow-md">
      {React.cloneElement(icon, { className: "h-4 w-4 mr-2" })}
      {label}
    </Badge>
  </motion.div>
);


const DonorDashboardPage = () => {
  const donationCount = 5;
  const profileCompletion = 75; // Example percentage
  const badges = [
    { icon: <Gift />, label: "First Donation Hero", variant: "success", earned: donationCount >= 1 },
    { icon: <Star />, label: "Bronze Donor (5+)", variant: "secondary", earned: donationCount >= 5 },
    { icon: <Award />, label: "Silver Donor (10+)", variant: "outline", earned: donationCount >= 10 },
    { icon: <Shield />, label: "Gold Donor (25+)", variant: "premium", earned: donationCount >= 25 },
  ];

  return (
    <div className="container mx-auto py-10 px-4 sm:px-6 lg:px-8">
      <motion.h1 
        className="text-4xl font-bold mb-10 text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="animated-gradient-text">Donor Command Center</span>
      </motion.h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <StatCard icon={<User />} title="My Profile" value="John Doe" description="Blood Group: O+" delay={0.1} />
        <StatCard icon={<Droplets />} title="Total Donations" value={`${donationCount} Times`} description="Last: 2024-12-01" delay={0.2} bgColorClass="bg-red-500/10"/>
        <StatCard icon={<CalendarDays />} title="Next Appointment" value="July 25, 2025" description="City Center Drive" delay={0.3} bgColorClass="bg-blue-500/10"/>
        <StatCard icon={<Bell />} title="Active Alerts" value="1 Urgent" description="A- needed nearby" delay={0.4} bgColorClass="bg-yellow-500/10"/>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        <motion.div 
          className="lg:col-span-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Card className="glassmorphism-card border-accent/30 h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-accent flex items-center">
                <Award className="h-7 w-7 mr-3 interactive-icon" /> My Achievements & Badges
              </CardTitle>
              <CardDescription className="text-foreground/70">Your life-saving contributions are recognized and celebrated!</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              {badges.filter(b => b.earned).map((badge, index) => (
                <BadgeItem key={badge.label} icon={badge.icon} label={badge.label} variant={badge.variant} delay={index * 0.1} />
              ))}
              {!badges.some(b => b.earned) && <p className="text-muted-foreground">Start donating to earn badges!</p>}
            </CardContent>
          </Card>
        </motion.div>
        <ProfileCompletionWidget completionPercentage={profileCompletion} />
      </div>


      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, duration: 0.5 }}>
          <Card className="glassmorphism-card border-green-500/30">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-green-600">Find Donation Opportunities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80">Discover upcoming blood drives or locate nearby donation centers.</p>
              <Button className="w-full futuristic-glow-sm bg-green-500 hover:bg-green-600 text-white">
                <Map className="mr-2 h-5 w-5" /> Explore Drives & Centers
              </Button>
            </CardContent>
          </Card>
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.5 }}>
          <Card className="glassmorphism-card border-blue-500/30">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-600">Manage Availability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-foreground/80">Update your availability to receive relevant donation requests.</p>
              <Button variant="outline" className="w-full futuristic-glow-sm border-blue-500 text-blue-500 hover:bg-blue-500/10 hover:text-blue-600">
                <Edit3 className="mr-2 h-5 w-5" /> Update My Availability
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default DonorDashboardPage;
  