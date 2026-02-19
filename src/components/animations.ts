import type { Variants } from "framer-motion";
import { Transition } from "framer-motion";

export const springConfig: Transition = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: springConfig,
    },
};

export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

export const scaleIn: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: springConfig,
    },
};

export const slideInLeft: Variants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: springConfig,
    },
};

export const slideInRight: Variants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: springConfig,
    },
};
