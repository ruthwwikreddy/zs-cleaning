import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "Are you insured?", a: "Yes! Z&S Cleaning Services LTD is fully insured with comprehensive public liability insurance. You can request a copy of our insurance certificate at any time." },
  { q: "Do you bring your own cleaning supplies?", a: "We can bring our own professional-grade cleaning products and equipment, or we're happy to use yours. Just let us know your preference when booking." },
  { q: "What is your cancellation policy?", a: "We require at least 24 hours' notice for cancellations. Cancellations made with less than 24 hours' notice may incur a cancellation fee." },
  { q: "What does end-of-tenancy cleaning include?", a: "Our end-of-tenancy clean covers the entire property from top to bottom: all rooms, kitchen surfaces and appliance exteriors, bathrooms, window sills/frames, and more. It's designed to meet landlord and letting agent inspection standards. Please note we do not offer oven or carpet cleaning." },
  { q: "How is pricing calculated?", a: "To ensure the best value for our clients, we provide bespoke quotes for every project. Pricing depends on the service type, property size, and specific requirements. We always provide a transparent quote via WhatsApp before starting any work—no hidden fees." },
  { q: "How do I book a service?", a: "You can book through our website contact form, call us directly, or message us on WhatsApp. We'll confirm your booking within a few hours." },
  { q: "Can I request the same cleaner each time?", a: "Absolutely! We understand the importance of consistency and trust. We'll do our best to assign the same cleaner for your regular sessions." },
  { q: "Do you offer weekend or evening appointments?", a: "Yes, we offer flexible scheduling including weekends and evenings. Just let us know your preferred time when booking." },
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
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 }
  }
};

const FAQ = () => (
  <Layout>
    <Section>
      <SectionHeader
        badge="FAQ"
        title="Frequently Asked Questions"
        description="Got questions? We've got answers. If you can't find what you're looking for, get in touch."
      />

      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-3"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} variants={itemVariants}>
                <AccordionItem value={`faq-${i}`} className="bg-card border border-border rounded-xl px-6 card-shadow">
                  <AccordionTrigger className="text-left font-heading font-semibold text-sm py-5 hover:no-underline">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-5">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </Section>
  </Layout>
);

export default FAQ;

