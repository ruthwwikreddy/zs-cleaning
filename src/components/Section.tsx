import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  gradient?: boolean;
}

const Section = ({ children, className = "", id, gradient }: SectionProps) => (
  <section id={id} className={`py-12 md:py-16 ${gradient ? "section-gradient" : ""} ${className}`}>
    <motion.div
      className="container"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  </section>
);

export default Section;

