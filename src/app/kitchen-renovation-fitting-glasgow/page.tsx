import type { Metadata } from "next";
import Link from "next/link";
import { Phone, CheckCircle } from "lucide-react";
import Gallery from "@/components/Gallery";
import Faq from "@/components/Faq";
import { kitchenGlasgowFaqs } from "@/lib/faqs";
import { business } from "@/lib/business";
import kitchenService from "@/assets/kitchen-service.jpg";
import kitchen from "@/assets/kitchen.jpg";

export const metadata: Metadata = {
  title: "Kitchen Renovation & Fitting in Glasgow",
  description:
    "Kitchen renovation and fitting across Glasgow — design, supply and installation of complete kitchens and worktop replacements for tenements, terraces and family homes.",
  alternates: { canonical: "/kitchen-renovation-fitting-glasgow" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Kitchen Renovation and Fitting",
  provider: { "@type": "HomeAndConstructionBusiness", name: business.name, url: business.siteUrl },
  areaServed: { "@type": "City", name: "Glasgow" },
  url: `${business.siteUrl}/kitchen-renovation-fitting-glasgow`,
};

export default function KitchenRenovationGlasgow() {
  return (
    <section className="pt-24 py-20 bg-gray-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-blue-500 font-medium mb-2">GLASGOW</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Kitchen Renovation &amp; Fitting in Glasgow
        </h1>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl">
          Whether you&apos;re after a full kitchen renovation or a kitchen fitter to install a
          brand-new suite, we design, supply and fit kitchens across the West End, Southside and
          greater Glasgow area — from Victorian tenements to modern new-builds. Every project is
          managed from first sketch to final finish, with worktop replacements and smaller
          adaptations handled just as carefully as a complete refit.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 mb-16">
          {[
            "Complete kitchen renovations and worktop replacements",
            "Custom layouts designed around Glasgow's tenement and terrace floorplans",
            "Multiple kitchen brands and finishes to suit any budget",
            "One point of contact for joinery, plumbing and electrics",
          ].map((point) => (
            <div key={point} className="flex items-start bg-white rounded-xl shadow p-4">
              <CheckCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5 shrink-0" />
              <span className="text-gray-700">{point}</span>
            </div>
          ))}
        </div>

        <Gallery images={[kitchenService, kitchen]} altPrefix="Kitchen renovation and fitting in Glasgow" />

        <div className="bg-white rounded-2xl shadow-lg p-8 text-center my-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Get a free kitchen renovation quote in Glasgow
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Tell us about your space and we&apos;ll arrange a free, no-obligation consultation.
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

      <Faq items={kitchenGlasgowFaqs} title="Kitchen Renovation FAQs" id="kitchen-faq" />

      <div className="max-w-5xl mx-auto px-6 mt-16 text-center">
        <Link href="/kitchens" className="text-blue-500 font-medium hover:underline">
          See our full kitchens service →
        </Link>
      </div>
    </section>
  );
}
