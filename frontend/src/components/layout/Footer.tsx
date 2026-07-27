import Link from "next/link";
import { SITE } from "@/data/site";
import { NAVIGATION } from "@/data/navigation";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-3">

        <div>
          <h2 className="text-2xl font-bold">
            {SITE.shortName}
          </h2>

          <p className="mt-5 text-gray-600 leading-7">
            {SITE.name}
          </p>
        </div>

        <div>

          <h3 className="font-semibold">
            Quick Links
          </h3>

          <div className="mt-5 flex flex-col gap-3">

            {NAVIGATION.map((item)=>(
              <Link
                key={item.title}
                href={item.href}
              >
                {item.title}
              </Link>
            ))}

          </div>

        </div>

        <div>

          <h3 className="font-semibold">
            Contact
          </h3>

          <p className="mt-5">
            {SITE.address}
          </p>

          <p className="mt-3">
            {SITE.phone}
          </p>

          <p className="mt-3">
            {SITE.email}
          </p>

        </div>

      </div>

      <div className="border-t py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} {SITE.shortName}. All Rights Reserved.
      </div>
    </footer>
  );
}