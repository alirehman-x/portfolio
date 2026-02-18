"use client";

import { CurtainReveal } from "@/components/CurtainReveal";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

function MotionSection({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent/30 selection:text-accent">
      <CurtainReveal />
      <Navbar />

      <Hero />
      <MotionSection><Story /></MotionSection>
      <MotionSection><TechStack /></MotionSection>
      <MotionSection><Projects /></MotionSection>
      <MotionSection><Process /></MotionSection>
      <MotionSection><Contact /></MotionSection>

      <Footer />
    </main>
  );
}
