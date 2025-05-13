
import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import CoreFeaturesSection from '@/components/home/CoreFeaturesSection';
import CallToActionSection from '@/components/home/CallToActionSection';
import ImpactSection from '@/components/home/ImpactSection';
import BloodDriveCampaignsSection from '@/components/home/BloodDriveCampaignsSection';

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <HeroSection />
        <HowItWorksSection />
        <CoreFeaturesSection />
        <BloodDriveCampaignsSection />
        <CallToActionSection />
        <ImpactSection />
      </main>
    </div>
  );
};

export default HomePage;
  