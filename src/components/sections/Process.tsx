"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../animations";

const PROCESS_STEPS = [
    {
        number: "01",
        title: "Research",
        desc: "Understand the problem space, user needs, and technical constraints before writing a single line of code.",
    },
    {
        number: "02",
        title: "Architect",
        desc: "Plan scalable data structures, component hierarchies, and user flows to ensure a robust foundation.",
    },
    {
        number: "03",
        title: "Build",
        desc: "Write clean, self-documenting code with a focus on performance, accessibility, and type safety.",
    },
    {
        number: "04",
        title: "Ship",
        desc: "Deploy with confidence using CI/CD pipelines, monitor for issues, and iterate based on real feedback.",
    },
];

export function Process() {
    return (
        <section id="process" className="py-24 px-6 md:px-12 bg-muted/5">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    <motion.div variants={fadeInUp} className="md:col-span-2 lg:col-span-4 mb-8 text-center">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">The Process</h2>
                        <div className="w-20 h-1 bg-accent rounded-full mx-auto" />
                    </motion.div>

                    {PROCESS_STEPS.map((step, index) => (
                        <motion.div
                            key={step.number}
                            variants={fadeInUp}
                            className="group relative p-8 rounded-3xl border border-white/5 bg-background hover:bg-white/5 hover:border-accent/20 transition-all duration-300"
                        >
                            <div className="text-6xl font-heading font-bold text-muted/10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br group-hover:from-accent group-hover:to-purple-500 transition-all duration-300 mb-6">
                                {step.number}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">
                                {step.desc}
                            </p>

                            <div className="absolute bottom-4 right-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                                →
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
