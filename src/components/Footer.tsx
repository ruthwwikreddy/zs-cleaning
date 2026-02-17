import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-extrabold text-lg">Z&S</span>
            </div>
            <div>
              <p className="font-heading font-bold text-sm">Z&S Cleaning</p>
              <p className="text-xs opacity-70">Services LTD</p>
            </div>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">
            Professional cleaning services across Watford, Hertfordshire & Greater London. Fully insured & registered.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "About Us", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Pricing", path: "/pricing" },
              { label: "Gallery", path: "/gallery" },
              { label: "Contact", path: "/contact" },
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
            <span>Regular Cleaning</span>
            <span>Deep Cleaning</span>
            <span>End of Tenancy</span>
            <span>Office Cleaning</span>
            <span>Carpet Cleaning</span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-bold mb-4">Get In Touch</h4>
          <div className="flex flex-col gap-3 text-sm">
            <a href="tel:+917842906633" className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <Phone className="w-4 h-4 text-primary" /> +91 78429 06633
            </a>
            <a href="mailto:info@zscleaningservices.co.uk" className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
              <Mail className="w-4 h-4 text-primary" /> info@zscleaningservices.co.uk
            </a>
            <span className="flex items-center gap-2 opacity-70">
              <MapPin className="w-4 h-4 text-primary" /> Watford, Hertfordshire
            </span>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm opacity-60">
        <p>© {new Date().getFullYear()} Z&S Cleaning Services LTD. All rights reserved.</p>
        <p>Company Registered in England & Wales</p>
      </div>
    </div>
  </footer>
);

export default Footer;
