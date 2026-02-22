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
    <Section className="pb-16 pt-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-widest">
              Our Story
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-black tracking-tight leading-tight">
              More Than Just <span className="text-primary italic">Cleaning</span>
            </h1>
            <div className="space-y-5 text-lg font-medium text-muted-foreground leading-relaxed">
              <p>
                Z&S Cleaning Services is a <span className="text-foreground font-black">family business at its heart</span> — founded by <span className="text-foreground font-black">Zara Joseph</span> and <span className="text-foreground font-black">Samantha Seamons</span>, two <span className="text-foreground font-black italic">proud businesswomen</span> who built this company from the ground up with a single mission: to provide <span className="text-foreground font-black italic">affordable, reliable, and transparent</span> cleaning solutions for every home and business.
              </p>
              <p>
                As a <span className="text-foreground font-black">women-owned, family-run business</span>, we bring a personal touch that larger companies simply can't match. Zara and Samantha are hands-on at every level — because to us, this isn't just a job. It's our family's name on every doorstep.
              </p>
              <p>
                Whether you need a regular weekly clean, a deep move-out clean, or a one-off spruce-up, you'll always be looked after by people who <span className="text-foreground font-black">genuinely care</span>.
              </p>
            </div>
          </motion.div>

          {/* Avatar side */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex justify-center"
          >
            {/* Glowing background blob */}
            <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full scale-90 -z-10" />
            <img
              src="/gallery/image.png"
              alt="Zara & Samantha — Z&S Cleaning Services"
              className="w-full max-w-md rounded-3xl shadow-2xl object-contain"
            />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md border border-border/40 rounded-2xl px-5 py-3 shadow-xl">
              <p className="font-black text-sm tracking-tight">Women-Owned Business 💪</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary">Registered UK Company</p>
            </div>
          </motion.div>
        </div>
      </div>
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

    {/* Social Media */}
    <Section className="pb-16">
      <div className="max-w-5xl mx-auto px-4 text-center space-y-6">
        <SectionHeader badge="Connect" title="Follow Us" />
        <div className="flex items-center justify-center gap-6">
          <a href="https://www.facebook.com/share/g/1CNXt7HmhG/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300" aria-label="Facebook">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
          </a>
          <a href="https://www.instagram.com/znscleaningservicesltd?igsh=MXZtMTVhdTIwdnNteA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300" aria-label="Instagram">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-3.205a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z" clipRule="evenodd" /></svg>
          </a>
          <a href="https://www.tiktok.com/@znscleaning25?_r=1&_t=ZN-943puUhtmdi" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300" aria-label="TikTok">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1.05-.08 6.33 6.33 0 00-6.33 6.33 6.33 6.33 0 0010.32 4.86v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" /></svg>
          </a>
        </div>
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

