import { useState } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Mail, MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEmailClick = () => {
    const subject = "Cleaning Enquiry";
    const body = "Hi, I'd like to enquire about your cleaning services.";
    window.open(`mailto:znscleaningservices25@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-2 pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="flex flex-col gap-3 mb-2 pointer-events-auto"
          >
            <button
              onClick={handleEmailClick}
              className="flex items-center gap-3 bg-white px-2 py-2 pl-4 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:scale-105 transition-transform border border-black/5"
            >
              <span className="font-bold text-sm tracking-tight">Email Us</span>
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
                <Mail size={18} />
              </div>
            </button>
            <a
              href={getWhatsAppUrl("Hi, I'd like to enquire about your cleaning services.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 bg-white px-2 py-2 pl-4 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:scale-105 transition-transform border border-black/5"
            >
              <span className="font-bold text-sm tracking-tight">WhatsApp</span>
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                <MessageCircle size={20} />
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-transform hover:scale-105 relative bg-white"
        aria-label="Contact Z&S"
        title="Contact Z&S"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center bg-black text-white"
            >
              <X size={28} />
            </motion.div>
          ) : (
            <motion.div
              key="logo"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="absolute inset-0"
            >
              <img
                src="/logo.svg"
                alt="Z&S Cleaning – Contact"
                className="w-full h-full object-cover object-center p-2 drop-shadow-sm"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
};

export default WhatsAppButton;

