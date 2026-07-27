import Image from "next/image";
import { Institution } from "@/data/institutions";

interface Props{
    institution:Institution
}

export default function InstitutionHero({institution}:Props){

return(

<section className="relative h-[520px] overflow-hidden">

<Image
fill
src={institution.image}
alt={institution.name}
className="object-cover"
/>

<div className="absolute inset-0 bg-black/60"/>

<div className="absolute bottom-20 left-1/2 w-full max-w-7xl -translate-x-1/2 px-6 text-white">

<p className="mb-3 text-lg">

{institution.type}

</p>

<h1 className="text-5xl font-bold">

{institution.name}

</h1>

<p className="mt-5 max-w-3xl text-lg">

{institution.description}

</p>

</div>

</section>

)

}