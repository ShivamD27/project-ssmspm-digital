interface Props {

    children: React.ReactNode;

}

export default function GradientHeading({

    children,

}: Props) {

    return (

        <h2

            className="

            text-5xl

            font-bold

            bg-gradient-to-r

            from-[var(--primary)]

            via-emerald-700

            to-yellow-500

            bg-clip-text

            text-transparent

        "

        >

            {children}

        </h2>

    );

}