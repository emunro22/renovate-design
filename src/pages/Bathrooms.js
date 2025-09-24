import React from "react";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";
import bathroomService from "../assets/bathroom-service.jpg";

function Bathrooms() {
  return (
    <Layout>
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Bathrooms</h1>
          <p className="text-lg text-gray-700 mb-8">
            Bathroom design and layout is often overlooked. From rip-out to the
            finishing touches, we maximise practicality and aesthetics for your
            new bathroom.
          </p>
          <Gallery images={[bathroomService]} />
        </div>
      </section>
    </Layout>
  );
}

export default Bathrooms;
