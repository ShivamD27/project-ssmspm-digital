"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function BackToTop() {

    const [show, setShow] = useState(false);

    useEffect(() => {

        const listener = () => {

            setShow(window.scrollY > 400);

        };

        window.addEventListener("scroll", listener);

        return () => window.removeEventListener("scroll", listener);

    }, []);

    if (!show) return null;

    return (
        <button
            onClick={() =>
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                })
            }
            className="fixed bottom-8 right-8 z-50 rounded-full bg-[var(--primary)] p-4 text-white shadow-xl"
        >
            <ArrowUp size={20} />
        </button>
    );
}