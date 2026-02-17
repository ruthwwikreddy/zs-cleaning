import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => (
  <a
    href="https://wa.me/447000000000?text=Hi%2C%20I%27d%20like%20to%20enquire%20about%20your%20cleaning%20services."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle className="w-6 h-6" />
  </a>
);

export default WhatsAppButton;
