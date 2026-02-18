"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../animations";

export function Hero() {
    return (
        <section
            id="hero"
            className="relative h-screen w-full flex flex-col justify-center px-6 md:px-12 overflow-hidden"
        >
            {/* Minimal Background Element - just a subtle gradient or large text */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--accent)_0%,transparent_40%)] opacity-20 pointer-events-none" />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="max-w-5xl z-10"
            >
                <motion.p
                    variants={fadeInUp}
                    className="text-lg md:text-xl text-accent font-medium mb-6 tracking-wide uppercase"
                >
                    Hi, I&apos;m Ali&hellip; yes, I code.
                </motion.p>

                <motion.h1
                    variants={fadeInUp}
                    className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tighter mb-8 leading-[0.9]"
                >
                    FULL-STACK <br />
                    ENGINEER.
                </motion.h1>

                <motion.div variants={fadeInUp} className="max-w-2xl">
                    <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-10 text-balance">
                        Flutter-obsessed, backend-tolerant. Building scalable systems with Java because I apparently enjoy suffering for fun.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-background bg-accent rounded-full transition-transform hover:scale-105"
                        >
                            View Work
                        </a>
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-foreground border border-muted/30 rounded-full transition-colors hover:bg-muted/10"
                        >
                            Download Resume
                        </a>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 right-10 hidden md:block"
            >
                <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase rotate-90 origin-right translate-x-8">Scroll Down</span>
            </motion.div>
        </section>
    );
}
