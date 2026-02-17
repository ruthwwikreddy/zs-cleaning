import { useState } from "react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "Regular Cleaning", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", service: "Regular Cleaning", message: "" });
  };

  return (
    <Layout>
      <Section>
        <SectionHeader
          badge="Contact Us"
          title="Get In Touch"
          description="Ready for a sparkling clean? Get in touch for a free, no-obligation quote."
        />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 card-shadow space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Name *</label>
                  <input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Email *</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm" />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Phone</label>
                  <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="07XXX XXX XXX" className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-1.5 block">Service</label>
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm">
                    <option>Regular Cleaning</option>
                    <option>Deep Cleaning</option>
                    <option>End of Tenancy</option>
                    <option>Office Cleaning</option>
                    <option>Carpet Cleaning</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Message *</label>
                <textarea required rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your cleaning needs..." className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm resize-none" />
              </div>
              <Button type="submit" className="w-full cta-shadow" size="lg">
                <Send className="mr-2 w-4 h-4" /> Send Message
              </Button>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {[
              { icon: Phone, label: "Call Us", value: "07XXX XXX XXX", href: "tel:+447000000000" },
              { icon: Mail, label: "Email Us", value: "info@zscleaningservices.co.uk", href: "mailto:info@zscleaningservices.co.uk" },
              { icon: MessageCircle, label: "WhatsApp", value: "Chat with us instantly", href: "https://wa.me/447000000000" },
              { icon: MapPin, label: "Location", value: "Watford, Hertfordshire", href: undefined },
            ].map((item) => (
              <div key={item.label} className="bg-card border border-border rounded-xl p-5 card-shadow flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="font-medium text-sm hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium text-sm">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Contact;
