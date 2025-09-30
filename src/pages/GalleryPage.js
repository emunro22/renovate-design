import React from "react";
import Layout from "../components/Layout";
import Gallery from "../components/Gallery";

import work1 from "../assets/work1.jpeg";
import work2 from "../assets/work2.jpeg";
import work3 from "../assets/work3.jpeg";
import work4 from "../assets/work4.jpeg";
import work5 from "../assets/work5.jpeg";
import work6 from "../assets/work6.jpeg";
import work7 from "../assets/work7.jpeg";
import work8 from "../assets/work8.jpeg";
import work9 from "../assets/work9.jpeg";


function GalleryPage() {
  return (
    <Layout>
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Work</h1>
          <p className="text-lg text-gray-700 mb-8">
            Explore some of our recent renovation projects in kitchens, bathrooms, joinery, and interiors.
          </p>
          <Gallery images={[work1, work2, work3, work4, work5, work6, work7, work8, work9]} />
        </div>
      </section>
    </Layout>
  );
}

export default GalleryPage;
