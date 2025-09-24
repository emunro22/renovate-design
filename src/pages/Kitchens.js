import React from "react";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";
import kitchenService from "../assets/kitchen-service.jpg";

function Kitchens() {
  return (
    <Layout>
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Kitchens</h1>
          <p className="text-lg text-gray-700 mb-8">
            From complete renovations to worktop replacements, our kitchen
            services are designed around your lifestyle and space.
          </p>
          <Gallery images={[kitchenService]} />
        </div>
      </section>
    </Layout>
  );
}

export default Kitchens;
