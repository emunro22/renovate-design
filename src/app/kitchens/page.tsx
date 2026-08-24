import type { Metadata } from "next";
import Gallery from "@/components/Gallery";
import kitchenService from "@/assets/kitchen-service.jpg";

export const metadata: Metadata = {
  title: "Kitchen Fitter & Kitchen Builder Near You in Glasgow",
  description:
    "Looking for a kitchen fitter or kitchen builder near you? We design and fit complete kitchens and worktop replacements across Glasgow, Renfrewshire and Inverclyde.",
  alternates: { canonical: "/kitchens" },
};

export default function Kitchens() {
  return (
    <section className="pt-24 py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Kitchens</h1>
        <p className="text-lg text-gray-700 mb-8">
          From complete renovations to worktop replacements, our kitchen
          services are designed around your lifestyle and space. Whether you&apos;re after a
          kitchen fitter or a kitchen builder near you, we cover Glasgow, Renfrewshire and
          Inverclyde.
        </p>
        <Gallery images={[kitchenService.src]} />
      </div>
    </section>
  );
}
