import { Institution } from "@/data/institutions";

interface Props{
institution:Institution
}

export default function Facilities({institution}:Props){

return(

<section className="py-20 bg-gray-50">

<div className="mx-auto max-w-7xl px-6">

<h2 className="mb-12 text-4xl font-bold">

Facilities

</h2>

<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

{institution.facilities.map((facility)=>(

<div
key={facility}
className="rounded-2xl border bg-white p-6 transition hover:-translate-y-2 hover:shadow-lg"
>

{facility}

</div>

))}

</div>

</div>

</section>

)

}