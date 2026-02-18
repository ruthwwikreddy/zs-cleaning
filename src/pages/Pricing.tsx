import { Link } from "react-router-dom";
import { openWhatsApp } from "@/lib/whatsapp";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Info } from "lucide-react";
import { motion, Variants } from "framer-motion";

const packages = [
  {
    name: "Domestic Maintenance Clean",
    price: "Custom",
    unit: "",
    desc: "Perfect for regular weekly or fortnightly cleans.",
    features: ["General tidying", "Dusting & wiping", "Vacuuming & mopping", "Kitchen & bathroom clean", "Bed making"],
    popular: false,
  },
  {
    name: "Deep Clean",
    price: "Custom",
    unit: "",
    desc: "Intensive cleaning for a thorough refresh.",
    features: ["Everything in Standard", "Inside cupboards", "Appliance cleaning", "Skirting boards", "Light fittings", "Wall spot-cleaning"],
    popular: true,
  },
  {
    name: "End of Tenancy",
    price: "Custom",
    unit: "",
    desc: "Full property clean for moving out.",
    features: ["Complete deep clean", "Kitchen appliances descaled", "Bathroom descaling", "Window sills", "Deposit guarantee"],
    popular: false,
  },
];

const addOns = [
  { name: "Fridge Cleaning" },
  { name: "Inside Windows" },
  { name: "Ironing (per basket)" },
  { name: "Upholstery Cleaning" },
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

const Pricing = () => (
  <Layout>
    <Section className="pb-32">
      <SectionHeader
        badge="Pure Logic"
        title="Elite Pricing Packages"
        description="Premium care shouldn't be a luxury. We offer transparent, high-value solutions for every requirement."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24 px-4"
      >
        {packages.map((pkg) => (
          <motion.div
            key={pkg.name}
            variants={itemVariants}
            className={`relative bg-card rounded-[2.5rem] p-10 border ${pkg.popular ? "border-primary ring-4 ring-primary/5" : "border-border/50"} shadow-3xl flex flex-col transition-all duration-500 hover:-translate-y-2`}
          >
            {pkg.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary px-6 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-xl shadow-primary/20">
                Gold Standard
              </div>
            )}
            <h3 className="font-heading font-black text-2xl mb-2 tracking-tight">{pkg.name}</h3>
            <p className="text-sm font-medium text-muted-foreground mb-8 leading-relaxed italic">"{pkg.desc}"</p>
            <div className="flex items-baseline gap-2 mb-10">
              <span className="text-4xl font-black tracking-tighter uppercase">{pkg.price}</span>
            </div>
            <ul className="space-y-4 mb-12 flex-1">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-center gap-3 font-medium text-sm">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-primary" />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <Button size="lg" variant={pkg.popular ? "default" : "outline"} className={`w-full h-14 rounded-2xl font-black uppercase tracking-widest ${pkg.popular ? "shadow-xl shadow-primary/20" : ""}`} onClick={() => openWhatsApp(`Hi, I'm interested in a quote for ${pkg.name}.`)}>
              Get Free Quote
            </Button>
          </motion.div>
        ))}
      </motion.div>

      <div className="max-w-4xl mx-auto px-4">
        <SectionHeader badge="A La Carte" title="Fine-Tune Your Experience" description="Individual services to meet your exact specifications." />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {addOns.map((a) => (
            <motion.div key={a.name} variants={itemVariants} className="group bg-card border border-border/50 rounded-3xl p-6 shadow-xl hover:bg-primary transition-all duration-500 flex items-center justify-center text-center cursor-pointer" onClick={() => openWhatsApp(`Hi, I'm interested in the ${a.name} add-on.`)}>
              <span className="text-sm font-bold group-hover:text-white transition-colors duration-500">{a.name}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 flex items-start gap-6 bg-secondary/50 rounded-[2rem] p-8 border border-border/30 backdrop-blur-sm"
        >
          <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Info className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h4 className="font-heading font-black text-lg mb-2 tracking-tight text-foreground">Important Considerations</h4>
            <p className="text-sm text-muted-foreground font-medium leading-relaxed mb-4">
              Our pricing is structured to provide elite care. These estimates reflect standard conditions. For highly complex projects or unique architectural requirements, we provide bespoke evaluations to ensure the highest standards of purity.
            </p>
            <Link to="/terms" className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:underline">
              View full Terms & Cancellation Policy <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </motion.div>
      </div>
    </Section>
  </Layout>
);


export default Pricing;

