"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
    { name: "Home", href: "#hero", sectionId: "hero" },
    { name: "Story", href: "#story", sectionId: "story" },
    { name: "Stack", href: "#stack", sectionId: "stack" },
    { name: "Projects", href: "#projects", sectionId: "projects" },
    { name: "Process", href: "#process", sectionId: "process" },
    { name: "Contact", href: "#contact", sectionId: "contact" },
];

export function Navbar() {
    const [activeSection, setActiveSection] = useState("hero");
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    // Handle scroll effect for glassmorphism
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // IntersectionObserver for active section detection
    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        NAV_ITEMS.forEach(({ sectionId }) => {
            const el = document.getElementById(sectionId);
            if (!el) return;

            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setActiveSection(sectionId);
                    }
                },
                { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
            );

            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    // Close mobile menu on resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setMobileOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    return (
        <>
            <motion.nav
                className={cn(
                    "fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 py-4 transition-all duration-300",
                    scrolled && "bg-white/5 dark:bg-black/5 backdrop-blur-xl border-b border-white/10"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
                {/* Logo */}
                <Link href="/" className="text-xl font-heading font-bold tracking-tighter z-50">
                    Ali Rehman
                </Link>

                {/* Desktop Links (Pill) */}
                <div className="hidden md:flex items-center gap-1 p-1 rounded-full bg-muted/5 border border-white/10 backdrop-blur-md">
                    {NAV_ITEMS.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="relative px-4 py-1.5 text-sm font-medium transition-colors hover:text-foreground/80"
                        >
                            {activeSection === item.sectionId && (
                                <motion.div
                                    layoutId="nav-pill"
                                    className="absolute inset-0 bg-accent rounded-full -z-10"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span
                                className={cn(
                                    "relative z-10",
                                    activeSection === item.sectionId ? "text-white" : "text-foreground"
                                )}
                            >
                                {item.name}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-4 z-50">
                    <ThemeToggle />
                    {/* Mobile Hamburger */}
                    <button
                        className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
                        onClick={() => setMobileOpen((v) => !v)}
                        aria-label={mobileOpen ? "Close menu" : "Open menu"}
                    >
                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            animate={mobileOpen ? "open" : "closed"}
                        >
                            <motion.line
                                x1="4" y1="6" x2="20" y2="6"
                                variants={{ open: { rotate: 45, y: 6 }, closed: { rotate: 0, y: 0 } }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.line
                                x1="4" y1="12" x2="20" y2="12"
                                variants={{ open: { opacity: 0 }, closed: { opacity: 1 } }}
                                transition={{ duration: 0.2 }}
                            />
                            <motion.line
                                x1="4" y1="18" x2="20" y2="18"
                                variants={{ open: { rotate: -45, y: -6 }, closed: { rotate: 0, y: 0 } }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.svg>
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Full-Screen Overlay */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center"
                    >
                        <nav className="flex flex-col items-center gap-8">
                            {NAV_ITEMS.map((item, i) => (
                                <motion.div
                                    key={item.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    transition={{ delay: i * 0.07, type: "spring", stiffness: 200, damping: 20 }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setMobileOpen(false)}
                                        className={cn(
                                            "text-4xl font-heading font-bold tracking-tight transition-colors",
                                            activeSection === item.sectionId ? "text-accent" : "text-foreground hover:text-accent"
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
