interface Props {

    eyebrow: string;

    title: string;

    description: string;

}

export default function PageHero({

    eyebrow,

    title,

    description,

}: Props) {

    return (

        <section className="relative overflow-hidden bg-[var(--primary)] py-44 text-white">

            <div className="absolute inset-0 opacity-10">

                <div className="absolute left-20 top-10 h-80 w-80 rounded-full bg-white blur-3xl" />

                <div className="absolute right-20 bottom-10 h-96 w-96 rounded-full bg-white blur-3xl" />

            </div>

            <div className="relative mx-auto max-w-5xl px-6 text-center">

                <p className="mb-5 uppercase tracking-[0.4em]">

                    {eyebrow}

                </p>

                <h1 className="text-6xl font-bold">

                    {title}

                </h1>

                <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/80">

                    {description}

                </p>

            </div>

        </section>

    );

}