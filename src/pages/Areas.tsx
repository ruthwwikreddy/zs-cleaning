import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { MapPin, CheckCircle2 } from "lucide-react";

const areas = [
  { region: "Watford & Surrounds", towns: ["Watford", "Bushey", "Croxley Green", "Garston", "Abbots Langley", "Kings Langley"] },
  { region: "Hertfordshire", towns: ["Rickmansworth", "Radlett", "Borehamwood", "St Albans", "Hemel Hempstead", "Harpenden"] },
  { region: "North London", towns: ["Harrow", "Stanmore", "Edgware", "Barnet", "Mill Hill", "Hendon"] },
  { region: "West London", towns: ["Wembley", "Ealing", "Ruislip", "Uxbridge", "Northolt", "Greenford"] },
];

const Areas = () => (
  <Layout>
    <Section>
      <SectionHeader
        badge="Areas We Cover"
        title="Serving Hertfordshire & Greater London"
        description="We provide professional cleaning services across a wide area. Check if we cover your location below."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {areas.map((area) => (
          <div key={area.region} className="bg-card border border-border rounded-xl p-6 card-shadow">
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
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-muted-foreground mb-2">Don't see your area listed?</p>
        <p className="text-sm text-muted-foreground">Contact us — we may still be able to help! We're expanding our coverage regularly.</p>
      </div>
    </Section>
  </Layout>
);

export default Areas;
