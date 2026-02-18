"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function CurtainReveal() {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        // Lock scroll
        document.body.style.overflow = "hidden";

        const timer = setTimeout(() => {
            setIsVisible(false);
            // Unlock scroll after animation
            document.body.style.overflow = "unset";
        }, 2000); // 2s total duration (reveal + wait)

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = "unset";
        };
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <div className="fixed inset-0 z-[100] flex flex-col">
                    {/* Top Panel */}
                    <motion.div
                        initial={{ y: 0 }}
                        exit={{ y: "-100%" }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.5, // Wait for name reveal
                        }}
                        className="flex-1 bg-background border-b border-muted/10 relative z-20"
                    />

                    {/* Name Reveal - Centered & Fixed */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="fixed inset-0 z-30 flex items-center justify-center pointer-events-none"
                    >
                        <h1 className="text-4xl md:text-6xl font-heading font-bold tracking-tighter text-foreground">
                            ALI REHMAN
                        </h1>
                    </motion.div>

                    {/* Bottom Panel */}
                    <motion.div
                        initial={{ y: 0 }}
                        exit={{ y: "100%" }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 20,
                            delay: 0.5,
                        }}
                        className="flex-1 bg-background border-t border-muted/10 relative z-20"
                    />
                </div>
            )}
        </AnimatePresence>
    );
}
