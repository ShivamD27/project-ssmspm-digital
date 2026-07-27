import Link from "next/link";

interface Props {

    href: string;

    children: React.ReactNode;

}

export default function PrimaryButton({

    href,

    children,

}: Props) {

    return (

        <Link

            href={href}

            className="

            inline-flex

            items-center

            rounded-full

            bg-[var(--primary)]

            px-8

            py-4

            font-semibold

            text-white

            transition-all

            duration-300

            hover:scale-105

            hover:shadow-2xl

            hover:bg-emerald-800

            active:scale-95

        "

        >

            {children}

        </Link>

    );

}