"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgress() {

    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            className="fixed left-0 top-0 z-[999] h-1 bg-[var(--primary)] origin-left"
            style={{
                scaleX: scrollYProgress,
            }}
        />
    );
}