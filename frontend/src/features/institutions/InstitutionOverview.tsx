import { Institution } from "@/data/institutions";

interface Props{
institution:Institution
}

export default function InstitutionOverview({institution}:Props){

return(

<section className="py-20">

<div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

<div>

<h2 className="mb-8 text-4xl font-bold">

Overview

</h2>

<p className="leading-8 text-gray-600">

{institution.description}

</p>

</div>

<div className="space-y-4 rounded-3xl border bg-white p-8 shadow">

<p><strong>Established :</strong> {institution.established}</p>

<p><strong>Affiliation :</strong> {institution.affiliation}</p>

<p><strong>Principal :</strong> {institution.principal}</p>

<p><strong>Students :</strong> {institution.students}</p>

<p><strong>Staff :</strong> {institution.staff}</p>

<p><strong>Contact :</strong> {institution.contact}</p>

</div>

</div>

</section>

)

}