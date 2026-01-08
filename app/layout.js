
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  House, MapPin, Building, Award, Users, 
  Shield, FileCheck, Handshake, Headphones, 
  Facebook, Instagram, Youtube, Globe, Menu ,  Phone
} from 'lucide-react';

export const metadata = {
  title: "PropertyDealer",
  description: "Find your perfect land, flat or home",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900  ">
        <Navbar />
        {children}
              {/* FLOATING ACTION BUTTONS */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a href="https://wa.me/+919876543210" target="_blank" rel="noopener noreferrer" className="group w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 animate-pulse">
          <MessageCircleIcon />
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-foreground text-background text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Chat on WhatsApp</span>
        </a>
        <a href="tel:+919876543210" className="group w-14 h-14 rounded-full bg-orange-600 text-white shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300">
          <Phone className="w-6 h-6" />
          <span className="absolute right-full mr-3 px-3 py-1.5 rounded-lg bg-foreground text-background text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Call Now</span>
        </a>
      </div>
        <Footer />
      </body>
    </html>
  );
}

function MessageCircleIcon() {
  return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle w-6 h-6"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>;
}
