
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { CalendarDays, MapPin, Users, Target } from 'lucide-react';

const campaigns = [
  {
    id: 1,
    title: "Summer of Life: City Center Drive",
    date: "2025-07-15",
    location: "Downtown Community Hub",
    goal: "500 Units",
    organizer: "LifeLine & City Health Dept.",
    image_description: "Sunny outdoor blood drive event with smiling volunteers",
    image_alt: "Summer blood drive event"
  },
  {
    id: 2,
    title: "Tech Park Challenge: Donate & Innovate",
    date: "2025-08-05",
    location: "Innovation Tech Park, Building A",
    goal: "300 Units",
    organizer: "LifeLine & Tech Innovators Inc.",
    image_description: "Modern tech park building with a blood donation bus nearby",
    image_alt: "Tech park blood drive"
  },
  {
    id: 3,
    title: "University Blood Fest: Campus Heroes",
    date: "2025-09-10",
    location: "State University Grand Hall",
    goal: "700 Units",
    organizer: "LifeLine & SU Student Union",
    image_description: "University students donating blood in a large hall",
    image_alt: "University blood drive"
  }
];

const CampaignCard = ({ campaign, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay }}
    className="h-full"
  >
    <Card className="h-full flex flex-col overflow-hidden glassmorphism-card border-accent/30 hover:border-accent/60 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/20 transform hover:-translate-y-1">
      <div className="relative h-48 w-full">
        {campaign.id === 1 && <img  class="absolute inset-0 w-full h-full object-cover" alt={campaign.image_alt} src="https://images.unsplash.com/photo-1694388001616-1176f534d72f" />}
        {campaign.id === 2 && <img  class="absolute inset-0 w-full h-full object-cover" alt={campaign.image_alt} src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />}
        {campaign.id === 3 && <img  class="absolute inset-0 w-full h-full object-cover" alt={campaign.image_alt} src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <CardTitle className="absolute bottom-4 left-4 text-2xl font-bold text-white">{campaign.title}</CardTitle>
      </div>
      <CardHeader className="pt-4">
        <CardDescription className="text-sm text-muted-foreground flex items-center">
          <CalendarDays className="h-4 w-4 mr-2 text-primary" /> {new Date(campaign.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        <p className="flex items-center text-sm text-foreground/90">
          <MapPin className="h-4 w-4 mr-2 text-primary" /> {campaign.location}
        </p>
        <p className="flex items-center text-sm text-foreground/90">
          <Target className="h-4 w-4 mr-2 text-primary" /> Goal: {campaign.goal}
        </p>
        <p className="flex items-center text-sm text-foreground/90">
          <Users className="h-4 w-4 mr-2 text-primary" /> Organizer: {campaign.organizer}
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full futuristic-glow-sm transform hover:scale-105 transition-transform duration-200">
          Learn More & Join
        </Button>
      </CardFooter>
    </Card>
  </motion.div>
);


const BloodDriveCampaignsSection = () => {
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
          Join a <span className="animated-gradient-text">Life-Saving Campaign</span>
        </motion.h2>
        <motion.p 
          className="text-center text-lg text-muted-foreground mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Be part of something bigger. Find upcoming blood drives in your area and contribute to vital community efforts.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {campaigns.map((campaign, index) => (
            <CampaignCard key={campaign.id} campaign={campaign} delay={index * 0.15} />
          ))}
        </div>
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 futuristic-glow-sm shadow-lg transform hover:scale-105 transition-transform duration-200">
            View All Campaigns
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default BloodDriveCampaignsSection;
  