import { useState } from "react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";

const categories = ["All", "Kitchens", "Bathrooms", "Carpets", "Offices", "End of Tenancy"];

const galleryItems = [
  { category: "Kitchens", before: "🍳 Before: Greasy stovetop & counters", after: "✨ After: Sparkling clean kitchen" },
  { category: "Bathrooms", before: "🚿 Before: Limescale buildup", after: "✨ After: Fresh & sanitised bathroom" },
  { category: "Carpets", before: "🟤 Before: Stained carpet", after: "✨ After: Like-new carpet fibres" },
  { category: "Offices", before: "🏢 Before: Cluttered workspace", after: "✨ After: Organised & clean office" },
  { category: "End of Tenancy", before: "🏠 Before: Move-out mess", after: "✨ After: Deposit-ready property" },
  { category: "Kitchens", before: "🍳 Before: Dirty oven", after: "✨ After: Gleaming oven interior" },
  { category: "Bathrooms", before: "🚿 Before: Mouldy tiles", after: "✨ After: Bright, mould-free tiles" },
  { category: "Carpets", before: "🟤 Before: Pet stains", after: "✨ After: Fresh, odour-free carpet" },
];

const Gallery = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <Layout>
      <Section>
        <SectionHeader
          badge="Gallery"
          title="See the Difference"
          description="Real before & after results from our cleaning projects."
        />

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                active === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {filtered.map((item, i) => (
            <div key={i} className="bg-card border border-border rounded-xl overflow-hidden card-shadow">
              <div className="grid grid-cols-2 h-48">
                <div className="bg-destructive/10 flex items-center justify-center p-4 text-center">
                  <p className="text-sm text-muted-foreground">{item.before}</p>
                </div>
                <div className="bg-secondary flex items-center justify-center p-4 text-center">
                  <p className="text-sm text-secondary-foreground font-medium">{item.after}</p>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <span className="text-sm font-medium">{item.category}</span>
                <div className="flex gap-2 text-xs">
                  <span className="text-destructive font-medium">Before</span>
                  <span className="text-muted-foreground">→</span>
                  <span className="text-primary font-medium">After</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Gallery;
