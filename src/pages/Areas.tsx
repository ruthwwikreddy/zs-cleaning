import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { MapPin, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const areas = [
  {
    region: "Hertfordshire",
    towns: ["Watford", "Rickmansworth", "Abbots Langley", "Croxley Green", "Chorleywood", "Carpenders Park", "South Oxhey", "Borehamwood", "Bushey", "Potters Bar", "Radlett", "Shenley", "Aldenham", "South Mimms", "Hemel Hempstead", "Kings Langley", "Bedmond", "St Albans", "Bricket Wood"]
  },
  {
    region: "London & Surrounds",
    towns: ["Harrow", "Wembley", "Westminster", "North Kensington", "Queens Park", "Maida Vale", "Notting Hill", "Bayswater", "Paddington", "Camden Town", "Primrose Hill", "Finchley", "Muswell Hill"]
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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Areas = () => (
  <Layout>
    <Section>
      <SectionHeader
        badge="Areas We Cover"
        title="Serving Hertfordshire & Greater London"
        description="We provide professional cleaning services across a wide area. Check if we cover your location below."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
      >
        {areas.map((area) => (
          <motion.div key={area.region} variants={itemVariants} className="bg-card border border-border rounded-xl p-6 card-shadow">
            <h3 className="font-heading font-bold text-lg mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" /> {area.region}
            </h3>
            <ul className="space-y-2">
              {area.towns.map((town) => (
                <li key={town} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> {town}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <p className="text-muted-foreground mb-2">Don't see your area listed?</p>
        <p className="text-sm text-muted-foreground">Contact us — we may still be able to help! We're expanding our coverage regularly.</p>
      </motion.div>
    </Section>
  </Layout>
);

export default Areas;

