import { Link } from "react-router-dom";
import { openWhatsApp } from "@/lib/whatsapp";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Home, Sparkles, Sofa, Building2, Brush, ArrowRight, CheckCircle2, Clock } from "lucide-react";

import { motion, Variants } from "framer-motion";

const services = [
  {
    icon: Home,
    title: "Domestic Maintenance Clean",
    desc: "Keep your home consistently clean with our weekly or fortnightly service.",
    included: ["Dusting & wiping surfaces", "Vacuuming & mopping floors", "Kitchen & bathroom cleaning", "Bed making & tidying"],
    addOns: ["Ironing", "Fridge cleaning", "Skirting boards"],
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    desc: "An intensive, thorough clean that reaches every corner of your home.",
    included: ["All regular cleaning tasks", "Inside cupboards & drawers", "Appliance deep clean", "Skirting boards & light fittings"],
    addOns: ["Window cleaning", "Wall washing", "Inside fridge"],
  },
  {
    icon: Sofa,
    title: "End of Tenancy",
    desc: "Get your full deposit back with our comprehensive move-out clean.",
    included: ["Full property deep clean", "Kitchen appliances descaled", "Bathroom descaling", "Window sills & frames"],
    addOns: ["Professional deep clean", "Window cleaning", "Wall spot-cleaning"],
  },
  {
    icon: Building2,
    title: "Office Cleaning",
    desc: "Maintain a productive workspace with professional commercial cleaning.",
    included: ["Desk & surface sanitisation", "Floor cleaning", "Kitchen & breakroom", "Bathroom restocking"],
    addOns: ["Window cleaning", "Waste management", "Post-event clean"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const Services = () => (
  <Layout>
    <Section className="pb-32">
      <SectionHeader
        badge="Our Services"
        title="Cleaning Solutions"
        description="Friendly, reliable, and professional cleaning for every type of property."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="space-y-12 max-w-5xl mx-auto px-4"
      >
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            variants={itemVariants}
            className="group bg-card border border-border/50 rounded-[2.5rem] p-10 md:p-12 shadow-2xl hover:shadow-primary/5 transition-all duration-500 relative overflow-hidden"
          >
            <div className="flex flex-col lg:flex-row gap-12 relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                    <s.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="font-heading font-black text-3xl tracking-tight mb-1">{s.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed font-medium">{s.desc}</p>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Inclusions</h4>
                    <ul className="space-y-3">
                      {s.included.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm font-medium">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Popular Add-Ons</h4>
                    <ul className="space-y-3">
                      {s.addOns.map((a) => (
                        <li key={a} className="flex items-center gap-3 text-sm font-medium text-muted-foreground/80">
                          <div className="w-1.5 h-1.5 rounded-full bg-border" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="lg:w-72 flex flex-col justify-end">
                <div className="bg-secondary/50 rounded-3xl p-8 mb-6 border border-border/30">
                  <p className="text-xs font-bold text-center text-muted-foreground mb-4">Request a Quote</p>
                  <p className="text-3xl font-black text-center mb-6 uppercase">Free Quote</p>
                  <Button
                    className="w-full h-14 rounded-2xl bg-primary font-black uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] transition-transform"
                    onClick={() => openWhatsApp(`Hi, I'd like a quote for your ${s.title} service.`)}
                  >
                    Request Quote
                  </Button>
                </div>
                {s.title === "Domestic Maintenance Clean" && (
                  <Link to="/maintenance-clean" className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:opacity-80 transition-opacity mb-4">
                    View Detailed Checklist <ArrowRight className="w-3 h-3" />
                  </Link>
                )}
                <p className="text-[10px] text-center text-muted-foreground font-medium italic">No obligation, cancel anytime.</p>
              </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full pointer-events-none -mr-32 -mt-32" />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  </Layout>
);


export default Services;

