import type { Metadata } from "next";
import { Phone, Hammer, UtensilsCrossed, Paintbrush, Users } from "lucide-react";
import Faq from "@/components/Faq";
import { extensionsGlasgowFaqs } from "@/lib/faqs";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  title: "Home Extensions in Glasgow",
  description:
    "Project-managed home extensions in Glasgow, Renfrewshire and Inverclyde, from structural build through to joinery, kitchens, bathrooms and interior finish.",
  alternates: { canonical: "/home-extensions-glasgow" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Home Extension",
  provider: { "@type": "HomeAndConstructionBusiness", name: business.name, url: business.siteUrl },
  areaServed: { "@type": "City", name: "Glasgow" },
  url: `${business.siteUrl}/home-extensions-glasgow`,
};

const stages = [
  {
    Icon: Hammer,
    title: "Structural build",
    body: "We bring in and manage the trades needed for the structural work, from foundations to roofing, so your extension is built to last.",
  },
  {
    Icon: UtensilsCrossed,
    title: "Kitchens & bathrooms",
    body: "If your extension includes a new kitchen or bathroom, we design, supply and fit it as part of the same project.",
  },
  {
    Icon: Paintbrush,
    title: "Interior finish",
    body: "Joinery, flooring and interior design bring the new space together so it matches the rest of your home.",
  },
  {
    Icon: Users,
    title: "One point of contact",
    body: "Plumbers, electricians, plasterers, tilers and bricklayers are all coordinated by us, so you don't have to manage multiple trades yourself.",
  },
];

export default function HomeExtensionsGlasgow() {
  return (
    <section className="pt-24 py-20 bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-blue-500 font-medium mb-2">GLASGOW</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Home Extensions in Glasgow</h1>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl">
          Need more space rather than a full move? We project manage home extensions across
          Glasgow, Renfrewshire and Inverclyde, coordinating every trade from the structural build
          through to the finished kitchen, bathroom or living space, so you deal with one point of
          contact throughout.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          {stages.map(({ Icon, title, body }) => (
            <div key={title} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
              <p className="text-gray-600">{body}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Get a free extension consultation in Glasgow
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Tell us what you&apos;re looking to add and we&apos;ll arrange a free, no-obligation
            consultation to talk through the project.
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

      <Faq items={extensionsGlasgowFaqs} title="Home Extension FAQs" id="extensions-faq" />
    </section>
  );
}
