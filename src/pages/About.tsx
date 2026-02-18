import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { ShieldCheck, Award, Heart, Users, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const values = [
  { icon: ShieldCheck, title: "Trust & Transparency", desc: "We operate with full insurance coverage and company registration, so you always know who's in your home." },
  { icon: Award, title: "Quality First", desc: "Every clean is held to the highest standard. We don't cut corners—ever." },
  { icon: Heart, title: "Customer Care", desc: "Your satisfaction drives everything we do. We listen, adapt, and deliver." },
  { icon: Users, title: "Professional Team", desc: "Our cleaners are vetted, trained, and passionate about what they do." },
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

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] as const }
  }
};

const About = () => (
  <Layout>
    <Section className="pb-32">
      <SectionHeader
        badge="Our Story"
        title="More Than Just Cleaning"
        description="Z&S Cleaning Services LTD is a legally registered UK cleaning company providing residential and commercial cleaning services across Watford, Hertfordshire, and Greater London."
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-8 text-lg font-medium text-muted-foreground leading-relaxed px-4 text-center"
      >
        <p>
          Founded by <span className="text-foreground font-black">Zara Joseph</span> and <span className="text-foreground font-black">Samantha Seamons</span> with a simple mission—to provide <span className="text-foreground font-black italic">affordable, reliable, and transparent</span> cleaning solutions—we've grown into a trusted name in the local community. Our team of professional cleaners is fully vetted, trained, and insured to give you complete peace of mind.
        </p>
        <p>
          Whether you need a regular weekly clean, a deep move-out clean, or a one-off spruce-up, we bring the same level of care and attention to every job. We believe a clean space is a happy space, and we're here to make that happen for you.
        </p>
      </motion.div>
    </Section>

    <Section className="py-24 bg-card/30">
      <SectionHeader badge="Leadership" title="Meet the Founders" />
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
        {[
          { name: "Zara Joseph", role: "Director" },
          { name: "Samantha Seamons", role: "Director" },
        ].map((founder) => (
          <motion.div
            key={founder.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center space-y-4 p-8 rounded-[2.5rem] bg-background border border-border/50 shadow-xl"
          >
            <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto text-primary font-black text-3xl">
              {founder.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <h3 className="text-2xl font-black tracking-tight">{founder.name}</h3>
              <p className="text-primary font-bold uppercase tracking-widest text-[10px]">{founder.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>

    <Section className="bg-secondary/20 relative overflow-hidden py-32">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <SectionHeader badge="Our Values" title="What We Believe In" />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto px-4"
      >
        {values.map((v) => (
          <motion.div
            key={v.title}
            variants={itemVariants}
            className="group flex gap-8 p-8 rounded-[2rem] bg-background/50 border border-border/50 hover:bg-background transition-all duration-500 shadow-xl hover:shadow-2xl"
          >
            <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-500">
              <v.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-500" />
            </div>
            <div>
              <h3 className="font-heading font-black text-xl mb-3 tracking-tight">{v.title}</h3>
              <p className="text-sm font-medium text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>

    <Section className="py-32">
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeader badge="Trust" title="Peace of Mind" />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        >
          {[
            { label: "Registered Company", sub: "Companies House Verified", icon: ShieldCheck },
            { label: "Fully Insured", sub: "Public Liability Insurance", icon: Award },
            { label: "DBS Checked", sub: "All Staff Background Checked", icon: Heart },
          ].map((c) => (
            <motion.div
              key={c.label}
              variants={itemVariants}
              className="group bg-card border border-border/50 rounded-[2.5rem] p-10 shadow-3xl hover:shadow-primary/5 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 transition-colors">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading font-black text-lg mb-2 tracking-tight">{c.label}</h3>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">{c.sub}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>

    {/* Careers CTA */}
    <Section className="pb-32">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-foreground text-background rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden group"
        >
          <div className="relative z-10 space-y-8">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-4">
              Join Our Team <br />
              <span className="text-primary italic">Of Professionals.</span>
            </h2>
            <p className="text-lg opacity-70 max-w-2xl mx-auto font-medium">
              We're always looking for friendly and hardworking people to join our family. Check our current openings and come work with us.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <a
                href="/careers"
                className="inline-flex h-16 items-center px-10 rounded-2xl bg-primary text-white font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 transition-all"
              >
                See Openings
              </a>
            </motion.div>
          </div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[150px] rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors duration-700" />
        </motion.div>
      </div>
    </Section>
  </Layout>
);


export default About;

