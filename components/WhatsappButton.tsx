'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919068414747?text=Hello%20Studio%20Archtantra%2C%20I%20am%20interested%20in%20your%20architecture%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-[9999] bg-[#FFD700] hover:bg-[#e6c200] text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300"
    >
      <MessageCircle className="w-5 h-5" />
    </a>
  );
}
