import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import Layout from "@/components/Layout";
import { openWhatsApp, getWhatsAppUrl } from "@/lib/whatsapp";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import TestimonialsBelt from "@/components/TestimonialsBelt";
import {
  Sparkles,
  ShieldCheck,
  Clock,
  Star,
  ChevronRight,
  Phone,
  MessageCircle,
  CheckCircle2,
  Calendar,
  Zap,
  MapPin,
  ArrowRight,
  PlayCircle,
  Check,
  Home, Building2, Sofa, Brush, Users, Award, HardHat
} from "lucide-react";

const services = [
  { icon: Home, title: "Domestic Maintenance Clean", desc: "Weekly or fortnightly home cleaning to keep your space spotless.", color: "bg-blue-500/10 text-blue-600" },
  { icon: Sparkles, title: "Deep Cleaning", desc: "Thorough top-to-bottom cleaning for a truly fresh start.", color: "bg-purple-500/10 text-purple-600" },
  { icon: Sofa, title: "End of Tenancy", desc: "Get your deposit back with our detailed move-out clean.", color: "bg-amber-500/10 text-amber-600" },
  { icon: Building2, title: "Office Cleaning", desc: "Professional workspace cleaning for productive environments.", color: "bg-emerald-500/10 text-emerald-600" },
  { icon: Users, title: "Airbnb Cleaning", desc: "Meticulous turnover service for your short-term rentals.", color: "bg-pink-500/10 text-pink-600" },
  { icon: Zap, title: "One-Off Cleaning", desc: "Special occasion or seasonal deep cleans on demand.", color: "bg-indigo-500/10 text-indigo-600" },
  { icon: HardHat, title: "H.M.O & After Builders Cleaning", desc: "Specialist cleaning for HMOs and post-construction, leaving properties move-in ready.", color: "bg-slate-500/10 text-slate-600" },
];

const whyUs = [
  { icon: ShieldCheck, title: "Fully Insured", desc: "Complete peace of mind with comprehensive insurance." },
  { icon: CheckCircle2, title: "Registered Company", desc: "Legally registered UK company you can trust." },
  { icon: Clock, title: "Flexible Scheduling", desc: "Book at times that suit your schedule." },
  { icon: Users, title: "Professional Team", desc: "Vetted, trained, and experienced cleaners." },
];

const areasCovered = [
  {
    region: "Hertfordshire",
    towns: ["Watford", "Rickmansworth", "Abbots Langley", "Croxley Green", "Chorleywood", "Carpenders Park", "South Oxhey", "Borehamwood", "Bushey", "Potters Bar", "Radlett", "Shenley", "Aldenham", "South Mimms", "Hemel Hempstead", "Kings Langley", "Bedmond", "St Albans", "Bricket Wood"]
  },
  {
    region: "London & Surrounds",
    towns: ["Harrow", "Wembley", "Westminster", "North Kensington", "Queens Park", "Maida Vale", "Notting Hill", "Bayswater", "Paddington", "Camden Town", "Primrose Hill", "Finchley", "Muswell Hill"]
  },
];

const reviews = [
  { name: "Sarah M.", text: "Absolutely brilliant service! My flat has never looked so clean. Highly recommend Z&S!", rating: 5, location: "Watford" },
  { name: "James K.", text: "Professional, on time, and thorough. They've been cleaning our office weekly for months.", rating: 5, location: "Bushey" },
  { name: "Priya D.", text: "Used their end-of-tenancy service and got my full deposit back. Worth every penny!", rating: 5, location: "Harrow" },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "anticipate" }
  }
};


const Index = () => {
  const navigate = useNavigate();
  const [quote, setQuote] = useState({ name: "", phone: "", postcode: "", service: "Domestic Maintenance Clean" });
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const heroScale = useTransform(scrollY, [0, 400], [1, 1.1]);

  const handleQuoteSubmit = () => {
    const params = new URLSearchParams({
      name: quote.name,
      phone: quote.phone,
      postcode: quote.postcode,
      service: quote.service
    });
    navigate(`/contact?${params.toString()}`);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-black">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }} className="absolute inset-0">
          <img
            src="/gallery/hero.jpeg"
            alt="Professional cleaning service"
            className="w-full h-full object-cover object-[center_30%] opacity-60 brightness-75 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30" />
        </motion.div>

        <div className="container relative z-30 pt-24 pb-32 lg:py-0">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 backdrop-blur-md text-primary-foreground text-[10px] font-black uppercase tracking-[0.2em] mb-8"
              >
                <Sparkles className="w-4 h-4" />
                Trusted Cleaning in Watford & London
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white mb-8 leading-[1.05] tracking-tight"
              >
                Sparkling <span className="text-primary italic">Purity</span>, <br />
                Every Single Time.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-lg md:text-2xl text-white/70 mb-12 leading-relaxed max-w-xl"
              >
                Experience the pinnacle of professional cleaning across Watford, Hertfordshire & Greater London.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-6 relative z-50"
              >
                <Link to="/contact">
                  <Button size="lg" className="rounded-full px-10 h-16 text-lg font-black uppercase tracking-widest bg-primary hover:scale-105 active:scale-95 transition-transform shadow-[0_20px_50px_rgba(var(--primary-rgb),0.3)]">
                    Get a Free Quote <ArrowRight className="ml-3 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="rounded-full px-10 h-16 text-lg font-bold text-black border-white hover:bg-white/10 backdrop-blur-md shadow-2xl">
                    Our Services
                  </Button>
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative hidden lg:block"
            >
              {/* Floating Stat Cards */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -left-10 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
                    <Award className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-black text-xl">5.0</p>
                    <p className="text-white/60 text-xs font-bold uppercase tracking-wider">Avg Rating</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 -right-4 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-3xl shadow-2xl z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center">
                    <Users className="text-primary w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-white font-black text-xl">1000+</p>
                    <p className="text-white/60 text-xs font-bold uppercase tracking-wider">Cleans Done</p>
                  </div>
                </div>
              </motion.div>

              <div className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl">
                <img
                  src="/gallery/hero.jpeg"
                  className="w-full h-full object-cover object-[center_30%]"
                  alt="Professional cleaning"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating background gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-background to-transparent z-20" />
      </section>

      {/* Quick Quote Bar */}
      <section className="relative z-30 -mt-24 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-card/90 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl p-6 md:p-8 border border-border/50"
          >
            <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
              <h3 className="text-xl font-heading font-black tracking-tight flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" /> Get a Quote in Seconds
              </h3>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-black uppercase tracking-widest text-primary">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Response time: &lt; 1 hour
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Your Name</label>
                <input type="text" placeholder="e.g. John Doe" value={quote.name} onChange={(e) => setQuote({ ...quote, name: e.target.value })} className="w-full h-14 px-4 rounded-2xl border border-border bg-background focus:ring-2 ring-primary/20 transition-all font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Phone Number</label>
                <input type="tel" placeholder="07XXX XXXXXX" value={quote.phone} onChange={(e) => setQuote({ ...quote, phone: e.target.value })} className="w-full h-14 px-4 rounded-2xl border border-border bg-background focus:ring-2 ring-primary/20 transition-all font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Postcode</label>
                <input type="text" placeholder="e.g. WD17" value={quote.postcode} onChange={(e) => setQuote({ ...quote, postcode: e.target.value })} className="w-full h-14 px-4 rounded-2xl border border-border bg-background focus:ring-2 ring-primary/20 transition-all font-medium" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1">Service Type</label>
                <select value={quote.service} onChange={(e) => setQuote({ ...quote, service: e.target.value })} className="w-full h-14 px-4 rounded-2xl border border-border bg-background focus:ring-2 ring-primary/20 transition-all font-medium appearance-none">
                  <option>Domestic Maintenance Clean</option>
                  <option>Deep Cleaning</option>
                  <option>End of Tenancy</option>
                  <option>Office Cleaning</option>
                  <option>Airbnb Cleaning</option>
                  <option>One-Off Cleaning</option>
                </select>
              </div>
              <Button size="lg" className="h-14 rounded-2xl bg-primary font-black uppercase tracking-widest shadow-xl shadow-primary/20 w-full" onClick={handleQuoteSubmit}>
                Submit
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <Section className="pt-32">
        <SectionHeader
          badge="Our Services"
          title="Cleaning Done Right"
          description="Whether it's your home or your office, we make sure every corner sparkles."
        />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={itemVariants}>
              <Link to="/services" className="group block bg-card rounded-[2rem] p-10 border border-border/50 card-shadow hover:bg-primary transition-all duration-500 hover:-translate-y-2 h-full relative overflow-hidden">
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl ${s.color} flex items-center justify-center mb-8 group-hover:bg-white transition-colors duration-500`}>
                    <s.icon className="w-8 h-8 group-hover:text-primary transition-colors duration-500" />
                  </div>
                  <h3 className="font-heading font-black text-2xl mb-4 group-hover:text-white transition-colors duration-500 tracking-tight">{s.title}</h3>
                  <p className="text-muted-foreground group-hover:text-white/80 transition-colors duration-500 leading-relaxed font-medium">{s.desc}</p>
                </div>
                {/* Background glow on hover */}
                <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Why Choose Us */}
      <Section gradient className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
        <SectionHeader badge="Z&S Standard" title="Why We Stand Alone" description="Uncompromising quality matched with seamless technology and professional care." />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {whyUs.map((item) => (
            <motion.div key={item.title} variants={itemVariants} className="text-center group">
              <div className="w-24 h-24 rounded-[2.5rem] bg-card border border-border/50 shadow-xl shadow-primary/5 flex items-center justify-center mx-auto mb-8 group-hover:rotate-6 transition-transform duration-500">
                <item.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-heading font-black text-xl mb-4 tracking-tight">{item.title}</h3>
              <p className="text-muted-foreground font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      <Section>
        <SectionHeader badge="Where We Are" title="Areas We Cover" description="We provide professional cleaning across Hertfordshire and Greater London." />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {areasCovered.map((area) => (
            <motion.div key={area.region} variants={itemVariants} className="bg-card border border-border/50 rounded-3xl p-8 shadow-xl">
              <h3 className="font-heading font-black text-xl mb-6 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-primary" /> {area.region}
              </h3>
              <ul className="grid grid-cols-2 gap-y-3 gap-x-4">
                {area.towns.map((town) => (
                  <li key={town} className="flex items-center gap-2 text-sm font-medium text-muted-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-primary/50 flex-shrink-0" /> {town}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Reviews */}
      <Section gradient>
        <SectionHeader badge="Testimonials" title="Voted Best in London" description="Discover why Z&S is the preferred choice for discerning clients." />
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {reviews.map((r) => (
            <motion.div key={r.name} variants={itemVariants} className="bg-card rounded-3xl p-10 border border-border/50 card-shadow flex flex-col justify-between">
              <div>
                <div className="flex gap-1 mb-8">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg font-medium leading-relaxed italic mb-8">"{r.text}"</p>
              </div>
              <div className="flex items-center gap-4 border-t border-border/50 pt-8 mt-2">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-black text-primary">
                  {r.name[0]}
                </div>
                <div>
                  <p className="font-heading font-black tracking-tight">{r.name}</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{r.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* Testimonials Photo Belt */}
      <TestimonialsBelt />

      {/* Trust Badges */}
      <section className="py-20 border-t border-border/50">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
            {["Premium Quality", "Ethical Practice", "Eco-Friendly", "Fully Vetted", "Safe & Secure"].map((badge) => (
              <div key={badge} className="flex items-center gap-3 font-black uppercase tracking-[0.2em] text-[10px]">
                <ShieldCheck className="w-5 h-5 text-primary" /> {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 overflow-hidden bg-primary">
        {/* Animated background shape */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -right-[10%] w-[60%] h-[60%] border-[40px] border-white/5 rounded-full pointer-events-none"
        />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-md flex items-center justify-center mx-auto mb-10 shadow-2xl"
            >
              <Phone className="w-10 h-10 text-white" />
            </motion.div>
            <h2 className="text-4xl md:text-7xl font-heading font-black text-white mb-8 tracking-tighter leading-[1.1]">
              Ready for a <br /> Cleaner Home?
            </h2>
            <p className="text-white/80 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium">
              Join the hundreds of happy clients who trust Z&S with their space. Get in touch today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button
                size="lg"
                variant="secondary"
                className="group relative rounded-2xl px-12 h-20 text-xl font-black uppercase tracking-[0.2em] shadow-[0_20px_60px_rgba(0,0,0,0.3)] hover:scale-[1.02] transition-all overflow-hidden"
                onClick={() => navigate("/contact")}
              >
                <span className="relative z-10 flex items-center">
                  Get Free Quote <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </Button>

            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;


