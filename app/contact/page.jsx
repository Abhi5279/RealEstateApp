"use client";

import React from 'react';
import { 
  House, MapPin, Phone, MessageCircle, Mail, Send, 
  Clock, Globe, Menu, Facebook, Instagram, Youtube 
} from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">



      {/* HERO SECTION */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[#f1ede4] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,#2d5a43_0%,transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center animate-fade-up">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">We are here to help you find your perfect property</p>
        </div>
      </section>

      {/* MAIN CONTACT CONTENT */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* CONTACT FORM */}
            <div className="animate-fade-up">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-slate-100">
                <h2 className="font-serif text-2xl font-bold mb-6">Send us a Message</h2>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="relative">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                      <input className="flex w-full rounded-xl border border-input bg-slate-50 px-3 py-2 text-sm pl-11 h-12 focus:ring-2 focus:ring-[#2d5a43] outline-none transition-all" placeholder="Your Name" required />
                    </div>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input className="flex w-full rounded-xl border border-input bg-slate-50 px-3 py-2 text-sm pl-11 h-12 focus:ring-2 focus:ring-[#2d5a43] outline-none transition-all" placeholder="Phone Number" required />
                    </div>
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input type="email" className="flex w-full rounded-xl border border-input bg-slate-50 px-3 py-2 text-sm pl-11 h-12 focus:ring-2 focus:ring-[#2d5a43] outline-none transition-all" placeholder="Email (optional)" />
                  </div>
                  <textarea className="flex min-h-[120px] w-full rounded-xl border border-input bg-slate-50 px-4 py-3 text-sm focus:ring-2 focus:ring-[#2d5a43] outline-none resize-none transition-all" placeholder="Message" rows="5" required></textarea>
                  <button className="inline-flex items-center justify-center bg-[#2d5a43] text-white h-12 rounded-xl px-8 w-full gap-2 font-bold hover:bg-[#1e3d2d] shadow-lg transition-all" type="submit">
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* INFO CARDS */}
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <ContactInfoCard 
                  href="tel:+919876543210" 
                  icon={<Phone className="w-6 h-6" />} 
                  title="Phone" 
                  detail="+91 98765 43210" 
                />
                <ContactInfoCard 
                  href="https://wa.me/+919876543210" 
                  icon={<MessageCircle className="w-6 h-6" />} 
                  title="WhatsApp" 
                  detail="+91 98765 43210" 
                />
                <ContactInfoCard 
                  href="mailto:info@propertydealer.in" 
                  icon={<Mail className="w-6 h-6" />} 
                  title="Email" 
                  detail="info@propertydealer.in" 
                />
                <ContactInfoCard 
                  href="#" 
                  icon={<MapPin className="w-6 h-6" />} 
                  title="Office" 
                  detail="Main Road, Raipur, CG" 
                />
              </div>

              {/* BUSINESS HOURS */}
              <div className="bg-[#f1ede4] rounded-2xl p-6 border border-[#2d5a43]/10">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-[#2d5a43]" />
                  <h3 className="font-serif text-lg font-bold">Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b border-[#2d5a43]/10 pb-2">
                    <span className="text-muted-foreground">Monday - Saturday</span>
                    <span className="font-bold text-[#2d5a43]">9:00 AM - 7:00 PM</span>
                  </div>
                  <div className="flex justify-between pt-1">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-bold text-[#2d5a43]">By Appointment</span>
                  </div>
                </div>
              </div>

              {/* MAP PLACEHOLDER */}
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                <div className="aspect-[16/9] bg-slate-100 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-3 text-slate-300" />
                    <p className="text-muted-foreground mb-2 font-medium">Our Office Location</p>
                    <a href="#" className="text-[#2d5a43] font-bold hover:underline text-sm">View on Google Maps</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

function ContactInfoCard({ href, icon, title, detail }) {
  return (
    <a href={href} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 hover:shadow-md transition-all group block">
      <div className="w-12 h-12 rounded-xl bg-[#2d5a43]/10 flex items-center justify-center mb-3 group-hover:bg-[#2d5a43] group-hover:text-white transition-colors">
        {React.cloneElement(icon, { className: "w-6 h-6 text-[#2d5a43] group-hover:text-white" })}
      </div>
      <h3 className="font-bold mb-1">{title}</h3>
      <p className="text-muted-foreground text-sm">{detail}</p>
    </a>
  );
}