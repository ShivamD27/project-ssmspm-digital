"use client";

import { useMemo, useState } from "react";

import { Search } from "lucide-react";

import { INSTITUTIONS } from "@/data/institutions";

import InstitutionCard from "@/features/home/Institutions/InstitutionCard";

import Container from "@/components/common/Container";

import SectionHeading from "@/components/common/SectionHeading";

export default function InstitutionGrid() {

    const [search, setSearch] = useState("");

    const filtered = useMemo(() => {

        return INSTITUTIONS.filter((item) =>
            item.name
                .toLowerCase()
                .includes(search.toLowerCase())
        );

    }, [search]);

    return (

        <section className="py-24">

            <Container>

                <SectionHeading

                    eyebrow="Our Institutions"

                    title="Educational Units"

                    description="Explore all educational institutions managed under SSMSPM."

                />

                <div className="mx-auto mt-14 max-w-xl">

                    <div className="flex items-center rounded-full border bg-white px-5 py-4">

                        <Search className="mr-3 text-gray-500" />

                        <input

                            value={search}

                            onChange={(e) =>
                                setSearch(e.target.value)
                            }

                            placeholder="Search institution..."

                            className="w-full outline-none"

                        />

                    </div>

                </div>

                <div className="mt-24">

                    {filtered.map((institution, index) => (

                        <InstitutionCard

                            key={institution.id}

                            {...institution}

                            reverse={index % 2 !== 0}

                        />

                    ))}

                </div>

            </Container>

        </section>

    );

}