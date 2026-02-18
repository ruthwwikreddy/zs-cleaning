import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { CheckCircle2, XCircle, Info, Clock, Home, Utensils, Sofa, Bed, LayoutGrid, ArrowUpRight, Waves } from "lucide-react";
import { motion } from "framer-motion";

const MaintenanceClean = () => {
    const categories = [
        {
            title: "Kitchen",
            icon: Utensils,
            included: [
                "Hob wipe over (domestic scale)",
                "Countertops wiped",
                "Cupboard fronts spot clean only",
                "Sink cleaned (NO washing up unless pre-agreed)",
                "Floors cleaned",
                "Fridge front only",
                "Buffing microwave & Kettle front only",
                "Bins emptied (no overflowing bins)",
                "Cobweb removal"
            ],
            excluded: [
                "Inside cupboards, fridge, microwave, kettle",
                "White goods",
                "Windows",
                "Skirting boards",
                "Washing up"
            ]
        },
        {
            title: "Living Room",
            icon: Sofa,
            included: [
                "General dusting",
                "Floor/carpet cleaned",
                "Skirting boards dusted",
                "Puff up cushions"
            ],
            excluded: ["Windows"],
            note: "Heavily cluttered surfaces must be cleared prior to arrival to be fully dusted. Small number of items on surfaces we will pick up, dust the area and place items back."
        },
        {
            title: "Dining Room",
            icon: LayoutGrid,
            included: [
                "General dusting",
                "Floor/carpet cleaned",
                "Skirting boards dusted"
            ],
            excluded: ["Windows"],
            note: "Heavily cluttered surfaces must be cleared prior to arrival to be fully dusted."
        },
        {
            title: "Hallway & Stairs",
            icon: ArrowUpRight,
            included: [
                "Skirting boards dusted",
                "Stairs vacuumed",
                "Floors cleaned",
                "Banister wiped over",
                "Cobweb removal"
            ]
        },
        {
            title: "Bedrooms",
            icon: Bed,
            included: [
                "General dusting",
                "Floor/carpet cleaned",
                "Bedsheets neatened (items must not be on the bed)"
            ],
            excluded: ["Windows"],
            note: "Bed changes must be agreed when booking. Heavily cluttered surfaces must be cleared prior to arrival."
        },
        {
            title: "Office/Laundry/Other",
            icon: Waves,
            included: [
                "General dusting",
                "Floor/carpet cleaned",
                "Skirting boards dusted"
            ],
            excluded: ["Windows"],
            note: "Laundry room - does not include washing/drying or putting away laundry."
        }
    ];

    return (
        <Layout>
            <Section className="pb-32">
                <SectionHeader
                    badge="What's Included"
                    title="Regular Maintenance Clean"
                    description="Keep your home fresh and tidy with our consistent, high-standard regular cleaning service."
                />

                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-primary/5 rounded-[2.5rem] p-8 md:p-12 mb-20 border border-primary/10 backdrop-blur-sm relative overflow-hidden"
                    >
                        <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
                            <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                                <Info className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h3 className="font-heading font-black text-2xl mb-2">Important Information</h3>
                                <p className="text-muted-foreground font-medium leading-relaxed">
                                    A maintenance clean is for regular upkeep. Anything outside these lists is classed as a deep clean, including:
                                    internal windows, tile & grout cleaning, heavy grease or limescale, and internal appliance cleaning.
                                </p>
                                <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/20">
                                    <p className="text-sm font-black text-red-500 uppercase tracking-widest mb-1">Services Not Offered</p>
                                    <p className="text-xs font-bold text-muted-foreground">We do not offer Oven Cleaning or Carpet Cleaning services.</p>
                                </div>
                                <p className="mt-4 text-muted-foreground font-medium text-sm italic">
                                    <span className="text-primary font-bold">If a deeper clean is required, please speak to Sam or Zara prior to your booking.</span>
                                </p>
                            </div>
                        </div>
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] rounded-full -mr-32 -mt-32" />
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categories.map((cat, idx) => (
                            <motion.div
                                key={cat.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-card border border-border/50 rounded-[2rem] p-8 md:p-10 shadow-xl flex flex-col hover:shadow-primary/5 transition-all duration-500"
                            >
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <cat.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <h4 className="font-heading font-black text-xl tracking-tight">{cat.title}</h4>
                                </div>

                                <div className="space-y-6 flex-1">
                                    <div>
                                        <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-4">Included</h5>
                                        <ul className="space-y-3">
                                            {cat.included.map((item) => (
                                                <li key={item} className="flex items-start gap-3 text-sm font-medium">
                                                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {cat.excluded && (
                                        <div>
                                            <h5 className="text-[10px] font-black uppercase tracking-[0.2em] text-red-500 mb-4">Excluded</h5>
                                            <ul className="space-y-3">
                                                {cat.excluded.map((item) => (
                                                    <li key={item} className="flex items-start gap-3 text-sm font-medium text-muted-foreground/60">
                                                        <XCircle className="w-4 h-4 text-red-500/50 flex-shrink-0 mt-0.5" />
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>

                                {cat.note && (
                                    <div className="mt-8 pt-8 border-t border-border/30">
                                        <p className="text-[11px] text-muted-foreground italic leading-relaxed">
                                            {cat.note}
                                        </p>
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>
        </Layout>
    );
};

export default MaintenanceClean;
