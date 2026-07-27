import { Institution } from "@/data/institutions";

interface Props{
institution:Institution
}

export default function ContactCard({institution}:Props){

return(

<section className="py-20">

<div className="mx-auto max-w-7xl rounded-3xl bg-[var(--primary)] p-10 text-white">

<h2 className="mb-8 text-4xl font-bold">

Contact

</h2>

<p>{institution.address}</p>

<p>{institution.contact}</p>

<p>{institution.email}</p>

</div>

</section>

)

}