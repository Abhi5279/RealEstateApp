
import {
  MapPin, House, Search, ArrowRight, ChevronDown,
  Ruler, Phone, MessageCircle, BadgeCheck,
  Shield, FileCheck, Handshake, Headphones
} from "lucide-react";
import Link from "next/link";

export default function Home() {
  const statsData = [
    { label: "Properties Sold", value: "500+" },
    { label: "Years Experience", value: "15+" },
    { label: "Happy Families", value: "1000+" },
    { label: "Villages Covered", value: "50+" },
  ];

  const whyChooseUs = [
    {
      icon: Shield,
      title: "Trusted Dealer",
      desc: "15+ years of experience in property dealing"
    },
    {
      icon: FileCheck,
      title: "Legal Verified",
      desc: "All properties with clear legal documentation"
    },
    {
      icon: Handshake,
      title: "Transparent Dealing",
      desc: "No hidden charges, fair pricing"
    },
    {
      icon: Headphones,
      title: "Full Support",
      desc: "From site visit to registration"
    },
  ];

  const properties = [
    {
      id: 1,
      title: "Premium Residential Plot",
      type: "Land",
      location: "Near Highway, Raipur",
      size: "2,400 Sq Ft",
      price: "₹25 Lakh",
      img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800",
    },
    {
      id: 2,
      title: "Spacious 3BHK Flat",
      type: "Flat",
      location: "Civil Lines, Bilaspur",
      size: "1,450 Sq Ft",
      price: "₹55 Lakh",
      img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
    },
    {
      id: 3,
      title: "Independent Duplex House",
      type: "House",
      location: "New Colony, Durg",
      size: "2,200 Sq Ft",
      price: "₹85 Lakh",
      img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920",
    }
  ];

  return (
    <main className="bg-white ">
      {/* 1. FULL SCREEN HERO SECTION */}
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920"
            alt="Villa Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#2d5a43]/75 backdrop-blur-[1px]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center mt-10">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-md">
            Find Your Perfect Land, Flat or Home
          </h1>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
            Trusted property solutions in urban & village areas
          </p>

          {/* Search Box Card */}
          <div className="bg-[#f8f9f4] rounded-2xl p-4 md:p-8 shadow-2xl max-w-5xl mx-auto text-left">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Enter Location</p>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2d5a43]" />
                  <select className="w-full h-12 pl-10 pr-10 rounded-xl border border-slate-200 bg-white appearance-none cursor-pointer focus:ring-2 focus:ring-[#2d5a43] outline-none">
                    <option>All Locations</option>
                    <option>Raipur</option>
                    <option>Bilaspur</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Property Type</p>
                <div className="relative">
                  <House className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#2d5a43]" />
                  <select className="w-full h-12 pl-10 pr-10 rounded-xl border border-slate-200 bg-white appearance-none cursor-pointer focus:ring-2 focus:ring-[#2d5a43] outline-none">
                    <option>All Types</option>
                    <option>Land</option>
                    <option>Flat</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                </div>
              </div>

              <div className="flex items-end">
                <button className="w-full h-12 bg-[#2d5a43] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#244835] transition-all shadow-lg active:scale-95">
                  <Search className="w-5 h-5" />
                  Search Properties
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <Link href="/properties">
              <button className="inline-flex items-center gap-2 border border-white/40 bg-white/5 text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 backdrop-blur-sm transition-all">
                All Properties <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>

        {/* Floating Mouse/Scroll Icon */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-2">
            <div className="w-1 h-2 rounded-full bg-white/40 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* 2. STATS SECTION (Cream Background) */}
      <section className="py-20 bg-[#f1ede4]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsData.map((stat, index) => (
              <div key={index} className="text-center p-4">
                <div className="font-serif text-4xl md:text-5xl font-bold text-[#2d5a43] mb-2">
                  {stat.value}
                </div>
                <div className="text-[#7a736a] text-sm md:text-base font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED PROPERTIES SECTION */}
     

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2d5a43] mb-4">
              Featured Properties
            </h2>
            <p className="text-slate-500 text-lg">
              Handpicked properties for you
            </p>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {properties.map((property) => (
              <div
                key={property.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 transition-all hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={property.img}
                    alt={property.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#2d5a43] text-white text-[10px] font-bold uppercase">
                    {property.type}
                  </div>

                  <div className="absolute top-3 right-3 px-2 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-bold flex items-center gap-1 text-[#2d5a43]">
                    <BadgeCheck className="w-3.5 h-3.5" />
                    APPROVED
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="font-serif font-bold text-xl text-slate-900 group-hover:text-[#2d5a43] transition-colors">
                    {property.title}
                  </h3>

                  <div className="flex items-center gap-2 text-slate-500 text-sm">
                    <MapPin className="w-4 h-4 text-[#2d5a43]" />
                    <span>{property.location}</span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <Ruler className="w-4 h-4 text-[#2d5a43]" />
                      <span className="font-semibold">{property.size}</span>
                    </div>
                    <div className="text-xl font-black text-[#2d5a43]">
                      {property.price}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <button className="flex-1 flex items-center justify-center gap-2 border border-slate-200 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:text-white hover:bg-amber-600 transition-all">
                      <Phone className="w-4 h-4" />
                      Call
                    </button>

                    <button className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-2.5 rounded-xl text-xs font-bold hover:bg-[#128C7E] shadow-md transition-all">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </button>
                  </div>

                  {/* View Details */}
                  <Link href={`/properties/${property.id}`}>
                    <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground hover:bg-amber-600 hover:text-white h-9 rounded-md px-3 w-full gap-1 group/btn">
                      View Details
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 transition-transform group-hover/btn:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* All Properties CTA */}
          <div className="text-center">
            <Link href="/properties">
              <button className="inline-flex items-center justify-center gap-2 bg-[#2d5a43] text-white px-10 h-14 rounded-2xl font-bold hover:shadow-xl transition-all active:scale-95">
                All Properties <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>
        </div>
      </section>


      {/* 4. WHY CHOOSE US SECTION */}
      <section className="py-24 bg-[#f1ede4]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Choose Us</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white/90 rounded-2xl p-8 text-center shadow-sm border border-white/50 hover:shadow-xl transition-all duration-500">
                <div className="w-20 h-20 rounded-[2rem] bg-[#2d5a43]/10 flex items-center justify-center mx-auto mb-8">
                  <item.icon className="w-10 h-10 text-[#2d5a43]" />
                </div>
                <h3 className="font-serif font-extrabold text-xl text-slate-900 mb-4 tracking-tight">{item.title}</h3>
                <p className="text-[#7a736a] text-sm leading-relaxed px-2 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* 5. CTA SECTION (Dark Green Gradient Background) */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920" alt="Beautiful Property" className="w-full h-full object-cover" />
          {/* Matches the specific bg-gradient from your code */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2d5a43]/95 to-[#2d5a43]/80"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Ready to Find Your Dream Property?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">Contact us today for personalized assistance</p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="https://wa.me/+919876543210" target="_blank" rel="noopener noreferrer">
              <button className="inline-flex items-center justify-center bg-[#25D366] text-white px-8 h-14 rounded-2xl font-bold hover:bg-[#128C7E] shadow-xl transition-all active:scale-95 gap-2">
                <MessageCircle className="w-6 h-6" /> Chat on WhatsApp
              </button>
            </a>
            <a href="tel:+919876543210">
              <button className="inline-flex items-center justify-center border-2 border-white/30 bg-white/10 text-white px-10 h-14 rounded-2xl font-bold hover:bg-white/20 backdrop-blur-sm transition-all active:scale-95 gap-2">
                <Phone className="w-6 h-6" /> Call Now
              </button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}