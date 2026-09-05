import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { UtensilsCrossed, Bath, Hammer, Paintbrush, Phone } from "lucide-react";
import { towns, getTown } from "@/lib/locations";
import { business } from "@/lib/business";

export function generateStaticParams() {
  return towns.map((town) => ({ town: town.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ town: string }>;
}): Promise<Metadata> {
  const { town: slug } = await params;
  const town = getTown(slug);
  if (!town) return {};

  return {
    title: `Kitchen, Bathroom & Joinery Renovations in ${town.name}`,
    description: `Renovate Design carries out kitchen, bathroom, joinery and interior design projects in ${town.name}, ${town.region}. Get a free consultation.`,
    alternates: { canonical: `/areas/${town.slug}` },
  };
}

const services = [
  {
    Icon: UtensilsCrossed,
    name: "Kitchens",
    href: "/kitchens",
    body: (town: string) =>
      `Looking for a kitchen fitter or kitchen builder in ${town}? We design and fit complete kitchens and worktop replacements, supplying and fitting a range of brands to suit your home and budget.`,
  },
  {
    Icon: Bath,
    name: "Bathrooms",
    href: "/bathrooms",
    body: (town: string) =>
      `From full rip-out-and-refit jobs to wet wall and tiled finishes, we handle complete bathroom renovations in ${town}, maximising space and practicality for every budget.`,
  },
  {
    Icon: Hammer,
    name: "Joinery",
    href: "/joinery",
    body: (town: string) =>
      `Our qualified joiners cover flooring, skirting, fitted wardrobes, doors, decking and more for homes in ${town} and the surrounding area.`,
  },
  {
    Icon: Paintbrush,
    name: "Interior Design",
    href: "/interiors",
    body: (town: string) =>
      `As part of a renovation in ${town}, we can also offer interior design guidance to make sure your finished project looks as good as it functions.`,
  },
];

export default async function TownPage({
  params,
}: {
  params: Promise<{ town: string }>;
}) {
  const { town: slug } = await params;
  const town = getTown(slug);
  if (!town) notFound();

  return (
    <section className="pt-24 py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-blue-500 font-medium mb-2">{town.region}</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Home Renovations in {town.name}
        </h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">{town.intro}</p>

        {town.slug === "glasgow" && (
          <div className="flex flex-wrap gap-4 mb-12">
            <Link
              href="/kitchen-renovation-fitting-glasgow"
              className="text-blue-500 font-medium hover:underline"
            >
              Kitchen renovation &amp; fitting in Glasgow →
            </Link>
            <Link
              href="/bathroom-renovations-glasgow"
              className="text-blue-500 font-medium hover:underline"
            >
              Bathroom renovations in Glasgow →
            </Link>
            <Link
              href="/home-extensions-glasgow"
              className="text-blue-500 font-medium hover:underline"
            >
              Home extensions in Glasgow →
            </Link>
          </div>
        )}

        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          {services.map(({ Icon, name, href, body }) => (
            <div key={name} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">
                {name} in {town.name}
              </h2>
              <p className="text-gray-600 mb-4">{body(town.name)}</p>
              <Link href={href} className="text-blue-500 font-medium hover:underline">
                See our {name.toLowerCase()} work →
              </Link>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Get a free consultation in {town.name}
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            No job too small: whether it&apos;s a full renovation or a single room, get in touch
            for a free, no-obligation quote.
          </p>
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  );
}
