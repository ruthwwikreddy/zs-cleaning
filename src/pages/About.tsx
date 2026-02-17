import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { ShieldCheck, Award, Heart, Users, CheckCircle2 } from "lucide-react";

const values = [
  { icon: ShieldCheck, title: "Trust & Transparency", desc: "We operate with full insurance coverage and company registration, so you always know who's in your home." },
  { icon: Award, title: "Quality First", desc: "Every clean is held to the highest standard. We don't cut corners—ever." },
  { icon: Heart, title: "Customer Care", desc: "Your satisfaction drives everything we do. We listen, adapt, and deliver." },
  { icon: Users, title: "Professional Team", desc: "Our cleaners are vetted, trained, and passionate about what they do." },
];

const About = () => (
  <Layout>
    <Section>
      <SectionHeader
        badge="About Us"
        title="More Than Just Cleaning"
        description="Z&S Cleaning Services LTD is a legally registered UK cleaning company providing residential and commercial cleaning services across Watford, Hertfordshire, and Greater London."
      />

      <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground leading-relaxed">
        <p>
          Founded with a simple mission—to provide affordable, reliable, and transparent cleaning solutions—we've grown into a trusted name in the local community. Our team of professional cleaners is fully vetted, trained, and insured to give you complete peace of mind.
        </p>
        <p>
          Whether you need a regular weekly clean, a deep move-out clean, or a one-off spruce-up, we bring the same level of care and attention to every job. We believe a clean space is a happy space, and we're here to make that happen for you.
        </p>
      </div>
    </Section>

    <Section gradient>
      <SectionHeader badge="Our Values" title="What We Stand For" />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
        {values.map((v) => (
          <div key={v.title} className="flex gap-4">
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
              <v.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-bold mb-1">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>

    <Section>
      <div className="max-w-3xl mx-auto">
        <SectionHeader badge="Credentials" title="Verified & Trusted" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { label: "Registered Company", sub: "Companies House Verified" },
            { label: "Fully Insured", sub: "Public Liability Insurance" },
            { label: "DBS Checked", sub: "All Staff Background Checked" },
          ].map((c) => (
            <div key={c.label} className="bg-card border border-border rounded-xl p-6 card-shadow">
              <CheckCircle2 className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-heading font-bold text-sm mb-1">{c.label}</h3>
              <p className="text-xs text-muted-foreground">{c.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  </Layout>
);

export default About;
