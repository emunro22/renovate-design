import React from "react";
import Layout from "../components/Layout";

function TradeSupply() {
  return (
    <Layout>
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-gray-800">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Trade Supply</h1>

          <p className="text-lg mb-4">
            We can organise and handle the project from start to finish. We have a team of trades 
            that work together making your house become your home. Even if you have your own 
            tradesmen you’d like to use on the project, we can deal with the rest.
          </p>

          <p className="text-lg mb-6">
            Our trusted network of skilled professionals covers every aspect of your renovation:
          </p>

          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Plumbers / Gas Engineers</li>
            <li>Electricians</li>
            <li>Plasterers</li>
            <li>Tilers</li>
            <li>Bricklayers</li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export default TradeSupply;
