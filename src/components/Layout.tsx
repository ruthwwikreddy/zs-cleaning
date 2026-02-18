import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import MobileBottomNav from "./MobileBottomNav";
import { motion, useScroll, useSpring } from "framer-motion";

const Layout = ({ children }: { children: ReactNode }) => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress as any, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });



  return (
    <div className="min-h-screen flex flex-col relative overflow-x-hidden selection:bg-primary/30 selection:text-foreground">
      {/* Premium Background Elements */}
      <div className="fixed inset-0 -z-10 bg-background">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] rounded-full bg-primary/3 blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150 pointer-events-none" />
      </div>

      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      <main className="flex-1 pt-20 md:pt-24 pb-24 lg:pb-0">{children}</main>
      <Footer />
      <div className="hidden lg:block">
        <WhatsAppButton />
      </div>
      <MobileBottomNav />
    </div>
  );
};

export default Layout;

