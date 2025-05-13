
import React from 'react';
import { Droplets, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4">
          <div className="md:col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Droplets className="h-10 w-10 text-primary" />
              <span className="text-2xl font-bold text-primary">LifeLine</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Connecting donors, saving lives. Your trusted partner in blood donation.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Quick Links</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link to="/faq" className="text-sm text-muted-foreground hover:text-primary">FAQ</Link></li>
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Get Involved</h3>
            <ul role="list" className="mt-4 space-y-2">
              <li><Link to="/register" className="text-sm text-muted-foreground hover:text-primary">Become a Donor</Link></li>
              <li><Link to="/hospital-register" className="text-sm text-muted-foreground hover:text-primary">Hospital Partnership</Link></li>
              <li><Link to="/volunteer" className="text-sm text-muted-foreground hover:text-primary">Volunteer</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary"><span className="sr-only">Facebook</span><Facebook className="h-6 w-6" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><span className="sr-only">Twitter</span><Twitter className="h-6 w-6" /></a>
              <a href="#" className="text-muted-foreground hover:text-primary"><span className="sr-only">Instagram</span><Instagram className="h-6 w-6" /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} LifeLine Blood Bank System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  