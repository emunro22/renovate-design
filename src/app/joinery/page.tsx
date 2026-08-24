import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import joineryService from "@/assets/joinery-service.jpg";

export const metadata: Metadata = {
  title: "Joinery Services in Glasgow",
  description:
    "Fully qualified joiners covering flooring, fitted wardrobes, doors, decking and more across Glasgow, Renfrewshire and Inverclyde.",
  alternates: { canonical: "/joinery" },
};

export default function Joinery() {
  return (
    <section className="pt-24 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Joinery</h1>
        <p className="text-lg text-gray-700 mb-8">
          Our qualified joiners provide everything from flooring to fitted
          wardrobes, crafted to perfection.
        </p>
        <Gallery images={[joineryService.src]} />
      </div>
    </section>
  );
}
