import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import interiorService from "@/assets/interior-service.jpg";

export const metadata: Metadata = {
  title: "Interior Designer Near You in Glasgow",
  description:
    "Looking for an interior designer near you? We offer interior design guidance to get the maximum aesthetic from your renovation project across Glasgow, Renfrewshire and Inverclyde.",
  alternates: { canonical: "/interiors" },
};

export default function Interiors() {
  return (
    <section className="pt-24 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Interior Design</h1>
        <p className="text-lg text-gray-700 mb-8">
          Our interior design services ensure your home looks stunning and feels comfortable,
          with expert guidance on style and aesthetics. Searching for an interior designer near
          you? We cover Glasgow, Renfrewshire and Inverclyde.
        </p>
        <Gallery images={[interiorService.src]} />
      </div>
    </section>
  );
}
