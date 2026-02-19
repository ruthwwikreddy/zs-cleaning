import { getWhatsAppUrl } from "@/lib/whatsapp";

const WhatsAppButton = () => (
  <a
    href={getWhatsAppUrl("Hi, I'd like to enquire about your cleaning services.")}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:scale-110 transition-transform"
    aria-label="Chat on WhatsApp"
    title="Chat with Z&S on WhatsApp"
  >
    <img
      src="/gallery/image.png"
      alt="Z&S Cleaning – Chat on WhatsApp"
      className="w-full h-full object-cover object-top"
    />
  </a>
);

export default WhatsAppButton;

