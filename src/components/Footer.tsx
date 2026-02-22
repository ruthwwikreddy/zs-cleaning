import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const FACEBOOK_URL = "https://www.facebook.com/share/g/1CNXt7HmhG/?mibextid=wwXIfr";
const INSTAGRAM_URL = "https://www.instagram.com/znscleaningservicesltd?igsh=MXZtMTVhdTIwdnNteA%3D%3D&utm_source=qr";
const TIKTOK_URL = "https://www.tiktok.com/@znscleaning25?_r=1&_t=ZN-943puUhtmdi";

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
  </svg>
);
const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-3.205a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z" clipRule="evenodd" />
  </svg>
);
const TikTokIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1.05-.08 6.33 6.33 0 00-6.33 6.33 6.33 6.33 0 0010.32 4.86v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
  </svg>
);

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <Link to="/" className="flex items-center gap-3 mb-6 group">
            <div className="w-12 h-12 rounded-xl bg-white p-1 flex items-center justify-center transition-transform group-hover:scale-110">
              <img src="/logo.svg" alt="Z&S Cleaning Services" className="w-full h-full object-contain" />
            </div>
            <div>
              <p className="font-heading font-black text-lg tracking-tight">Z&S Cleaning</p>
              <p className="text-[10px] font-bold opacity-60 uppercase tracking-widest text-primary">Services LTD</p>
            </div>
          </Link>
          <p className="text-sm opacity-70 leading-relaxed">
            Professional cleaning services across Watford, Hertfordshire & Greater London. Fully insured & registered.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Our Story", path: "/about" },
              { label: "Our Services", path: "/services" },
              { label: "Gallery", path: "/gallery" },
              { label: "FAQ", path: "/faq" },
              { label: "Work With Us", path: "/careers" },
              { label: "Contact Us", path: "/contact" },
              { label: "Terms & Policies", path: "/terms" },
            ].map((link) => (
              <Link key={link.path} to={link.path} className="text-sm opacity-70 hover:opacity-100 transition-opacity">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-bold mb-4">Our Services</h4>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <Link to="/maintenance-clean" className="hover:text-primary transition-colors">Domestic Maintenance Clean</Link>
            <Link to="/services" className="hover:text-primary transition-colors">Regular Cleaning</Link>
            <Link to="/services" className="hover:text-primary transition-colors">Deep Cleaning</Link>
            <Link to="/services" className="hover:text-primary transition-colors">End of Tenancy</Link>
            <Link to="/services" className="hover:text-primary transition-colors">Office Cleaning</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold mb-4">Get In Touch</h4>
          <div className="flex flex-col gap-3 text-sm">
            <a href="tel:+447591055763" className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <Phone className="w-4 h-4 text-primary" /> +44 7591 055763
            </a>
            <a href="tel:+447492928192" className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <Phone className="w-4 h-4 text-primary" /> +44 7492 928192
            </a>
            <a href="mailto:znscleaningservices25@gmail.com" className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <Mail className="w-4 h-4 text-primary" /> znscleaningservices25@gmail.com
            </a>
            <span className="flex items-center gap-2 opacity-70">
              <MapPin className="w-4 h-4 text-primary" /> Watford, Hertfordshire
            </span>
            <div className="flex items-center gap-4 mt-4">
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href={TIKTOK_URL} target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity" aria-label="TikTok">
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-60">
        <p>© {new Date().getFullYear()} Z&S Cleaning Services LTD. All rights reserved.</p>
        <p>Company Registered in England & Wales</p>
      </div>
    </div>
  </footer>
);

export default Footer;
