import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { ShieldCheck, CalendarX, AlertCircle, CheckCircle2, Info } from "lucide-react";
import { motion } from "framer-motion";

const Terms = () => {
    return (
        <Layout>
            <Section className="pb-32">
                <SectionHeader
                    badge="Agreements"
                    title="Terms & Policies"
                    description="Clear standards for a seamless experience. Our terms ensure the highest quality of service and mutual respect."
                />

                <div className="max-w-4xl mx-auto px-4 space-y-24">
                    {/* Terms and Conditions */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-16 h-16 rounded-[2rem] bg-primary/10 flex items-center justify-center">
                                <ShieldCheck className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="font-heading font-black text-4xl tracking-tight">Terms & Conditions</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                "Z&S supply all cleaning products, unless you require specialized products (additional costs may apply).",
                                "We do not bring vacuum cleaners, mops, or buckets for hygiene purposes. Please ensure they are fit for purpose.",
                                "Cordless vacuums: Please specify charging points or provide spare batteries.",
                                "We do not unblock or fix hoovers.",
                                "Access to hot water is required for all cleaning services.",
                                "For safety, we do not move or lift heavy furniture.",
                                "If you won't be in, please notify us of key locations or safe places.",
                                "Ensure you book the correct clean type to ensure full satisfaction."
                            ].map((term, i) => (
                                <div key={i} className="bg-card border border-border/50 rounded-3xl p-6 flex gap-4">
                                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                                    <p className="text-sm font-medium leading-relaxed">{term}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-secondary/50 rounded-3xl p-8 border border-border/30 flex gap-6 items-start">
                            <AlertCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                            <p className="text-sm font-bold text-muted-foreground italic">
                                Important: Booking the wrong type of clean may result in not getting full satisfaction. Please communicate any changes to Sam or Zara prior to your booking.
                            </p>
                        </div>
                    </motion.div>

                    {/* Cancellation Policy */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-16 h-16 rounded-[2rem] bg-primary/10 flex items-center justify-center">
                                <CalendarX className="w-8 h-8 text-primary" />
                            </div>
                            <h2 className="font-heading font-black text-4xl tracking-tight">Cancellation Policy</h2>
                        </div>

                        <div className="bg-card border border-border/50 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
                            <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">72+ Hours Notice</p>
                                    <p className="text-3xl font-black text-primary">No Charge</p>
                                    <p className="text-[11px] font-medium text-muted-foreground">Complete flexibility for your schedule.</p>
                                </div>
                                <div className="space-y-4 border-y md:border-y-0 md:border-x border-border/50 py-8 md:py-0 md:px-8">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">48 Hours Notice</p>
                                    <p className="text-3xl font-black text-primary">50% Charge</p>
                                    <p className="text-[11px] font-medium text-muted-foreground">Half of the service cost applied.</p>
                                </div>
                                <div className="space-y-4">
                                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Inside 24 Hours</p>
                                    <p className="text-3xl font-black text-primary">Full Charge</p>
                                    <p className="text-[11px] font-medium text-muted-foreground">100% of the service cost applied.</p>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] rounded-full -mr-32 -mt-32" />
                        </div>

                        <div className="bg-primary/5 rounded-3xl p-8 border border-primary/10 flex gap-6 items-start">
                            <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                            <div>
                                <h4 className="font-bold mb-2">Why we have this policy</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    Last-minute cancellations do not allow sufficient time to book another client, which results in a loss of income and disrupts our schedule. We appreciate your understanding and cooperation.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>
        </Layout>
    );
};

export default Terms;
