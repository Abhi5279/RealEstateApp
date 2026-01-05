import { MapPin, Ruler, Phone, MessageCircle, BadgeCheck } from "lucide-react";

export default function PropertyCard({ title, location, price, size, type, img }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md border">
      <div className="relative aspect-[4/3]">
        <img src={img} className="w-full h-full object-cover" />
        <span className="absolute top-3 left-3 bg-[#1e293b] text-white text-xs px-3 py-1 rounded-full">
          {type}
        </span>
      </div>

      <div className="p-4 space-y-2">
        <h3 className="font-serif font-bold text-lg">{title}</h3>
        <div className="flex items-center text-sm text-slate-500 gap-1">
          <MapPin className="w-4 h-4" /> {location}
        </div>
        <div className="flex justify-between pt-2">
          <span className="text-sm flex items-center gap-1">
            <Ruler className="w-4 h-4" /> {size}
          </span>
          <span className="font-bold">{price}</span>
        </div>
      </div>
    </div>
  );
}
