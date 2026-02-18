import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeader = ({ badge, title, description, center = true }: SectionHeaderProps) => (
  <div className={`mb-12 ${center ? "text-center max-w-3xl mx-auto" : ""}`}>
    {badge && (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-6 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        {badge}
      </motion.div>
    )}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-4xl md:text-5xl lg:text-6xl font-heading font-black mb-6 tracking-tight leading-[1.1]"
    >
      <span className="bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
        {title}
      </span>
    </motion.h2>
    {description && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-muted-foreground text-lg md:text-xl leading-relaxed font-medium max-w-2xl mx-auto"
      >
        {description}
      </motion.p>
    )}
  </div>
);

export default SectionHeader;

