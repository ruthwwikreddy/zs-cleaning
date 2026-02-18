import { Link, useLocation } from "react-router-dom";
import { Home, Sparkles, Image, MessageCircle, Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { openWhatsApp } from "@/lib/whatsapp";

const navLinks = [
    { label: "Home", path: "/", icon: Home },
    { label: "Services", path: "/services", icon: Sparkles },
    { label: "Gallery", path: "/gallery", icon: Image },
    { label: "Contact", path: "/contact", icon: MessageCircle },
];

const MobileBottomNav = () => {
    const location = useLocation();

    return (
        <div className="fixed bottom-0 left-0 right-0 z-[110] lg:hidden p-6 pb-8 pointer-events-none">
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="mx-auto max-w-[400px] bg-white/90 backdrop-blur-2xl border border-black/5 shadow-[0_20px_50px_rgba(0,0,0,0.2)] rounded-[2.5rem] p-2 flex items-center justify-between pointer-events-auto"
            >
                <div className="flex flex-1 justify-around items-center gap-1">
                    {navLinks.slice(0, 2).map((link) => {
                        const active = location.pathname === link.path;
                        const Icon = link.icon;

                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="relative"
                            >
                                <motion.div
                                    initial={false}
                                    animate={{
                                        backgroundColor: active ? "hsl(168 80% 36%)" : "transparent",
                                        color: active ? "#ffffff" : "hsl(var(--muted-foreground))",
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`flex items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-500 overflow-hidden ${active ? "shadow-lg shadow-primary/20" : ""
                                        }`}
                                >
                                    <Icon className="w-5 h-5 flex-shrink-0" />
                                    <AnimatePresence mode="popLayout">
                                        {active && (
                                            <motion.span
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -10 }}
                                                className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap"
                                            >
                                                {link.label}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>

                {/* PROMINENT CENTER ACTION */}
                <div className="px-2">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => openWhatsApp("Hi, I'd like to book a premium cleaning experience.")}
                        className="w-14 h-14 rounded-2xl bg-primary text-white flex items-center justify-center shadow-[0_15px_30px_rgba(var(--primary-rgb),0.3)] relative group overflow-hidden border-4 border-white"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/0 via-white/20 to-primary/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <Plus className="w-7 h-7 font-bold" />
                    </motion.button>
                </div>

                <div className="flex flex-1 justify-around items-center gap-1">
                    {navLinks.slice(2).map((link) => {
                        const active = location.pathname === link.path;
                        const Icon = link.icon;

                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="relative"
                            >
                                <motion.div
                                    initial={false}
                                    animate={{
                                        backgroundColor: active ? "hsl(168 80% 36%)" : "transparent",
                                        color: active ? "#ffffff" : "hsl(var(--muted-foreground))",
                                    }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`flex items-center gap-2 px-4 py-3 rounded-2xl transition-all duration-500 overflow-hidden ${active ? "shadow-lg shadow-primary/20" : ""
                                        }`}
                                >
                                    <Icon className="w-5 h-5 flex-shrink-0" />
                                    <AnimatePresence mode="popLayout">
                                        {active && (
                                            <motion.span
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -10 }}
                                                className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap"
                                            >
                                                {link.label}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            </Link>
                        );
                    })}
                </div>
            </motion.div>
        </div>
    );
};

export default MobileBottomNav;
