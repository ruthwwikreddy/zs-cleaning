import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Home, Sparkles, Sofa, Building2, Brush, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Regular Cleaning",
    desc: "Keep your home consistently clean with our weekly or fortnightly service.",
    included: ["Dusting & wiping surfaces", "Vacuuming & mopping floors", "Kitchen & bathroom cleaning", "Bed making & tidying"],
    duration: "2-4 hours",
    addOns: ["Ironing", "Fridge cleaning", "Oven cleaning"],
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    desc: "An intensive, thorough clean that reaches every corner of your home.",
    included: ["All regular cleaning tasks", "Inside cupboards & drawers", "Appliance deep clean", "Skirting boards & light fittings"],
    duration: "4-8 hours",
    addOns: ["Carpet shampooing", "Window cleaning", "Wall washing"],
  },
  {
    icon: Sofa,
    title: "End of Tenancy",
    desc: "Get your full deposit back with our comprehensive move-out clean.",
    included: ["Full property deep clean", "Oven & hob degreasing", "Bathroom descaling", "Carpet treatment included"],
    duration: "6-10 hours",
    addOns: ["Professional carpet clean", "Window cleaning", "Garden tidying"],
  },
  {
    icon: Building2,
    title: "Office Cleaning",
    desc: "Maintain a productive workspace with professional commercial cleaning.",
    included: ["Desk & surface sanitisation", "Floor cleaning", "Kitchen & breakroom", "Bathroom restocking"],
    duration: "Custom",
    addOns: ["Window cleaning", "Carpet cleaning", "Post-event clean"],
  },
  {
    icon: Brush,
    title: "Carpet Cleaning",
    desc: "Deep extraction cleaning to remove stains, allergens, and odours.",
    included: ["Hot water extraction", "Stain pre-treatment", "Deodorising", "Fast drying methods"],
    duration: "1-3 hours",
    addOns: ["Upholstery cleaning", "Rug cleaning", "Stain protection"],
  },
];

const Services = () => (
  <Layout>
    <Section>
      <SectionHeader
        badge="Our Services"
        title="Professional Cleaning For Every Need"
        description="From regular home maintenance to specialist deep cleans, we deliver exceptional results every time."
      />

      <div className="space-y-8 max-w-4xl mx-auto">
        {services.map((s, i) => (
          <div key={s.title} className="bg-card border border-border rounded-2xl p-8 card-shadow">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                    <s.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl">{s.title}</h3>
                    <span className="text-xs text-muted-foreground">Duration: {s.duration}</span>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
                <h4 className="font-heading font-semibold text-sm mb-2">What's Included:</h4>
                <ul className="space-y-2 mb-4">
                  {s.included.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-64 flex flex-col justify-between">
                <div className="mb-4">
                  <h4 className="font-heading font-semibold text-sm mb-2">Available Add-Ons:</h4>
                  <ul className="space-y-1">
                    {s.addOns.map((a) => (
                      <li key={a} className="text-sm text-muted-foreground">+ {a}</li>
                    ))}
                  </ul>
                </div>
                <Link to="/contact">
                  <Button className="w-full cta-shadow">
                    Book This Service <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  </Layout>
);

export default Services;
