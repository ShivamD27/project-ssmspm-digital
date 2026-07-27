"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
    ArrowRight,
    Calendar,
    GraduationCap,
    CheckCircle2,
    MapPin,
} from "lucide-react";
import { address } from "framer-motion/m";

interface InstitutionCardProps {
  slug: string;
  name: string;
  location?: string;
  address: string;
  students: number;
  established: number;
  facilities: string[];
  image: string;
  reverse?: boolean;
}

export default function InstitutionCard({
    slug,
    name,
    address,
    students,
    established,
    facilities,
    image,
    reverse = false,
}: InstitutionCardProps) {
    return (
        // <motion.div
        //     initial={{ opacity: 0, y: 70 }}
        //     whileInView={{ opacity: 1, y: 0 }}
        //     viewport={{ once: true }}
        //     transition={{
        //         duration: 0.7,
        //     }}
        //     className={`grid items-center gap-20 py-24 lg:grid-cols-2 ${
        //         reverse ? "lg:[&>*:first-child]:order-2" : ""
        //     }`}
        // >
        <Link href={`/institution/${slug}`}>
            <motion.div
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid items-center gap-20 py-24 lg:grid-cols-2 ${
                reverse ? "lg:[&>*:first-child]:order-2" : ""
                }`}
            >
            {/* IMAGE */}

            <motion.div
                whileHover={{
                    scale: 1.02,
                    rotate: -0.5,
                }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-[32px]"
            >
                <Image
                    src={image}
                    alt={name}
                    width={900}
                    height={650}
                    className="h-[500px] w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute left-6 top-6 rounded-full bg-white px-5 py-3 shadow-xl">
                    <div className="flex items-center gap-2 text-sm font-semibold">
                        <Calendar size={16} />
                        EST. {established}
                    </div>
                </div>
            </motion.div>

            {/* CONTENT */}

            <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                    delay: 0.2,
                    duration: 0.6,
                }}
            >
                <div className="mb-5 flex items-center gap-3 text-[var(--primary)]">
                    <MapPin size={18} />

                    <span>{address}</span>
                </div>

                <h2 className="text-5xl font-bold leading-tight">
                    {name}
                </h2>

                <div className="mt-8 flex items-center gap-3 text-xl font-semibold">
                    <GraduationCap />

                    {students}+ Students
                </div>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                    {facilities.map((facility) => (
                        <div
                            key={facility}
                            className="flex items-center gap-3"
                        >
                            <CheckCircle2
                                className="text-green-600"
                                size={18}
                            />

                            <span>{facility}</span>
                        </div>
                    ))}
                </div>

                <button className="group mt-12 flex items-center gap-3 text-lg font-semibold text-[var(--primary)]">
                    Explore Institution

                    <ArrowRight
                        className="transition group-hover:translate-x-2"
                        size={20}
                    />
                </button>
            </motion.div>
        </motion.div>
        </Link>
    );
}