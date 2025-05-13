
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, XCircle } from 'lucide-react';

const bloodGroups = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const AdvancedDonorSearchModal = ({ onSearch }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [bloodType, setBloodType] = useState('');
  const [location, setLocation] = useState('');
  const [availability, setAvailability] = useState(''); // 'any', 'available_now', 'available_soon'
  const [minDonations, setMinDonations] = useState('');

  const handleSearch = () => {
    // Mock search functionality
    console.log("Searching with filters:", { bloodType, location, availability, minDonations });
    if (onSearch) {
      onSearch({ bloodType, location, availability, minDonations });
    }
    setIsOpen(false); // Close dialog after search
  };

  const clearFilters = () => {
    setBloodType('');
    setLocation('');
    setAvailability('');
    setMinDonations('');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button size="lg" variant="outline" className="w-full futuristic-glow-sm border-accent text-accent hover:bg-accent/10 hover:text-accent transform hover:scale-105 transition-transform duration-200">
          <Search className="mr-2 h-5 w-5" /> Advanced Donor Search
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle className="flex items-center text-2xl">
            <Filter className="mr-2 h-6 w-6" /> Advanced Donor Search
          </DialogTitle>
          <DialogDescription>
            Refine your search to find the most suitable blood donors quickly.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bloodType" className="text-right">
              Blood Type
            </Label>
            <Select value={bloodType} onValueChange={setBloodType}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Any Blood Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any Blood Type</SelectItem>
                {bloodGroups.map(group => (
                  <SelectItem key={group} value={group}>{group}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="location" className="text-right">
              Location
            </Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="e.g., City, Zip Code (mock)"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="availability" className="text-right">
              Availability
            </Label>
            <Select value={availability} onValueChange={setAvailability}>
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Any Availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Any Availability</SelectItem>
                <SelectItem value="available_now">Available Now</SelectItem>
                <SelectItem value="available_soon">Available Soon</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="minDonations" className="text-right">
              Min. Donations
            </Label>
            <Input
              id="minDonations"
              type="number"
              value={minDonations}
              onChange={(e) => setMinDonations(e.target.value)}
              placeholder="e.g., 5"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-between">
          <Button type="button" variant="ghost" onClick={clearFilters} className="text-muted-foreground hover:text-destructive">
            <XCircle className="mr-2 h-4 w-4" /> Clear Filters
          </Button>
          <Button type="button" onClick={handleSearch} className="futuristic-glow-sm">
            <Search className="mr-2 h-4 w-4" /> Search Donors
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AdvancedDonorSearchModal;
  