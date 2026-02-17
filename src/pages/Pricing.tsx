import { Link } from "react-router-dom";
import { openWhatsApp } from "@/lib/whatsapp";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight, Info } from "lucide-react";

const packages = [
  {
    name: "Standard Clean",
    price: "£15",
    unit: "/hr",
    desc: "Perfect for regular weekly or fortnightly cleans.",
    features: ["General tidying", "Dusting & wiping", "Vacuuming & mopping", "Kitchen & bathroom clean", "Bed making"],
    popular: false,
  },
  {
    name: "Deep Clean",
    price: "£25",
    unit: "/hr",
    desc: "Intensive cleaning for a thorough refresh.",
    features: ["Everything in Standard", "Inside cupboards", "Appliance cleaning", "Skirting boards", "Light fittings", "Wall spot-cleaning"],
    popular: true,
  },
  {
    name: "End of Tenancy",
    price: "From £150",
    unit: "",
    desc: "Full property clean for moving out.",
    features: ["Complete deep clean", "Oven & hob degreasing", "Bathroom descaling", "Carpet treatment", "Window sills", "Deposit guarantee"],
    popular: false,
  },
];

const addOns = [
  { name: "Oven Cleaning", price: "£30" },
  { name: "Fridge Cleaning", price: "£15" },
  { name: "Inside Windows", price: "£25" },
  { name: "Ironing (per basket)", price: "£15" },
  { name: "Carpet Shampooing", price: "From £40" },
  { name: "Upholstery Cleaning", price: "From £30" },
];

const Pricing = () => (
  <Layout>
    <Section>
      <SectionHeader
        badge="Pricing"
        title="Simple, Transparent Pricing"
        description="No hidden fees, no surprises. Just honest, affordable cleaning."
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
        {packages.map((pkg) => (
          <div key={pkg.name} className={`relative bg-card rounded-2xl p-8 border ${pkg.popular ? "border-primary ring-2 ring-primary/20" : "border-border"} card-shadow flex flex-col`}>
            {pkg.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <h3 className="font-heading font-bold text-xl mb-1">{pkg.name}</h3>
            <p className="text-sm text-muted-foreground mb-4">{pkg.desc}</p>
            <div className="mb-6">
              <span className="text-4xl font-extrabold">{pkg.price}</span>
              <span className="text-muted-foreground">{pkg.unit}</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {pkg.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> {f}
                </li>
              ))}
            </ul>
            <Button variant={pkg.popular ? "default" : "outline"} className={`w-full ${pkg.popular ? "cta-shadow" : ""}`} onClick={() => openWhatsApp(`Hi, I'm interested in your ${pkg.name} package (${pkg.price}${pkg.unit}). Could I get a quote?`)}>
              Get Quote <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        ))}
      </div>

      <div className="max-w-3xl mx-auto">
        <SectionHeader badge="Add-Ons" title="Customise Your Clean" description="Add extra services to any package." />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {addOns.map((a) => (
            <div key={a.name} className="bg-card border border-border rounded-xl p-4 card-shadow flex items-center justify-between">
              <span className="text-sm font-medium">{a.name}</span>
              <span className="text-sm font-bold text-primary">{a.price}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 flex items-start gap-3 bg-secondary rounded-xl p-4">
          <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            All prices are estimates. Final pricing depends on property size, condition, and specific requirements. We always provide a clear quote before starting any work.
          </p>
        </div>
      </div>
    </Section>
  </Layout>
);

export default Pricing;
