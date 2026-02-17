import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { Star } from "lucide-react";

const reviews = [
  { name: "Sarah Mitchell", location: "Watford", text: "Absolutely brilliant service! My flat has never looked so clean. The team was professional, punctual, and thorough. Highly recommend Z&S to anyone!", rating: 5 },
  { name: "James Kendrick", location: "Bushey", text: "We've been using Z&S for our office cleaning for 6 months now. Always reliable, always spotless. Great communication too.", rating: 5 },
  { name: "Priya Desai", location: "Harrow", text: "Used their end-of-tenancy service and got my full deposit back. They cleaned everything including the oven and carpets. Worth every penny!", rating: 5 },
  { name: "Tom Richards", location: "Rickmansworth", text: "Booked a deep clean before Christmas. The house looked absolutely incredible. Will definitely book again!", rating: 5 },
  { name: "Emma Johnson", location: "St Albans", text: "Friendly team, great attention to detail. They even cleaned behind the radiators without being asked. Love it!", rating: 5 },
  { name: "David Park", location: "Hemel Hempstead", text: "Very professional and affordable. The booking process was easy and the cleaners arrived right on time.", rating: 4 },
];

const Reviews = () => (
  <Layout>
    <Section>
      <SectionHeader
        badge="Customer Reviews"
        title="Hear From Our Happy Customers"
        description="Real reviews from real customers across Hertfordshire and London."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((r) => (
          <div key={r.name} className="bg-card border border-border rounded-xl p-6 card-shadow">
            <div className="flex gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className={`w-4 h-4 ${i < r.rating ? "fill-accent text-accent" : "text-muted"}`} />
              ))}
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">"{r.text}"</p>
            <div>
              <p className="font-heading font-bold text-sm">{r.name}</p>
              <p className="text-xs text-muted-foreground">{r.location}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  </Layout>
);

export default Reviews;
