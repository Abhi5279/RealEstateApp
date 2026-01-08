// "use client";

// import React, { useState } from 'react';
// import { 
//   MapPin, Ruler, House, BadgeCheck, Phone, MessageCircle, 
//   ChevronLeft, ChevronRight, Send, ExternalLink, Calculator, ArrowRightLeft 
// } from 'lucide-react';
// import Link from 'next/link';

// // Mock data to simulate fetching a property by ID
// const propertiesData = {
//   "1": { id: 1, title: "Premium Residential Plot", type: "Land", location: "Near Highway, Raipur", size: "2,400 Sq Ft", price: "₹25 Lakh", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800", description: "Beautiful residential plot with clear title, perfect for building your dream home. Located near the highway with excellent connectivity.", features: ["Clear Title", "Near Highway", "Water Available", "Electricity Connection"] },
//   "2": { id: 2, title: "Spacious 3BHK Flat", type: "Flat", location: "Civil Lines, Bilaspur", size: "1,450 Sq Ft", price: "₹55 Lakh", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800", description: "Modern 3BHK apartment in the heart of the city. Features spacious rooms and premium finishes.", features: ["Modular Kitchen", "Lift", "Parking", "24/7 Security"] },
//   "3": { id: 3, title: "Independent Duplex House", type: "House", location: "New Colony, Durg", size: "2,200 Sq Ft", price: "₹85 Lakh", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800", description: "Beautiful duplex house with garden, perfect for family. Newly constructed with premium interiors.", features: ["Garden", "Bore Well", "Covered Parking", "Modular Kitchen"] },
//    "4": {
//       id: 4,
//       title: "Agricultural Land",
//       type: "Land",
//       location: "Village Nawagaon",
//       size: "43,560 Sq Ft",
//       price: "₹15 Lakh",
//       img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
//     },
//     "5":    {
//       id: 5,
//       title: "2BHK Ready Flat",
//       type: "Flat",
//       location: "Shankar Nagar, Raipur",
//       size: "1,100 Sq Ft",
//       price: "₹38 Lakh",
//       img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
//     },
//      "6":    {
//       id: 6,
//       title: "Village House with Land",
//       type: "House",
//       location: "Gram Panchayat Semariya",
//       size: "3,000 Sq Ft",
//       price: "₹28 Lakh",
//       img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
//     },
// };

// export default function PropertyDetailPage({ params }) {
//   const propertyId = params.id;
//   const property = propertiesData[propertyId] || propertiesData["1"]; // Fallback to first if ID not found

//   // Area Converter Logic
//   const [sqft, setSqft] = useState(property.size.split(' ')[0].replace(',', ''));
//   const convertUnits = (val) => {
//     return {
//       sqYard: (val / 9).toFixed(2),
//       bigha: (val / 2722.5).toFixed(4)
//     };
//   };
//   const units = convertUnits(sqft);

//   return (
//     <div className="min-h-screen bg-background ">
//       {/* BREADCRUMBS SECTION */}
//       <section className="pt-24 pb-4  border-b border-slate-200 bg-[#f1ede4]">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center gap-2 text-sm text-slate-500">
//             <Link href="/" className="hover:text-[#2d5a43] transition-colors">Home</Link>
//             <span>/</span>
//             <Link href="/properties" className="hover:text-[#2d5a43] transition-colors">Properties</Link>
//             <span>/</span>
//             <span className="text-slate-900 font-medium">{property.title}</span>
//           </div>
//         </div>
//       </section>

//       <section className="py-8 md:py-12">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
//             {/* LEFT COLUMN: Main Details */}
//             <div className="lg:col-span-2 space-y-8">
              
//               {/* IMAGE GALLERY CAROUSEL */}
//               <div className="relative rounded-2xl overflow-hidden shadow-xl group">
//                 <div className="aspect-[16/10] relative">
//                   <img src={property.img} alt={property.title} className="w-full h-full object-cover" />
                  
//                   {/* Gallery Nav Buttons */}
//                   <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all opacity-0 group-hover:opacity-100 shadow-lg">
//                     <ChevronLeft className="w-6 h-6 text-[#2d5a43]" />
//                   </button>
//                   <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-all opacity-0 group-hover:opacity-100 shadow-lg">
//                     <ChevronRight className="w-6 h-6 text-[#2d5a43]" />
//                   </button>

//                   <div className="absolute top-4 left-4 flex gap-2">
//                     <span className="px-3 py-1 rounded-full bg-[#2d5a43] text-white text-xs font-bold uppercase">{property.type}</span>
//                     <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold flex items-center gap-1 text-[#2d5a43] border border-[#2d5a43]/20 shadow-sm">
//                       <BadgeCheck className="w-4 h-4" /> APPROVED
//                     </span>
//                   </div>
//                   <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs">1 / 2</div>
//                 </div>
//               </div>

//               {/* TITLE & LOCATION */}
//               <div>
//                 <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-3">{property.title}</h1>
//                 <div className="flex items-center gap-2 text-slate-500">
//                   <MapPin className="w-5 h-5 text-[#2d5a43]" />
//                   <span className="text-lg">{property.location}</span>
//                 </div>
//               </div>

//               {/* QUICK STATS GRID */}
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 <div className="bg-[#f1ede4] rounded-2xl p-5 text-center border border-slate-100">
//                   <Ruler className="w-6 h-6 mx-auto mb-2 text-[#2d5a43]" />
//                   <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Total Area</div>
//                   <div className="font-bold text-slate-900">{property.size}</div>
//                 </div>
//                 <div className="bg-[#f1ede4] rounded-2xl p-5 text-center border border-slate-100">
//                   <House className="w-6 h-6 mx-auto mb-2 text-[#2d5a43]" />
//                   <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Type</div>
//                   <div className="font-bold text-slate-900">{property.type}</div>
//                 </div>
//                 <div className="bg-[#f1ede4] rounded-2xl p-5 text-center border border-slate-100">
//                   <BadgeCheck className="w-6 h-6 mx-auto mb-2 text-[#2d5a43]" />
//                   <div className="text-xs text-slate-500 uppercase font-bold tracking-wider">Status</div>
//                   <div className="font-bold text-[#2d5a43]">Verified</div>
//                 </div>
//                 <div className="bg-[#2d5a43] rounded-2xl p-5 text-center text-white shadow-lg">
//                   <div className="text-xs opacity-80 uppercase font-bold tracking-wider">Price</div>
//                   <div className="font-black text-xl">{property.price}</div>
//                 </div>
//               </div>

//               {/* OVERVIEW SECTION */}
//               <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
//                 <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Property Overview</h2>
//                 <p className="text-slate-600 leading-relaxed text-lg">{property.description}</p>
//                 <div className="mt-8 pt-8 border-t border-slate-100">
//                   <h3 className="font-bold text-slate-900 mb-4">Core Features</h3>
//                   <div className="flex flex-wrap gap-3">
//                     {property.features.map(feature => (
//                       <span key={feature} className="px-4 py-2 rounded-xl bg-[#f1ede4] text-[#2d5a43] text-sm font-bold border border-[#2d5a43]/10">
//                         {feature}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>

//               {/* AREA CONVERTER CALCULATOR */}
//               <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
//                 <div className="flex items-center gap-3 mb-6">
//                   <div className="w-12 h-12 rounded-2xl bg-[#2d5a43]/10 flex items-center justify-center">
//                     <Calculator className="w-6 h-6 text-[#2d5a43]" />
//                   </div>
//                   <h3 className="font-serif font-bold text-xl text-slate-900">Land Area Converter</h3>
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   <div className="space-y-2">
//                     <label className="text-xs font-bold text-slate-500 uppercase">Square Feet</label>
//                     <input 
//                       type="number" 
//                       className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 font-bold focus:ring-2 focus:ring-[#2d5a43] outline-none transition-all" 
//                       value={sqft}
//                       onChange={(e) => setSqft(e.target.value)}
//                     />
//                   </div>
//                   <div className="hidden md:flex items-end justify-center pb-3">
//                     <ArrowRightLeft className="w-5 h-5 text-slate-300" />
//                   </div>
//                   <div className="space-y-2">
//                     <label className="text-xs font-bold text-slate-500 uppercase">Square Yard (Gaj)</label>
//                     <div className="w-full h-12 flex items-center rounded-xl bg-slate-100 px-4 font-bold text-slate-700 border border-slate-200 italic">
//                       {units.sqYard}
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-6 pt-6 border-t border-slate-100">
//                   <div className="space-y-2">
//                     <label className="text-xs font-bold text-slate-500 uppercase">Bigha (approx)</label>
//                     <div className="w-full h-12 flex items-center rounded-xl bg-slate-100 px-4 font-bold text-slate-700 border border-slate-200 max-w-xs italic">
//                       {units.bigha}
//                     </div>
//                     <p className="text-xs text-slate-400 mt-2">* Standard Calculation: 1 Bigha ≈ 2,722.5 Sq Ft</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT COLUMN: Inquiry Sidebar */}
//             <div className="space-y-6">
//               <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-xl sticky top-24">
//                 <h3 className="font-serif text-xl font-bold text-slate-900 mb-6">Interested in this property?</h3>
//                 <div className="space-y-3 mb-8">
//                   <a href={`https://wa.me/+919876543210?text=Hello! I am interested in ${property.title}`} target="_blank" rel="noopener noreferrer" className="block">
//                     <button className="w-full bg-[#25D366] text-white h-14 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all shadow-md">
//                       <MessageCircle className="w-6 h-6" /> Chat on WhatsApp
//                     </button>
//                   </a>
//                   <a href="tel:+919876543210" className="block">
//                     <button className="w-full bg-orange-600 text-white border border-[#2d5a43]/20 h-14 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-100 transition-all">
//                       <Phone className="w-6 h-6" /> Call Directly
//                     </button>
//                   </a>
//                 </div>

//                 <div className="pt-8 border-t border-slate-100">
//                   <h4 className="font-bold text-slate-900 mb-4">Send Inquiry</h4>
//                   <form className="space-y-4">
//                     <input className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none focus:ring-2 focus:ring-[#2d5a43] transition-all" placeholder="Your Full Name" required />
//                     <input className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none focus:ring-2 focus:ring-[#2d5a43] transition-all" placeholder="Phone Number" required />
//                     <textarea className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none focus:ring-2 focus:ring-[#2d5a43] transition-all" placeholder="Message" rows="3"></textarea>
//                     <button type="submit" className="w-full bg-[#2d5a43] text-white h-12 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#1e3d2d] transition-all shadow-lg">
//                       <Send className="w-4 h-4" /> Submit Inquiry
//                     </button>
//                   </form>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


"use client";

import React, { useState, use } from 'react';
import { 
  MapPin, Ruler, House, BadgeCheck, Phone, MessageCircle, 
  ChevronLeft, ChevronRight, Send, Calculator, ArrowRightLeft 
} from 'lucide-react';
import Link from 'next/link';

// Mock data matches your featured properties list
const propertiesData = {
  "1": { id: 1, title: "Premium Residential Plot", type: "Land", location: "Near Highway, Raipur", size: "2,400 Sq Ft", price: "₹25 Lakh", img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800", description: "Beautiful residential plot with clear title, perfect for building your dream home. Located near the highway with excellent connectivity.", features: ["Clear Title", "Near Highway", "Water Available", "Electricity Connection"] },
  "2": { id: 2, title: "Spacious 3BHK Flat", type: "Flat", location: "Civil Lines, Bilaspur", size: "1,450 Sq Ft", price: "₹55 Lakh", img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800", description: "Modern 3BHK apartment in the heart of the city. Features spacious rooms and premium finishes.", features: ["Modular Kitchen", "Lift", "Parking", "24/7 Security"] },
  "3": { id: 3, title: "Independent Duplex House", type: "House", location: "New Colony, Durg", size: "2,200 Sq Ft", price: "₹85 Lakh", img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800", description: "Beautiful duplex house with garden, perfect for family. Newly constructed with premium interiors.", features: ["Garden", "Bore Well", "Covered Parking", "Modular Kitchen"] },
  "4": { id: 4, title: "Agricultural Land", type: "Land", location: "Village Nawagaon", size: "43,560 Sq Ft", price: "₹15 Lakh", img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800", description: "Fertile land perfect for farming or long-term investment.", features: ["Road Access", "Fertile Soil", "Clear Title"] },
  "5": { id: 5, title: "2BHK Ready Flat", type: "Flat", location: "Shankar Nagar, Raipur", size: "1,100 Sq Ft", price: "₹38 Lakh", img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800", description: "Ready to move in 2BHK flat in a prime residential area.", features: ["Gated Community", "Water 24/7", "Power Backup"] },
  "6": { id: 6, title: "Village House with Land", type: "House", location: "Gram Panchayat Semariya", size: "3,000 Sq Ft", price: "₹28 Lakh", img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800", description: "Authentic village home with a large plot of land.", features: ["Garden", "Borewell", "Quiet Location"] },
};

export default function PropertyDetailPage({ params }) {
  // Fix for Next.js 15+ async params
  const resolvedParams = use(params);
  const propertyId = resolvedParams.id;
  const property = propertiesData[propertyId] || propertiesData["1"];

  // Area Converter Logic
  const [sqft, setSqft] = useState(property.size.split(' ')[0].replace(',', ''));
  const units = {
    sqYard: (parseFloat(sqft || 0) / 9).toFixed(2),
    bigha: (parseFloat(sqft || 0) / 2722.5).toFixed(4)
  };

  return (
    <div className="min-h-screen bg-white">
      {/* BREADCRUMBS - Matches your Secondary Cream color */}
      <section className="pt-24 pb-4 border-b border-slate-200 bg-[#f1ede4]">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <Link href="/" className="hover:text-[#2d5a43] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/properties" className="hover:text-[#2d5a43] transition-colors">Properties</Link>
            <span>/</span>
            <span className="text-slate-900 font-medium">{property.title}</span>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* LEFT COLUMN: Main Details */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* IMAGE GALLERY */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                <div className="aspect-[16/10] relative bg-slate-200">
                  <img src={property.img} alt={property.title} className="w-full h-full object-cover" />
                  
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#2d5a43] text-white text-xs font-bold uppercase">{property.type}</span>
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-bold flex items-center gap-1 text-[#2d5a43] border shadow-sm">
                      <BadgeCheck className="w-4 h-4" /> APPROVED
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-black/50 text-white text-xs">1 / 2</div>
                </div>
              </div>

              {/* TITLE & LOCATION */}
              <div>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">{property.title}</h1>
                <div className="flex items-center gap-2 text-slate-500">
                  <MapPin className="w-5 h-5 text-[#2d5a43]" />
                  <span className="text-lg">{property.location}</span>
                </div>
              </div>

              {/* QUICK STATS - Exact color match */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { icon: Ruler, label: "Total Area", value: property.size },
                  { icon: House, label: "Type", value: property.type },
                  { icon: BadgeCheck, label: "Status", value: "Verified" },
                ].map((item, i) => (
                  <div key={i} className="bg-[#f1ede4] rounded-2xl p-5 text-center border border-white">
                    <item.icon className="w-6 h-6 mx-auto mb-2 text-[#2d5a43]" />
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">{item.label}</div>
                    <div className="font-bold text-slate-900">{item.value}</div>
                  </div>
                ))}
                <div className="bg-[#2d5a43] rounded-2xl p-5 text-center text-white shadow-lg border border-[#2d5a43]">
                  <div className="text-[10px] opacity-80 uppercase font-bold tracking-widest">Price</div>
                  <div className="font-black text-xl">{property.price}</div>
                </div>
              </div>

              {/* OVERVIEW */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-slate-900 mb-4">Property Overview</h2>
                <p className="text-slate-600 leading-relaxed text-lg">{property.description}</p>
                <div className="mt-8 pt-8 border-t">
                  <h3 className="font-bold text-slate-900 mb-4">Features</h3>
                  <div className="flex flex-wrap gap-3">
                    {property.features?.map(feature => (
                      <span key={feature} className="px-4 py-1.5 rounded-xl bg-slate-50 text-[#2d5a43] text-sm font-bold border">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* AREA CONVERTER */}
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#2d5a43]/10 flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-[#2d5a43]" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-slate-900">Land Area Converter</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Square Feet</label>
                    <input 
                      type="number" 
                      className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 font-bold focus:ring-2 focus:ring-[#2d5a43] outline-none" 
                      value={sqft}
                      onChange={(e) => setSqft(e.target.value)}
                    />
                  </div>
                  <div className="flex justify-center text-slate-300">
                    <ArrowRightLeft className="w-5 h-5 rotate-90 md:rotate-0" />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-slate-400 uppercase ml-1">Square Yard</label>
                    <div className="w-full h-12 flex items-center rounded-xl bg-slate-100 px-4 font-bold text-slate-700 border border-slate-200 italic">
                      {units.sqYard}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Inquiry Sidebar */}
            <div className="space-y-6 ">
              <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-2xl lg:sticky lg:top-24">
                <h3 className="font-serif text-xl font-bold text-slate-900 mb-6">Interested?</h3>
                <div className="space-y-3 mb-8">
                  <a href={`https://wa.me/+919876543210?text=Hello! I am interested in ${property.title}`} target="_blank" rel="noopener noreferrer" className="block">
                    <button className="w-full bg-[#25D366] text-white h-14 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#128C7E] transition-all shadow-md active:scale-95">
                      <MessageCircle className="w-6 h-6" /> WhatsApp
                    </button>
                  </a>
                  <a href="tel:+919876543210" className="block">
                    <button className="w-full bg-orange-600 text-white h-14 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-orange-700 transition-all active:scale-95 shadow-md">
                      <Phone className="w-6 h-6" /> Call Directly
                    </button>
                  </a>
                </div>

                <div className="pt-8 border-t  border-slate-100">
                  <h4 className="font-bold text-slate-900 mb-4">Send Inquiry</h4>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none focus:ring-2 focus:ring-[#2d5a43]" placeholder="Name" required />
                    <input className="w-full h-12 rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none focus:ring-2 focus:ring-[#2d5a43]" placeholder="Phone" required />
                    <input className="w-full h-24 rounded-xl border border-slate-200 bg-slate-50 px-4 outline-none focus:ring-2 focus:ring-[#2d5a43]" placeholder="Message" required />
                    <button type="submit" className="w-full bg-[#2d5a43] text-white h-12 rounded-xl font-bold hover:shadow-xl transition-all">
                      Submit Inquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}