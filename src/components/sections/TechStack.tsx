"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../animations";

const TECH_ROWS = [
    [
        { name: "Flutter", icon: "devicon-flutter-plain" },
        { name: "Next.js", icon: "devicon-nextjs-plain" },
        { name: "React", icon: "devicon-react-original" },
        { name: "Tailwind CSS", icon: "devicon-tailwindcss-original" },
    ],
    [
        { name: "Java", icon: "devicon-java-plain" },
        { name: "Spring Boot", icon: "devicon-spring-plain" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain" },
        { name: "MySQL", icon: "devicon-mysql-plain" },
        { name: "REST APIs", icon: "devicon-cplusplus-plain" }, // Using generic icon if REST specific not avail, or maybe just code icon
    ],
    [
        { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark" },
        { name: "GitHub Actions", icon: "devicon-githubactions-plain" },
        { name: "Git", icon: "devicon-git-plain" },
        { name: "Docker", icon: "devicon-docker-plain" },
    ],
];

export function TechStack() {
    return (
        <section id="stack" className="py-32 overflow-hidden relative border-t border-muted/10">
            <div className="text-center mb-16 px-6">
                <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Tech Stack</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    My weapons of choice. Modular, scalable, and occasionally frustrating.
                </p>
            </div>

            <div className="flex flex-col gap-10">
                {TECH_ROWS.map((row, rowIndex) => (
                    <div
                        key={rowIndex}
                        className="flex w-full overflow-hidden select-none group"
                        style={{
                            maskImage:
                                "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                        }}
                    >
                        <motion.div
                            className="flex gap-8 flex-nowrap min-w-full"
                            animate={{
                                x: rowIndex % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"],
                            }}
                            transition={{
                                duration: 30,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                            whileHover={{ animationPlayState: "paused" }}
                        >
                            {[...row, ...row, ...row, ...row].map((tech, i) => (
                                <div
                                    key={`${tech.name}-${i}`}
                                    className="flex items-center gap-3 px-8 py-4 rounded-full glass hover:border-accent/40 hover:bg-accent/5 transition-all duration-300 w-auto flex-shrink-0 cursor-default"
                                >
                                    <i className={`${tech.icon} text-3xl text-foreground`} />
                                    <span className="font-heading font-medium text-xl">{tech.name}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>

            {/* Load DevIcons via CDN */}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        </section>
    );
}
