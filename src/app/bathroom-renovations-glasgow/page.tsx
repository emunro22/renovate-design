import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle } from "lucide-react";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import { bathroomGlasgowFaqs } from "@/lib/faqs";
import { business } from "@/lib/business";
import bathroomService from "@/assets/bathroom-service.jpg";
import bathroom from "@/assets/bathroom.jpg";

export const metadata: Metadata = {
  title: "Bathroom Renovations in Glasgow",
  description:
    "Full bathroom renovations across Glasgow, from rip-out to finishing touches, with wet wall and tiled options and space-saving layouts for tenements, terraces and family homes.",
  alternates: { canonical: "/bathroom-renovations-glasgow" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Bathroom Renovation",
  provider: { "@type": "HomeAndConstructionBusiness", name: business.name, url: business.siteUrl },
  areaServed: { "@type": "City", name: "Glasgow" },
  url: `${business.siteUrl}/bathroom-renovations-glasgow`,
};

export default function BathroomRenovationsGlasgow() {
  return (
    <section className="pt-24 py-20 bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-blue-500 font-medium mb-2">GLASGOW</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Bathroom Renovations in Glasgow
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl">
          Bathroom layout is often overlooked, especially in Glasgow&apos;s tenement flats and
          older terraces where space is tight. From the rip-out to the final silicone seal, we
          maximise space and practicality for your new bathroom, with wet wall and tiled options
          across a range of budgets.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {[
            "Complete bathroom renovations, rip-out to finish",
            "Space-saving layouts for tenement and terrace bathrooms",
            "Wet wall and tiled finish options",
            "Suite ranges to suit budget and high-end finishes alike",
          ].map((point) => (
            <div key={point} className="flex items-start bg-white rounded-xl shadow p-4">
              <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 shrink-0" />
              <span className="text-gray-700">{point}</span>
            </div>
          ))}
        </div>

        <Gallery images={[bathroomService, bathroom]} altPrefix="Bathroom renovation in Glasgow" />

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center my-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Get a free bathroom renovation quote in Glasgow
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Tell us about your bathroom and we&apos;ll arrange a free, no-obligation consultation.
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

      <Faq items={bathroomGlasgowFaqs} title="Bathroom Renovation FAQs" id="bathroom-faq" />

      <div className="max-w-5xl mx-auto px-6 mt-16 text-center">
        <Link href="/bathrooms" className="text-blue-500 font-medium hover:underline">
          See our full bathrooms service →
        </Link>
      </div>
    </section>
  );
}
