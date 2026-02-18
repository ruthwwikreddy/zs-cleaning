import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { Star } from "lucide-react";
import { motion, Variants } from "framer-motion";

const reviews = [
  { name: "Sarah Mitchell", location: "Watford", text: "Absolutely brilliant service! My flat has never looked so clean. The team was professional, punctual, and thorough. Highly recommend Z&S to anyone!", rating: 5 },
  { name: "James Kendrick", location: "Bushey", text: "We've been using Z&S for our office cleaning for 6 months now. Always reliable, always spotless. Great communication too.", rating: 5 },
  { name: "Priya Desai", location: "Harrow", text: "Used their end-of-tenancy service and got my full deposit back. They cleaned everything including the oven and carpets. Worth every penny!", rating: 5 },
  { name: "Tom Richards", location: "Rickmansworth", text: "Booked a deep clean before Christmas. The house looked absolutely incredible. Will definitely book again!", rating: 5 },
  { name: "Emma Johnson", location: "St Albans", text: "Friendly team, great attention to detail. They even cleaned behind the radiators without being asked. Love it!", rating: 5 },
  { name: "David Park", location: "Hemel Hempstead", text: "Very professional and affordable. The booking process was easy and the cleaners arrived right on time.", rating: 4 },
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
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

const Reviews = () => (
  <Layout>
    <Section className="pb-32">
      <SectionHeader
        badge="Pure Sentiments"
        title="Vox Populi: Elite Testimonials"
        description="Discover why discerning homeowners and businesses choose our unparalleled cleaning expertise."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
      >
        {reviews.map((r) => (
          <motion.div
            key={r.name}
            variants={itemVariants}
            className="group bg-card border border-border/50 rounded-[2rem] p-8 md:p-10 shadow-3xl hover:shadow-primary/5 transition-all duration-500 relative overflow-hidden"
          >
            <div className="relative z-10">
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < r.rating ? "fill-primary text-primary" : "text-border"}`} />
                ))}
              </div>
              <p className="text-lg text-foreground font-medium mb-8 leading-relaxed italic">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center font-black text-primary">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-black text-base tracking-tight">{r.name}</p>
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{r.location}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-[60px] rounded-full pointer-events-none -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors duration-500" />
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-primary/5 blur-[50px] rounded-full pointer-events-none" />
          </motion.div>
        ))}
      </motion.div>

      {/* Trust stats section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-32 max-w-4xl mx-auto text-center px-4"
      >
        <div className="bg-secondary/30 backdrop-blur-md border border-border/30 rounded-[3rem] p-12 md:p-16 relative overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            <div>
              <p className="text-5xl font-black mb-2 tracking-tighter">4.9/5</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Average Rating</p>
            </div>
            <div>
              <p className="text-5xl font-black mb-2 tracking-tighter">500+</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <p className="text-5xl font-black mb-2 tracking-tighter">100%</p>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        </div>
      </motion.div>
    </Section>
  </Layout>
);


export default Reviews;

