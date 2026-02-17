import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-cleaning.jpg";
import { openWhatsApp, getWhatsAppUrl } from "@/lib/whatsapp";
import {
  ShieldCheck, Clock, Sparkles, Users, Star, CheckCircle2, ArrowRight,
  Home, Building2, Sofa, Brush, Phone, MapPin
} from "lucide-react";

const services = [
  { icon: Home, title: "Regular Cleaning", desc: "Weekly or fortnightly home cleaning to keep your space spotless." },
  { icon: Sparkles, title: "Deep Cleaning", desc: "Thorough top-to-bottom cleaning for a truly fresh start." },
  { icon: Sofa, title: "End of Tenancy", desc: "Get your deposit back with our detailed move-out clean." },
  { icon: Building2, title: "Office Cleaning", desc: "Professional workspace cleaning for productive environments." },
  { icon: Brush, title: "Carpet Cleaning", desc: "Deep extraction cleaning for fresh, stain-free carpets." },
  { icon: Sparkles, title: "One-Off Cleaning", desc: "Special occasion or seasonal deep cleans on demand." },
];

const whyUs = [
  { icon: ShieldCheck, title: "Fully Insured", desc: "Complete peace of mind with comprehensive insurance." },
  { icon: CheckCircle2, title: "Registered Company", desc: "Legally registered UK company you can trust." },
  { icon: Clock, title: "Flexible Scheduling", desc: "Book at times that suit your schedule." },
  { icon: Users, title: "Professional Team", desc: "Vetted, trained, and experienced cleaners." },
];

const packages = [
  { name: "Standard", price: "£15", unit: "/hr", features: ["Regular home cleaning", "All basic rooms", "Your own products or ours", "Weekly/fortnightly"], popular: false },
  { name: "Deep Clean", price: "£25", unit: "/hr", features: ["Intensive deep cleaning", "Appliances & fixtures", "Inside cupboards", "Professional products"], popular: true },
  { name: "End of Tenancy", price: "From £150", unit: "", features: ["Full property clean", "Oven & appliances", "Carpet treatment", "Deposit guarantee"], popular: false },
];

const reviews = [
  { name: "Sarah M.", text: "Absolutely brilliant service! My flat has never looked so clean. Highly recommend Z&S!", rating: 5 },
  { name: "James K.", text: "Professional, on time, and thorough. They've been cleaning our office weekly for months.", rating: 5 },
  { name: "Priya D.", text: "Used their end-of-tenancy service and got my full deposit back. Worth every penny!", rating: 5 },
];

const Index = () => {
  const [quote, setQuote] = useState({ name: "", phone: "", postcode: "", service: "Regular Cleaning" });

  const handleQuoteSubmit = () => {
    const msg = `Hi, I'd like a free quote for cleaning services.\n\nName: ${quote.name}\nPhone: ${quote.phone}\nPostcode: ${quote.postcode}\nService: ${quote.service}`;
    openWhatsApp(msg);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Professional cleaning service" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6 animate-fade-in">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span className="text-primary-foreground/90 text-sm font-medium">Fully Insured & Registered Company</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground mb-6 leading-tight animate-fade-in-up">
              Sparkling Clean Spaces, Every Time
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
              Professional cleaning services across Watford, Hertfordshire & Greater London. Trusted by hundreds of happy customers.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Button size="lg" className="cta-shadow text-base px-8" onClick={() => openWhatsApp("Hi, I'd like to get a free quote for your cleaning services. Please let me know the available options.")}>
                Get Free Quote <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 text-base px-8">
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Quote Bar */}
      <section className="relative z-20 -mt-12">
        <div className="container">
          <div className="bg-card rounded-2xl card-shadow p-6 md:p-8 border border-border">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Name</label>
                <input type="text" placeholder="Your name" value={quote.name} onChange={(e) => setQuote({ ...quote, name: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Phone</label>
                <input type="tel" placeholder="Phone number" value={quote.phone} onChange={(e) => setQuote({ ...quote, phone: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Postcode</label>
                <input type="text" placeholder="e.g. WD17" value={quote.postcode} onChange={(e) => setQuote({ ...quote, postcode: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm" />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Service</label>
                <select value={quote.service} onChange={(e) => setQuote({ ...quote, service: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm">
                  <option>Regular Cleaning</option>
                  <option>Deep Cleaning</option>
                  <option>End of Tenancy</option>
                  <option>Office Cleaning</option>
                  <option>Carpet Cleaning</option>
                </select>
              </div>
              <Button className="w-full cta-shadow h-[42px]" onClick={handleQuoteSubmit}>Get Free Quote</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <Section gradient>
        <SectionHeader badge="Our Services" title="Everything You Need, Professionally Cleaned" description="From regular home cleaning to specialised deep cleans, we've got every space covered." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link to="/services" key={s.title} className="group bg-card rounded-xl p-6 border border-border card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <s.icon className="w-6 h-6 text-secondary-foreground group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-heading font-bold text-lg mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <SectionHeader badge="Why Choose Us" title="Trusted by Hundreds of Happy Customers" description="We take pride in delivering exceptional cleaning services with professionalism and care." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item) => (
            <div key={item.title} className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
                <item.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing Preview */}
      <Section gradient>
        <SectionHeader badge="Pricing" title="Transparent, Affordable Pricing" description="No hidden fees. Choose the package that works for you." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {packages.map((pkg) => (
            <div key={pkg.name} className={`relative bg-card rounded-xl p-8 border ${pkg.popular ? "border-primary ring-2 ring-primary/20" : "border-border"} card-shadow`}>
              {pkg.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading font-bold text-lg mb-1">{pkg.name}</h3>
              <div className="mb-6">
                <span className="text-3xl font-extrabold">{pkg.price}</span>
                <span className="text-muted-foreground text-sm">{pkg.unit}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Link to="/pricing">
                <Button variant={pkg.popular ? "default" : "outline"} className={`w-full ${pkg.popular ? "cta-shadow" : ""}`}>
                  View Details
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* Reviews */}
      <Section>
        <SectionHeader badge="Reviews" title="What Our Customers Say" description="Real feedback from real customers across Hertfordshire and London." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {reviews.map((r) => (
            <div key={r.name} className="bg-card rounded-xl p-6 border border-border card-shadow">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{r.text}"</p>
              <p className="font-heading font-bold text-sm">{r.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Areas */}
      <Section gradient>
        <SectionHeader badge="Areas Covered" title="Serving Watford, Hertfordshire & London" />
        <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
          {["Watford", "Rickmansworth", "Bushey", "Radlett", "St Albans", "Hemel Hempstead", "Harrow", "Wembley", "Ealing", "Central London", "North London", "West London"].map((area) => (
            <span key={area} className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium card-shadow">
              <MapPin className="w-3 h-3 inline mr-1 text-primary" />{area}
            </span>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">Need Cleaning This Week?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">Get a free quote in minutes. No obligation, no hidden fees.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-base px-8" onClick={() => openWhatsApp("Hi, I need cleaning this week. Could you provide a free quote?")}>
              Get Free Quote <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <a href={getWhatsAppUrl("Hi, I'd like to chat about your cleaning services.")} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8">
                <Phone className="mr-2 w-4 h-4" /> WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
