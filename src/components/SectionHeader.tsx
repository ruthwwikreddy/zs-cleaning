interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  center?: boolean;
}

const SectionHeader = ({ badge, title, description, center = true }: SectionHeaderProps) => (
  <div className={`mb-12 ${center ? "text-center max-w-2xl mx-auto" : ""}`}>
    {badge && (
      <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-semibold uppercase tracking-wider mb-4">
        {badge}
      </span>
    )}
    <h2 className="text-3xl md:text-4xl font-extrabold mb-4">{title}</h2>
    {description && <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>}
  </div>
);

export default SectionHeader;
