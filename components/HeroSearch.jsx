import { MapPin, House, Search, ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative  flex items-center justify-center overflow-hidden ">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-12 text-center">

        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4">
          Find Your Perfect Land, Flat or Home
        </h1>

        <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
          Trusted property solutions in urban & village areas
        </p>

        {/* Search */}
        <div className="bg-background/95 backdrop-blur-md rounded-2xl p-4 md:p-6 shadow-xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <div className="text-left space-y-2">
              <label className="text-sm font-medium">Enter Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <select className="w-full h-12 pl-10 pr-10 rounded-xl border border-input">
                  <option>All Locations</option>
                  <option>Raipur</option>
                  <option>Bilaspur</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
            </div>

            <div className="text-left space-y-2">
              <label className="text-sm font-medium">Property Type</label>
              <div className="relative">
                <House className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <select className="w-full h-12 pl-10 pr-10 rounded-xl border border-input">
                  <option>All Types</option>
                  <option>Land</option>
                  <option>Flat</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              </div>
            </div>

            <div className="flex items-end">
              <button className="w-full h-12 bg-primary text-primary-foreground rounded-lg font-semibold flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Search Properties
              </button>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="mt-8">
          <Link href="/properties">
            <button className="inline-flex items-center gap-2 border-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground px-8 h-12 rounded-lg font-semibold">
              All Properties
              <ArrowRight className="w-5 h-5" />
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
