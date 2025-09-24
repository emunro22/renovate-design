import React from "react";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";
import interiorService from "../assets/interior-service.jpg";

function Interiors() {
  return (
    <Layout>
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Interior Design</h1>
          <p className="text-lg text-gray-700 mb-8">
            Our interior design services ensure your home looks stunning and feels comfortable,
            with expert guidance on style and aesthetics.
          </p>
          <Gallery images={[interiorService]} />
        </div>
      </section>
    </Layout>
  );
}

export default Interiors;
