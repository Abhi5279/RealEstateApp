import { Phone, MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      <a className="w-12 h-12 bg-[#1e293b] text-white rounded-full flex items-center justify-center">
        <Phone />
      </a>
      <a className="w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center">
        <MessageCircle />
      </a>
    </div>
  );
}
