"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../animations";

const STORY_ITEMS = [
    {
        title: "The Chaos Begins",
        content: "Started coding 3 years ago because curiosity + ADHD = inevitable chaos. Tried multiple languages, broke things, learned things, cried a bit.",
        colSpan: "md:col-span-2",
    },
    {
        title: "Why Flutter?",
        content: "It’s my ultimate distraction & productivity hack. I can build almost anything with it and still call it art. React is cool, but have you tried not crying over CSS?",
        colSpan: "md:col-span-1",
    },
    {
        title: "The Java Effect",
        content: "Why Java for backend? Because it’s powerful, safe, and I enjoy writing bugs that feel productive. It’s a Zen moment of suffering.",
        colSpan: "md:col-span-1",
    },
    {
        title: "The Goal",
        content: "Build scalable digital systems with elegant frontend experiences and secure backend logic. Also, make the internet slightly less ugly.",
        colSpan: "md:col-span-2",
    },
];

export function Story() {
    return (
        <section id="story" className="py-32 px-6 md:px-12 border-t border-muted/10">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl font-heading font-bold mb-16">
                        The <span className="text-accent underline decoration-4 underline-offset-8">Origin Story</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {STORY_ITEMS.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={fadeInUp}
                                className={`glass p-10 rounded-3xl flex flex-col justify-center gap-4 hover:border-accent/30 transition-colors ${item.colSpan}`}
                            >
                                <h3 className="text-2xl font-bold font-heading">{item.title}</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">
                                    {item.content}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
