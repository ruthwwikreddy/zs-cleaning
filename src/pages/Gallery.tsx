import { useState } from "react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import TestimonialsBelt from "@/components/TestimonialsBelt";

const categories = ["All", "Kitchens", "Bathrooms", "Offices", "End of Tenancy", "Decors"];

const galleryItems = [
  {
    category: "Bathrooms",
    before: "Internal shower drain buildup",
    after: "Deep cleaned & clear",
    imageBefore: "/gallery/beforeafter/shower1/before.jpg",
    imageAfter: "/gallery/beforeafter/shower1/after.jpg"
  },
  {
    category: "Bathrooms",
    before: "Grime and soap scum buildup",
    after: "Clear glass and shining tiles",
    imageBefore: "/gallery/beforeafter/shower2/before.png",
    imageAfter: "/gallery/beforeafter/shower2/after.png"
  },
  {
    category: "Bathrooms",
    before: "Stained bathroom surfaces",
    after: "Restored to original shine",
    imageBefore: "/gallery/beforeafter/bathrrom2/before.jpg",
    imageAfter: "/gallery/beforeafter/bathrrom2/after.jpg"
  },
  {
    category: "Bathrooms",
    before: "Water spots and fogging",
    after: "Crystal clear reflection",
    imageBefore: "/gallery/beforeafter/mirror/before.jpg",
    imageAfter: "/gallery/beforeafter/mirror/after.jpg"
  },
  {
    category: "Kitchens",
    before: "Baked-on grease and carbon",
    after: "Like-new oven interior",
    imageBefore: "/gallery/beforeafter/oven/img-24.jpg",
    imageAfter: "/gallery/beforeafter/oven/img-26.jpg"
  },
  {
    category: "Kitchens",
    before: "Limescale and water marks",
    after: "Polished chrome finish",
    imageBefore: "/gallery/beforeafter/tap/img-21.jpg",
    imageAfter: "/gallery/beforeafter/tap/img-22.jpg"
  },
  {
    category: "Kitchens",
    before: "Dusty and disorganized drawers",
    after: "Sanitized and organized",
    imageBefore: "/gallery/beforeafter/draws/before.jpg",
    imageAfter: "/gallery/beforeafter/draws/after.jpg"
  },
  {
    category: "Offices",
    before: "Fingerprints and smudges",
    after: "Disinfected and clean",
    imageBefore: "/gallery/beforeafter/switch/img-23.jpg",
    imageAfter: "/gallery/beforeafter/switch/after.jpg"
  },
  {
    category: "Bathrooms",
    before: "Professional bathroom detailing",
    after: "All-round sparkling finish",
    image: "/gallery/beforeafter/bathroom1/img-5.jpg"
  },
  {
    category: "Bathrooms",
    before: "Deep cleaning for toilet area",
    after: "Sanitized and brilliant white",
    image: "/gallery/beforeafter/bathroom3/img-7.jpg"
  },
  {
    category: "Bathrooms",
    before: "Bathtub restoration",
    after: "Remove stains and grime",
    image: "/gallery/beforeafter/bath/img-3.jpg"
  },
  {
    category: "Bathrooms",
    before: "Sink basin deep clean",
    after: "Sparkling and sanitized",
    image: "/gallery/beforeafter/sink1/img-2.jpg"
  },
  {
    category: "Kitchens",
    before: "Stained kitchen sink",
    after: "Polished stainless steel",
    image: "/gallery/beforeafter/sink/img-20.jpg"
  },
  {
    category: "Kitchens",
    before: "Cooking residue on stovetop",
    after: "Gleaming glass finish",
    image: "/gallery/beforeafter/stove/img-16.jpg"
  },
  {
    category: "Offices",
    before: "Workspace dust and marks",
    after: "Polished professional desk",
    image: "/gallery/beforeafter/table/img-15.jpg"
  },
  {
    category: "End of Tenancy",
    before: "Heavily used flooring",
    after: "Deep-cleaned results",
    image: "/gallery/beforeafter/floor/img-25.jpg"
  },
  {
    category: "End of Tenancy",
    before: "End of lease residue",
    after: "Handover ready finish",
    image: "/gallery/beforeafter/unkown/img-10.jpg"
  },
  {
    category: "Decors",
    before: "Office decor dusting",
    after: "Pristine display area",
    image: "/gallery/beforeafter/decors/img-1.jpg"
  },
  {
    category: "Decors",
    before: "Neglected shelf surfaces",
    after: "Dust-free environment",
    image: "/gallery/beforeafter/decors/img-6.jpg"
  },
  {
    category: "Decors",
    before: "General surface maintenance",
    after: "Polished and fresh workspace",
    image: "/gallery/beforeafter/decors/img-9.jpg"
  },
  {
    category: "Decors",
    before: "Wall and shelf detailing",
    after: "Complete dust removal",
    image: "/gallery/beforeafter/decors/img-13.jpg"
  },
  {
    category: "Decors",
    before: "Decorative item cleaning",
    after: "Smudge-free accessories",
    image: "/gallery/beforeafter/decors/img-17.jpg"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Gallery = () => {
  const [active, setActive] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const filtered = active === "All" ? galleryItems : galleryItems.filter((g) => g.category === active);

  return (
    <Layout>
      <Section>
        <SectionHeader
          badge="Our Work"
          title="See the Difference"
          description="Real results from our cleaning projects. No filters, just hard work."
        />

        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${active === cat
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div
          layout
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="columns-1 sm:columns-2 lg:columns-3 gap-8 max-w-7xl mx-auto space-y-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.div
                key={`${item.category}-${i}`}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="break-inside-avoid mb-8 bg-card border border-border rounded-2xl overflow-hidden card-shadow group cursor-pointer"
                onClick={() => {
                  if (item.image) setSelectedImage(item.image);
                }}
              >
                {item.image ? (
                  <div className="relative border-b border-border overflow-hidden bg-muted">
                    <img
                      src={item.image}
                      alt={item.category}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-bold shadow-xl">View Large</span>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-2 relative border-b border-border">
                    <div
                      className="relative group/before overflow-hidden bg-destructive/5 flex items-center justify-center cursor-zoom-in"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (item.imageBefore) setSelectedImage(item.imageBefore);
                      }}
                    >
                      {item.imageBefore ? (
                        <img
                          src={item.imageBefore}
                          alt="Before"
                          className="w-full h-auto object-cover transition-transform duration-500 group-hover/before:scale-110"
                        />
                      ) : (
                        <p className="text-[10px] text-muted-foreground p-4 text-center">{item.before}</p>
                      )}
                      <div className="absolute top-2 left-2 bg-black/50 backdrop-blur-md text-[10px] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider z-10">Before</div>
                    </div>
                    <div
                      className="relative group/after overflow-hidden bg-primary/5 flex items-center justify-center cursor-zoom-in"
                      onClick={(e) => {
                        e.stopPropagation();
                        if (item.imageAfter) setSelectedImage(item.imageAfter);
                      }}
                    >
                      {item.imageAfter ? (
                        <img
                          src={item.imageAfter}
                          alt="After"
                          className="w-full h-auto object-cover transition-transform duration-500 group-hover/after:scale-110"
                        />
                      ) : (
                        <p className="text-[10px] text-secondary-foreground font-medium p-4 text-center">{item.after}</p>
                      )}
                      <div className="absolute top-2 right-2 bg-primary text-[10px] text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider shadow-lg z-10">After</div>
                    </div>
                  </div>
                )}
                <div className="p-5 bg-white">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-primary">{item.category}</span>
                  </div>
                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed font-medium">
                    {item.after ? item.after.replace("✨ After: ", "") : item.before}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      {/* Testimonials Belt */}
      <TestimonialsBelt />

      {/* Fullscreen Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-7xl max-h-screen w-full h-full flex items-center justify-center"
            >
              <img
                src={selectedImage}
                alt="Fullscreen view"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
                className="absolute top-[-40px] right-0 text-white/70 hover:text-white transition-colors flex items-center gap-2 font-bold"
              >
                <span className="text-xs uppercase tracking-widest">Close</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;

