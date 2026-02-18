"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { fadeInUp, staggerContainer } from "../animations";
import { cn } from "@/lib/utils";

const PROJECTS = [
    {
        id: 1,
        number: "01",
        title: "This Portfolio",
        category: "Web App",
        status: "Ship It",
        description: "You’re literally looking at it. Built to make me look cooler than I actually am. SEO-friendly, smooth transitions, some magic sprinkled in.",
        fullDescription: "A fully responsive, high-performance portfolio website built with Next.js 14 (App Router) and Tailwind CSS. Features include complex Framer Motion animations, a custom design system with bronze aesthetics, and strict type safety with TypeScript. It serves as a living laboratory for my frontend experiments.",
        tech: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
        links: { code: "https://github.com/alirehman-x" },
    },
    {
        id: 2,
        number: "02",
        title: "Crowdfunding Platform", // Shortened from "Blockchain-Based Crowdfunding Platform" for display
        category: "Blockchain / Full Stack",
        status: "Building",
        description: "People give money. People get things. Blockchain makes it look fancy and trustworthy. Smart contracts included.",
        fullDescription: "A decentralized crowdfunding solution addressing the lack of transparency in traditional platforms. Built with a Next.js frontend and a robust Spring Boot backend (Java), deployed on AWS. Integrates PostgreSQL for relational data and smart contracts for verifiable fund capability. It's technically my Final Year Project, but it's actually useful.",
        tech: ["Next.js", "Spring Boot", "AWS", "PostgreSQL", "Blockchain"],
        links: { code: "https://github.com/alirehman-x" },
    },
];

export function Projects() {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    return (
        <section id="projects" className="py-32 px-6 md:px-12 bg-muted/5">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-heading font-bold mb-20">
                        Selected <span className="text-accent">Chaos</span>
                    </motion.h2>

                    <div className="flex flex-col gap-12">
                        {PROJECTS.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={fadeInUp}
                                onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                                className={cn(
                                    "group relative grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 p-8 md:p-12 rounded-[2rem] glass border border-white/5 cursor-pointer overflow-hidden transition-all duration-500",
                                    expandedId === project.id
                                        ? "ring-1 ring-accent/50 bg-accent/5"
                                        : "hover:bg-accent/5 hover:border-accent/20 hover:-translate-y-2"
                                )}
                            >
                                {/* Content Side */}
                                <div className="flex flex-col justify-center">
                                    <div className="flex items-center gap-6 mb-6">
                                        <span className="text-6xl md:text-8xl font-heading font-black text-muted/20 group-hover:text-accent/20 transition-colors duration-500 leading-none">
                                            {project.number}
                                        </span>
                                        <div className="flex flex-col">
                                            <span className="text-accent text-sm font-bold uppercase tracking-widest mb-1">
                                                {project.category}
                                            </span>
                                            <h3 className="text-3xl md:text-5xl font-heading font-bold">
                                                {project.title}
                                            </h3>
                                        </div>
                                    </div>

                                    <p className="text-muted-foreground text-xl leading-relaxed max-w-2xl mb-6">
                                        {project.description}
                                    </p>

                                    <AnimatePresence>
                                        {expandedId === project.id && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-6 border-t border-accent/10">
                                                    <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
                                                        {project.fullDescription}
                                                    </p>
                                                    <a
                                                        href={project.links.code}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => e.stopPropagation()}
                                                        className="inline-flex items-center justify-center px-8 py-3 rounded-full text-sm font-bold border border-accent/30 hover:bg-accent hover:text-white transition-all"
                                                    >
                                                        View Code
                                                    </a>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {expandedId !== project.id && (
                                        <div className="flex items-center gap-2 text-accent font-medium mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span>Expand Details</span>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-5 h-5"><path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                        </div>
                                    )}
                                </div>

                                {/* Right Side: Status & Tech */}
                                <div className="flex flex-col items-start md:items-end justify-between gap-6 md:min-w-[200px]">
                                    <span className={cn(
                                        "px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border",
                                        project.status === "Ship It" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500" : "bg-amber-500/10 border-amber-500/20 text-amber-500"
                                    )}>
                                        {project.status}
                                    </span>

                                    <div className="flex flex-wrap gap-2 md:justify-end">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-4 py-2 rounded-full glass text-xs font-medium whitespace-nowrap">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
