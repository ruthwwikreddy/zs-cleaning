import { useState } from "react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import { Button } from "@/components/ui/button";
import { Briefcase, User, Mail, Phone, FileText, Send, CheckCircle2 } from "lucide-react";
import { openWhatsApp } from "@/lib/whatsapp";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
};

const careers = [
    {
        title: "Residential Cleaner",
        type: "Full-time / Part-time",
        location: "Watford & Surroundings",
        description: "Join our core team providing premium residential cleaning services."
    },
    {
        title: "Commercial Specialist",
        type: "Full-time",
        location: "Greater London Area",
        description: "Headed for office and commercial facility maintenance projects."
    },
    {
        title: "Team Supervisor",
        type: "Full-time",
        location: "Hertfordshire",
        description: "Leading and managing small teams to ensure our high standards are met."
    }
];

const Careers = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        position: "Residential Cleaner",
        experience: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const msg = `Hi Z&S Cleaning, I'd like to apply for a position.\n\nPosition: ${form.position}\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nExperience: ${form.experience}`;
        openWhatsApp(msg);
    };

    return (
        <Layout>
            <Section className="pb-32">
                <SectionHeader
                    badge="Join Our Force"
                    title="Build Your Career"
                    description="We are always looking for dedicated, professional, and hardworking individuals to join our growing team."
                />

                <div className="max-w-6xl mx-auto px-4">
                    {/* Job Listings */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
                    >
                        {careers.map((job) => (
                            <motion.div
                                key={job.title}
                                variants={itemVariants}
                                className="bg-card/40 backdrop-blur-xl border border-border/50 rounded-3xl p-8 hover:border-primary/50 transition-all duration-500 group"
                            >
                                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-500">
                                    <Briefcase className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-500" />
                                </div>
                                <h3 className="text-xl font-black mb-2 tracking-tight">{job.title}</h3>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4">{job.type} • {job.location}</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">{job.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
                        {/* Info Section */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 space-y-8"
                        >
                            <div className="space-y-6">
                                <h2 className="text-4xl font-black tracking-tighter leading-none">Why work with<br /><span className="text-primary">Z&S Cleaning?</span></h2>
                                <p className="text-muted-foreground text-lg">We value our employees as much as our clients. Join a culture of excellence and reap the rewards of your hard work.</p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    "Competitive Hourly Rates & Bonuses",
                                    "Flexible Working Schedules",
                                    "Comprehensive Training Provided",
                                    "Must Bring Your Own Cleaning Equipment",
                                    "A Supportive & Respectful Team Environment"
                                ].map((benefit) => (
                                    <div key={benefit} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-4 h-4 text-primary" />
                                        </div>
                                        <span className="font-bold text-sm tracking-tight">{benefit}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="p-8 bg-primary/5 rounded-[2.5rem] border border-primary/10">
                                <h4 className="font-black text-lg mb-2 italic">Please Note:</h4>
                                <p className="text-sm opacity-80 leading-relaxed">
                                    We do not provide cleaning equipment to staff. All applicants must supply their own cleaning equipment.
                                </p>
                            </div>
                        </motion.div>

                        {/* Application Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3"
                        >
                            <form onSubmit={handleSubmit} className="bg-card/80 backdrop-blur-2xl border border-border/50 rounded-[2.5rem] p-10 md:p-12 shadow-3xl space-y-8 relative overflow-hidden">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary ml-1 flex items-center gap-2">
                                            <User className="w-3 h-3" /> Full Name
                                        </label>
                                        <input
                                            required
                                            type="text"
                                            value={form.name}
                                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                                            placeholder="Your name"
                                            className="w-full px-6 py-4 rounded-2xl border border-border/50 bg-background/50 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary ml-1 flex items-center gap-2">
                                            <Mail className="w-3 h-3" /> Email Address
                                        </label>
                                        <input
                                            required
                                            type="email"
                                            value={form.email}
                                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                                            placeholder="email@example.com"
                                            className="w-full px-6 py-4 rounded-2xl border border-border/50 bg-background/50 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none font-medium"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary ml-1 flex items-center gap-2">
                                            <Phone className="w-3 h-3" /> Phone Number
                                        </label>
                                        <input
                                            required
                                            type="tel"
                                            value={form.phone}
                                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                            placeholder="07XXX XXX XXX"
                                            className="w-full px-6 py-4 rounded-2xl border border-border/50 bg-background/50 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none font-medium"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary ml-1 flex items-center gap-2">
                                            <Briefcase className="w-3 h-3" /> Position
                                        </label>
                                        <select
                                            value={form.position}
                                            onChange={(e) => setForm({ ...form, position: e.target.value })}
                                            className="w-full px-6 py-4 rounded-2xl border border-border/50 bg-background/50 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none font-bold appearance-none cursor-pointer"
                                        >
                                            {careers.map(job => (
                                                <option key={job.title} value={job.title}>{job.title}</option>
                                            ))}
                                            <option value="Other">Other / General Application</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="space-y-2 relative z-10">
                                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-primary ml-1 flex items-center gap-2">
                                        <FileText className="w-3 h-3" /> Experience & Skills
                                    </label>
                                    <textarea
                                        required
                                        rows={5}
                                        value={form.experience}
                                        onChange={(e) => setForm({ ...form, experience: e.target.value })}
                                        placeholder="Tell us about your previous cleaning experience, availability, and why you'd like to join..."
                                        className="w-full px-6 py-4 rounded-2xl border border-border/50 bg-background/50 text-sm focus:ring-2 focus:ring-primary/20 transition-all outline-none font-medium resize-none"
                                    />
                                </div>

                                <div className="space-y-4">
                                    <Button type="submit" className="w-full h-16 rounded-2xl bg-primary text-white font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 hover:scale-[1.01] transition-all relative z-10" size="lg">
                                        <Send className="mr-3 w-5 h-5" /> Submit Application
                                    </Button>
                                    <p className="text-[10px] text-center text-muted-foreground uppercase font-bold tracking-widest opacity-60">
                                        Application will be sent via WhatsApp for instant review
                                    </p>
                                </div>

                                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[100px] rounded-full -mr-32 -mt-32 pointer-events-none" />
                            </form>
                        </motion.div>
                    </div>
                </div>
            </Section>
        </Layout>
    );
};

export default Careers;
