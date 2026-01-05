import { House, Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#2d5a43] text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center border border-white/20 backdrop-blur-sm">
                <House className="w-6 h-6 text-white" />
              </div>
              <span className="font-serif font-bold text-2xl tracking-tight">PropertyDealer</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-xs">
              Your trusted partner for finding the perfect property in urban and village areas. We ensure legal clarity and transparency.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-white/30 rounded-full group-hover:bg-white transition-colors"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/properties" className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-white/30 rounded-full group-hover:bg-white transition-colors"></span>
                  Properties
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-white/30 rounded-full group-hover:bg-white transition-colors"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-white transition-colors text-sm flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 bg-white/30 rounded-full group-hover:bg-white transition-colors"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Contact Info</h3>
            <ul className="space-y-5">
              <li className="flex items-center gap-4 text-white/70 group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-4 text-white/70 group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm">info@propertydealer.in</span>
              </li>
              <li className="flex items-start gap-4 text-white/70 group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors shrink-0">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <span className="text-sm leading-relaxed">Main Road, Near Bus Stand, Raipur, CG</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Social Media */}
          <div>
            <h3 className="font-bold text-lg mb-6 border-b border-white/10 pb-2 inline-block">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white hover:text-[#2d5a43] transition-all duration-300 shadow-lg">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300 shadow-lg">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all duration-300 shadow-lg">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center">
          <p className="text-white/50 text-xs md:text-sm font-medium tracking-wider">
            © 2026 PropertyDealer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}