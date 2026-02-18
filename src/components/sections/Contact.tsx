"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../animations";

const SOCIALS = [
    {
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/aly-rehman",
        icon: "devicon-linkedin-plain",
    },
    {
        name: "GitHub",
        href: "https://github.com/alirehman-x",
        icon: "devicon-github-original",
    },
    {
        name: "X (Twitter)",
        href: "https://x.com/iam9trogen",
        icon: "devicon-twitter-original",
    },
];

export function Contact() {
    return (
        <section
            id="contact"
            className="py-32 px-6 md:px-12 relative flex items-center justify-center"
        >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--card)_0%,transparent_60%)] pointer-events-none" />

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-10 text-center max-w-4xl mx-auto"
            >
                <motion.h2
                    variants={fadeInUp}
                    className="text-5xl md:text-8xl font-heading font-bold tracking-tight mb-8"
                >
                    Let&apos;s build something <br />
                    <span className="text-accent">stupidly good.</span>
                </motion.h2>

                <motion.p variants={fadeInUp} className="text-muted-foreground text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
                    Have a project? Or just want to argue about Flutter vs React?
                    I&apos;m open to remote work, freelance gigs, or just coffee.
                </motion.p>

                <motion.div
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-20"
                >
                    <a
                        href="mailto:alyyrehman@gmail.com"
                        className="px-10 py-4 rounded-full bg-foreground text-background font-bold text-lg hover:scale-105 transition-transform"
                    >
                        Email Me
                    </a>
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        className="px-10 py-4 rounded-full border border-muted/30 font-bold text-lg hover:bg-muted/10 transition-colors"
                    >
                        Download Resume
                    </a>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex justify-center gap-8">
                    {SOCIALS.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground hover:text-accent transition-colors text-3xl hover:-translate-y-1 transition-transform"
                            aria-label={social.name}
                        >
                            <i className={social.icon} />
                        </a>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
}
