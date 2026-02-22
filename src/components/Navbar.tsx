import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, MessageCircle, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

const BOOK_MESSAGE = "Hi, I'd like to book a premium cleaning experience.";
const openBookEmail = () => {
  const subject = "Book a Cleaning";
  const body = "Hi, I'd like to book a premium cleaning experience.";
  window.open(`mailto:znscleaningservices25@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_blank");
};

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Our Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Our Story", path: "/about" },
  { label: "Work With Us", path: "/careers" },
  { label: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const location = useLocation();
  const { scrollY } = useScroll();
  const bookDropdownRef = useRef<HTMLDivElement>(null);

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bookDropdownOpen, setBookDropdownOpen] = useState(false);

  useEffect(() => {
    const sub = scrollY.on("change", (y) => {
      setScrolled(y > 20);
    });
    return () => sub();
  }, [scrollY]);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  // close book dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (bookDropdownRef.current && !bookDropdownRef.current.contains(e.target as Node)) {
        setBookDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navY = useTransform(scrollY, [0, 120], [0, -6]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 md:px-6 pt-3 md:pt-4 pointer-events-none">
        <motion.div
          style={{ y: navY }}
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`
          pointer-events-auto
          w-full max-w-7xl
          flex items-center justify-between
          h-[56px] md:h-[64px]
          px-5 md:px-8
          rounded-2xl
          border
          transition-all duration-500
          ${scrolled
              ? "bg-white/70 backdrop-blur-xl border-black/10 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
              : "bg-white border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.06)]"
            }
          `}
        >
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <motion.img
              whileHover={{ rotate: 6, scale: 1.06 }}
              src="/logo.svg"
              alt="Logo"
              className="w-9 h-9 md:w-11 md:h-11"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-1 bg-black/[0.03] p-1 rounded-xl">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                  relative px-5 py-2 rounded-lg text-sm font-semibold
                  transition-all duration-300
                  ${active
                      ? "text-black"
                      : "text-muted-foreground hover:text-black"
                    }
                  `}
                >
                  {active && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-white rounded-lg shadow-sm border border-black/5"
                      transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3 md:gap-6">
            <div className="hidden md:flex flex-col items-end gap-1 px-2">
              <a
                href="tel:+447591055763"
                className="flex items-center gap-2 text-[13px] leading-tight font-medium text-muted-foreground hover:text-black transition-colors"
              >
                <Phone size={12} />
                +44 7591 055763
              </a>
              <a
                href="tel:+447492928192"
                className="flex items-center gap-2 text-[13px] leading-tight font-medium text-muted-foreground hover:text-black transition-colors"
              >
                <Phone size={12} />
                +44 7492 928192
              </a>
            </div>

            <div className="hidden md:block relative" ref={bookDropdownRef}>
              <Button
                className="rounded-xl px-6 h-11 font-semibold shadow-lg hover:shadow-xl hover:scale-[1.04] flex items-center gap-2"
                onClick={() => setBookDropdownOpen((o) => !o)}
              >
                Book Cleaning
                <ChevronDown className={`w-4 h-4 transition-transform ${bookDropdownOpen ? "rotate-180" : ""}`} />
              </Button>
              <AnimatePresence>
                {bookDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="absolute right-0 top-full mt-2 py-2 w-56 rounded-xl bg-white border border-black/10 shadow-xl z-50"
                  >
                    <a
                      href={getWhatsAppUrl(BOOK_MESSAGE)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setBookDropdownOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-black/5 transition-colors text-left"
                    >
                      <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white">
                        <MessageCircle size={20} />
                      </div>
                      <span className="font-semibold">WhatsApp</span>
                    </a>
                    <button
                      type="button"
                      onClick={() => { openBookEmail(); setBookDropdownOpen(false); }}
                      className="flex items-center gap-3 w-full px-4 py-3 hover:bg-black/5 transition-colors text-left"
                    >
                      <div className="w-10 h-10 rounded-full bg-black/80 flex items-center justify-center text-white">
                        <Mail size={18} />
                      </div>
                      <span className="font-semibold">Email</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl border border-black/10"
            >
              <Menu size={20} />
            </button>
          </div>
        </motion.div>
      </header>

      {/* 🔥 PREMIUM MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-white"
          >
            {/* top bar */}
            <div className="flex items-center justify-between px-6 h-20 border-b">
              <img src="/logo.svg" className="w-9" />

              <button
                onClick={() => setMobileOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-xl border"
              >
                <X size={20} />
              </button>
            </div>

            {/* links */}
            <div className="flex flex-col px-6 pt-10 gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-semibold"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* bottom CTA */}
            <div className="absolute bottom-10 left-6 right-6 flex flex-col gap-4">
              <p className="text-sm font-semibold text-muted-foreground text-center">Book via</p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={getWhatsAppUrl(BOOK_MESSAGE)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 h-14 rounded-2xl font-semibold shadow-xl bg-[#25D366] text-white hover:opacity-90"
                >
                  <MessageCircle size={22} />
                  WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    openBookEmail();
                  }}
                  className="flex items-center justify-center gap-2 h-14 rounded-2xl font-semibold shadow-xl bg-black text-white hover:opacity-90"
                >
                  <Mail size={20} />
                  Email
                </button>
              </div>

              <div className="flex gap-2">
                <a
                  href="tel:+447591055763"
                  className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl border border-black/10 bg-black/5 hover:bg-black/10 transition-colors text-sm font-semibold"
                >
                  <Phone size={14} />
                  +44 7591 055763
                </a>
                <a
                  href="tel:+447492928192"
                  className="flex-1 flex items-center justify-center gap-2 h-12 rounded-xl border border-black/10 bg-black/5 hover:bg-black/10 transition-colors text-sm font-semibold"
                >
                  <Phone size={14} />
                  +44 7492 928192
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
