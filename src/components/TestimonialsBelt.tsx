import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";

const testimonialImages = [
    "/gallery/testimonials/Screenshot 2026-02-19 at 10.02.48.png",
    "/gallery/testimonials/Screenshot 2026-02-19 at 10.02.54.png",
    "/gallery/testimonials/Screenshot 2026-02-19 at 10.02.59.png",
    "/gallery/testimonials/Screenshot 2026-02-19 at 10.03.05.png",
    "/gallery/testimonials/Screenshot 2026-02-19 at 10.03.28.png",
];

// Duplicate the array several times so the belt feels truly infinite
const belt = [...testimonialImages, ...testimonialImages, ...testimonialImages, ...testimonialImages];

const TestimonialsBelt = () => {
    const [lightbox, setLightbox] = useState<string | null>(null);
    const [paused, setPaused] = useState(false);

    return (
        <section className="relative py-24 overflow-hidden bg-gradient-to-b from-background via-primary/3 to-background">
            {/* Decorative background blobs */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-secondary/10 blur-[100px] rounded-full -z-10 pointer-events-none" />

            <div className="container mb-14">
                <SectionHeader
                    badge="Client Love"
                    title="What Our Clients Say"
                    description="Real reviews from real clients. See why Z&S is trusted across Watford, Hertfordshire & London."
                />
            </div>

            {/* Fade masks on the sides */}
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-56 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to right, var(--background, #fff) 0%, transparent 100%)" }}
            />
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-56 z-10 pointer-events-none"
                style={{ background: "linear-gradient(to left, var(--background, #fff) 0%, transparent 100%)" }}
            />

            {/* Scrolling belt */}
            <div
                className="relative"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                onTouchStart={() => setPaused(true)}
                onTouchEnd={() => setPaused(false)}
            >
                <div
                    className="flex gap-6 will-change-transform"
                    style={{
                        animation: `testimonialScroll 35s linear infinite`,
                        animationPlayState: paused ? "paused" : "running",
                        width: "max-content",
                    }}
                >
                    {belt.map((src, idx) => (
                        <div
                            key={idx}
                            className="flex-shrink-0 cursor-zoom-in group relative rounded-2xl overflow-hidden shadow-2xl border border-border/40"
                            style={{ width: "auto", maxWidth: "420px", minWidth: "220px" }}
                            onClick={() => setLightbox(src)}
                        >
                            <img
                                src={src}
                                alt={`Client testimonial ${(idx % testimonialImages.length) + 1}`}
                                className="w-auto h-auto max-h-[520px] object-contain block transition-transform duration-500 group-hover:scale-[1.03]"
                                draggable={false}
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <span className="bg-white/90 backdrop-blur-sm text-black px-4 py-2 rounded-full text-sm font-bold shadow-xl scale-90 group-hover:scale-100 transition-transform duration-300">
                                    View Full Size
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pause indicator */}
            {paused && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-black/60 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full backdrop-blur-md pointer-events-none">
                    ⏸ Paused — hover off to resume
                </div>
            )}

            {/* Lightbox */}
            <AnimatePresence>
                {lightbox && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-10 cursor-zoom-out"
                        onClick={() => setLightbox(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.88, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.88, opacity: 0 }}
                            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="relative max-w-3xl w-full flex flex-col items-center gap-4"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={lightbox}
                                alt="Testimonial full view"
                                className="w-full h-auto rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.6)] object-contain max-h-[85vh]"
                            />
                            <button
                                onClick={() => setLightbox(null)}
                                className="mt-2 text-white/70 hover:text-white transition-colors flex items-center gap-2 font-bold text-sm uppercase tracking-widest"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Keyframe injection */}
            <style>{`
        @keyframes testimonialScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </section>
    );
};

export default TestimonialsBelt;
