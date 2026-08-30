import type { Metadata } from "next";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import bathroomService from "@/assets/bathroom-service.jpg";

export const metadata: Metadata = {
  title: "Bathroom Fitter Near You in Glasgow",
  description:
    "Looking for a bathroom fitter near you? Complete bathroom renovations across Glasgow, Renfrewshire and Inverclyde, from rip-out to finishing touches.",
  alternates: { canonical: "/bathrooms" },
};

export default function Bathrooms() {
  return (
    <section className="pt-24 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Bathrooms</h1>
        <p className="text-lg text-gray-700 mb-8">
          Bathroom design and layout is often overlooked. From rip-out to the
          finishing touches, we maximise practicality and aesthetics for your
          new bathroom. Searching for a bathroom fitter near you? We cover Glasgow,
          Renfrewshire and Inverclyde.
        </p>
        <Gallery images={[bathroomService]} altPrefix="Bathroom renovation in Glasgow" />
        <p className="mt-8 text-gray-600">
          <Link href="/bathroom-renovations-glasgow" className="text-blue-500 font-medium hover:underline">
            Read more about bathroom renovations in Glasgow →
          </Link>
        </p>
      </div>
    </section>
  );
}
