import {
  MapPin,
  Ruler,
  Phone,
  MessageCircle,
  BadgeCheck,
  ArrowRight,
  Filter,
  Grid3X3,
  List
} from "lucide-react";
import Link from "next/link";

export default function PropertiesPage() {
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
      img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800",
    },
    {
      id: 4,
      title: "Agricultural Land",
      type: "Land",
      location: "Village Nawagaon",
      size: "43,560 Sq Ft",
      price: "₹15 Lakh",
      img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800",
    },
    {
      id: 5,
      title: "2BHK Ready Flat",
      type: "Flat",
      location: "Shankar Nagar, Raipur",
      size: "1,100 Sq Ft",
      price: "₹38 Lakh",
      img: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
    },
    {
      id: 6,
      title: "Village House with Land",
      type: "House",
      location: "Gram Panchayat Semariya",
      size: "3,000 Sq Ft",
      price: "₹28 Lakh",
      img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800",
    },
  ];

  return (
    <main className="bg-background min-h-screen ">

      {/* PAGE HEADER */}
      <section className="pt-24 pb-8 bg-secondary bg-[#f1ede4]">
        <div className="container mx-auto px-4">
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-2">
            Properties
          </h1>
          <p className="text-muted-foreground">
            {properties.length} properties found
          </p>
        </div>
      </section>

      {/* FILTER BAR */}
      <section className="py-6 border-b border-border sticky top-16 md:top-20 bg-background z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-4 md:mb-0">
            <button className="md:hidden flex items-center gap-2 border px-3 py-2 rounded-lg text-sm">
              <Filter className="w-4 h-4" /> Filters
            </button>

            <div className="flex gap-2">
              <button className="bg-primary text-primary-foreground bg-green-800 h-9 w-9 rounded-lg flex items-center justify-center">
                <Grid3X3 className="w-4 h-4 text-white" />
              </button>
              <button className="h-9 w-9 rounded-lg flex hover:bg-orange-700 hover:text-white  transition-colors items-center justify-center hover:bg-accent">
                <List className="w-4 h-4 " />
              </button>
            </div>
          </div>

          {/* DESKTOP FILTERS */}
          <div className="hidden md:flex flex-wrap gap-4 mt-4">
            <select className="h-9 px-3 rounded-lg border bg-background text-sm">
              <option>All Locations</option>
              <option>Raipur</option>
              <option>Bilaspur</option>
              <option>Durg</option>
            </select>

            <select className="h-9 px-3 rounded-lg border bg-background text-sm">
              <option>All Types</option>
              <option>Land</option>
              <option>Flat</option>
              <option>House</option>
            </select>

            <select className="h-9 px-3 rounded-lg border bg-background text-sm">
              <option>All Prices</option>
              <option>Under 25 Lakh</option>
              <option>25–50 Lakh</option>
              <option>50–75 Lakh</option>
              <option>75+ Lakh</option>
            </select>
          </div>
        </div>
      </section>

      {/* PROPERTY GRID */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {properties.map((property) => (
              <div
                key={property.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 transition-all hover:shadow-2xl"
              >
                {/* Image */}
                <div className="relative aspect-4/3 overflow-hidden">
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
        </div>
      </section>
    </main>
  );
}
