'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-midnight text-white py-16">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-light mb-6">
              Studio <span className="text-golden">Archtantra</span>
            </h3>
            <p className="text-white/60 leading-relaxed mb-6">
              Creating architectural excellence through innovative design and meticulous attention to detail.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-golden transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-golden transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-golden transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/60 hover:text-golden transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="text-white/60 hover:text-golden transition-colors">Home</Link></li>
              <li><Link href="/projects" className="text-white/60 hover:text-golden transition-colors">Projects</Link></li>
              <li><Link href="/about" className="text-white/60 hover:text-golden transition-colors">About</Link></li>
              <li><Link href="/services" className="text-white/60 hover:text-golden transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-white/60 hover:text-golden transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Services</h4>
            <ul className="space-y-3">
              <li className="text-white/60">Residential Design</li>
              <li className="text-white/60">Commercial Architecture</li>
              <li className="text-white/60">Interior Design</li>
              <li className="text-white/60">Consultation</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center text-white/60">
                <MapPin size={16} className="mr-3 text-golden" />
                <span>123 Architecture Ave, Design City, DC 12345</span>
              </div>
              <div className="flex items-center text-white/60">
                <Phone size={16} className="mr-3 text-golden" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-white/60">
                <Mail size={16} className="mr-3 text-golden" />
                <span>hello@studioarchtantra.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; 2024 Studio Archtantra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}