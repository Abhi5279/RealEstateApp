import React from 'react';
import { 
  House, MapPin, Building, Award, Users, 
  Shield, FileCheck, Handshake, Headphones, 
  Facebook, Instagram, Youtube, Globe, Menu ,  Phone
} from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">


      {/* HERO SECTION */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-[#f1ede4] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#2d5a43_0%,transparent_50%)]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">About Us</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Your trusted partner in finding the perfect property</p>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>With over 15 years of experience in the real estate industry, we have helped thousands of families find their perfect home. Our commitment to transparency, legal compliance, and customer satisfaction sets us apart.</p>
                <p>We specialize in land, flats, and independent houses in both urban and village areas. Our deep understanding of local markets and strong community connections help us find the perfect property for every family.</p>
                <p>Whether you are a first-time buyer, an investor, or looking to sell your property, we provide personalized service tailored to your needs.</p>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800" alt="Property Dealer" className="rounded-2xl shadow-xl w-full" />
              <div className="absolute -bottom-6 -left-6 bg-[#2d5a43] text-white rounded-xl p-6 shadow-xl">
                <div className="font-serif text-4xl font-bold">15+</div>
                <div className="text-sm opacity-80">Years of Trust</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="py-16 bg-[#2d5a43]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <StatItem icon={<Building className="w-8 h-8 mx-auto mb-2 opacity-80" />} count="500+" label="Properties Sold" />
            <StatItem icon={<Award className="w-8 h-8 mx-auto mb-2 opacity-80" />} count="15+" label="Years Experience" />
            <StatItem icon={<Users className="w-8 h-8 mx-auto mb-2 opacity-80" />} count="1000+" label="Happy Families" />
            <StatItem icon={<MapPin className="w-8 h-8 mx-auto mb-2 opacity-80" />} count="50+" label="Villages Covered" />
          </div>
        </div>
      </section>

      {/* VALUES SECTION */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard icon={<Shield className="w-8 h-8 text-[#2d5a43]" />} title="Trust" desc="Building lasting relationships through honest dealings" />
            <ValueCard icon={<FileCheck className="w-8 h-8 text-[#2d5a43]" />} title="Transparency" desc="Clear documentation and no hidden charges" />
            <ValueCard icon={<Handshake className="w-8 h-8 text-[#2d5a43]" />} title="Integrity" desc="Fair pricing and ethical business practices" />
            <ValueCard icon={<Headphones className="w-8 h-8 text-[#2d5a43]" />} title="Support" desc="Dedicated assistance from start to finish" />
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="py-16 md:py-24 bg-[#f1ede4]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">Meet Our Team</h2>
            <div className="bg-card rounded-2xl p-8 shadow-sm border">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200" alt="Founder" className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-[#2d5a43]/20" />
              <h3 className="font-serif text-2xl font-bold mb-1">Rajesh Kumar</h3>
              <p className="text-[#2d5a43] font-medium mb-4">Founder & Property Consultant</p>
              <p className="text-muted-foreground leading-relaxed">With over 15 years of experience in the real estate industry, Rajesh has helped thousands of families find their dream homes. His deep knowledge of local markets and commitment to customer satisfaction has made him a trusted name.</p>
            </div>
          </div>
        </div>
      </section>

  
    </div>
  );
}

// UI HELPER COMPONENTS
function StatItem({ icon, count, label }) {
  return (
    <div className="text-center p-4 text-white">
      {icon}
      <div className="font-serif text-3xl md:text-4xl font-bold">{count}</div>
      <div className="text-sm opacity-80 mt-1">{label}</div>
    </div>
  );
}

function ValueCard({ icon, title, desc }) {
  return (
    <div className="bg-card rounded-xl p-6 text-center shadow-md border border-slate-100 hover:translate-y-[-4px] transition-all">
      <div className="w-16 h-16 rounded-2xl bg-[#2d5a43]/10 flex items-center justify-center mx-auto mb-4">{icon}</div>
      <h3 className="font-serif font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{desc}</p>
    </div>
  );
}

function SocialIcon({ icon }) {
  return (
    <a href="#" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
      {icon}
    </a>
  );
}



function MailIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-4 h-4 flex-shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>;
}