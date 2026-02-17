import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  gradient?: boolean;
}

const Section = ({ children, className = "", id, gradient }: SectionProps) => (
  <section id={id} className={`py-16 md:py-24 ${gradient ? "section-gradient" : ""} ${className}`}>
    <div className="container">{children}</div>
  </section>
);

export default Section;
