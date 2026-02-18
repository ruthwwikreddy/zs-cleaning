import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

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
            <a href="mailto:znscleaningservices25@gmail.com" className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <Mail className="w-4 h-4 text-primary" /> znscleaningservices25@gmail.com
            </a>
            <span className="flex items-center gap-2 opacity-70">
              <MapPin className="w-4 h-4 text-primary" /> Watford, Hertfordshire
            </span>
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
