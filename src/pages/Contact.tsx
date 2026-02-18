import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { openWhatsApp, getWhatsAppUrl } from "@/lib/whatsapp";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const Contact = () => {
  const location = useLocation();
  const [form, setForm] = useState({ name: "", email: "", phone: "", postcode: "", address: "", service: "Domestic Maintenance Clean", message: "" });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const name = params.get("name");
    const phone = params.get("phone");
    const postcode = params.get("postcode");
    const service = params.get("service");

    if (name || phone || postcode || service) {
      setForm(prev => ({
        ...prev,
        name: name || prev.name,
        phone: phone || prev.phone,
        postcode: postcode || prev.postcode,
        service: service || prev.service,
      }));
    }
  }, [location.search]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hi, I'd like to get in touch about your cleaning services.\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nPostcode: ${form.postcode}\nAddress: ${form.address}\nService: ${form.service}\nMessage: ${form.message}`;
    openWhatsApp(msg);
  };

  return (
    <Layout>
      <Section className="pb-32">
        <SectionHeader
          badge="Get In Touch"
          title="Contact Us"
          description="Ready for a sparkling clean? Send us a message for a free quote."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-card/80 backdrop-blur-2xl border border-border/50 rounded-[2.5rem] p-10 md:p-12 shadow-3xl space-y-8 relative overflow-hidden">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary ml-1">Your Name</label>
                  <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full px-6 py-4 rounded-2xl border border-border/50 bg-background/50 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary ml-1">Email Address</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="w-full px-6 py-4 rounded-2xl border border-border/50 bg-background/50 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none font-medium" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary ml-1">Phone Number</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="07XXX XXX XXX" className="w-full px-6 py-4 rounded-2xl border border-border/50 bg-background/50 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none font-medium" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary ml-1">Postcode</label>
                  <input required type="text" value={form.postcode} onChange={(e) => setForm({ ...form, postcode: e.target.value })} placeholder="e.g. WD17" className="w-full px-6 py-4 rounded-2xl border border-border/50 bg-background/50 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none font-medium" />
                </div>
              </div>
              <div className="space-y-2 relative z-10">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary ml-1">Full Address</label>
                <input required type="text" value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} placeholder="Your full home or office address" className="w-full px-6 py-4 rounded-2xl border border-border/50 bg-background/50 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none font-medium" />
              </div>
              <div className="space-y-2 relative z-10">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary ml-1">Service Type</label>
                <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full px-6 py-4 rounded-2xl border border-border/50 bg-background/50 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none font-bold appearance-none cursor-pointer">
                  <option>Domestic Maintenance Clean</option>
                  <option>Regular Cleaning</option>
                  <option>Deep Cleaning</option>
                  <option>End of Tenancy</option>
                  <option>Office Cleaning</option>
                  <option>Airbnb Cleaning</option>
                  <option>One-Off Cleaning</option>
                </select>
              </div>
              <div className="space-y-2 relative z-10">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary ml-1">How can we help?</label>
                <textarea rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about what you need cleaned..." className="w-full px-6 py-4 rounded-2xl border border-border/50 bg-background/50 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none font-medium resize-none" />
              </div>
              <Button type="submit" className="w-full h-16 rounded-2xl bg-primary text-white font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 hover:scale-[1.01] transition-all relative z-10" size="lg">
                <Send className="mr-3 w-5 h-5" /> Send Message
              </Button>

              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none" />
            </form>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {[
              { icon: Phone, label: "Call Us", value: "+44 7591 055763", href: "tel:+447591055763" },
              { icon: Mail, label: "Email Us", value: "info@zscleaningservices.co.uk", href: "mailto:info@zscleaningservices.co.uk" },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat with Sam or Zara", href: getWhatsAppUrl("Hi, I'd like to chat about your cleaning services.") },
              { icon: MapPin, label: "Our Location", value: "Watford & Surroundings", href: undefined },
            ].map((item) => (
              <motion.div
                key={item.label}
                variants={itemVariants}
                className="group bg-card border border-border/50 rounded-[2rem] p-6 shadow-xl hover:shadow-2xl transition-all duration-500 flex items-center gap-6"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-500">
                  <item.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-heading font-black text-lg hover:text-primary transition-colors tracking-tight">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-heading font-black text-lg tracking-tight">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>
    </Layout>
  );
};


export default Contact;

