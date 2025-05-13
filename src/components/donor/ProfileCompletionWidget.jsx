
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { CheckCircle, Edit3 } from 'lucide-react';

const ProfileCompletionWidget = ({ completionPercentage = 65 }) => {
  // Mock data for profile sections
  const profileSections = [
    { name: "Personal Information", complete: true },
    { name: "Contact Details", complete: true },
    { name: "Medical History", complete: completionPercentage > 60 },
    { name: "Donation Preferences", complete: completionPercentage > 80 },
  ];

  const incompleteSections = profileSections.filter(s => !s.complete);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <Card className="glassmorphism-card border-yellow-500/30">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-yellow-600 flex items-center">
            <CheckCircle className="h-7 w-7 mr-3 interactive-icon" /> Profile Completion
          </CardTitle>
          <CardDescription className="text-foreground/70">
            A complete profile helps us match you with urgent needs more effectively.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-3 mb-3">
            <Progress value={completionPercentage} className="w-full h-3" />
            <span className="font-semibold text-primary">{completionPercentage}%</span>
          </div>
          {completionPercentage < 100 && incompleteSections.length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-sm text-muted-foreground">
                Complete these sections to reach 100%:
              </p>
              <ul className="list-disc list-inside text-sm text-foreground/80 space-y-1">
                {incompleteSections.map(section => (
                  <li key={section.name}>{section.name}</li>
                ))}
              </ul>
              <Button variant="outline" className="w-full mt-3 futuristic-glow-sm border-yellow-500 text-yellow-600 hover:bg-yellow-500/10 hover:text-yellow-700">
                <Edit3 className="mr-2 h-4 w-4" /> Complete Your Profile
              </Button>
            </div>
          )}
          {completionPercentage === 100 && (
            <p className="text-sm text-green-600 font-medium mt-3">
              Congratulations! Your profile is 100% complete.
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProfileCompletionWidget;
  