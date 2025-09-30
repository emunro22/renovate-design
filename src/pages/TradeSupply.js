import React from "react";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

function TradeSupply() {
  return (
    <Layout>
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-gray-800">
          <motion.h1
            className="text-4xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Trade Supply
          </motion.h1>

          <motion.p
            className="text-lg mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            We can organise and handle the project from start to finish. We have a team of trades 
            that work together making your house become your home. Even if you have your own 
            tradesmen you’d like to use on the project, we can deal with the rest.
          </motion.p>

          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our trusted network of skilled professionals covers every aspect of your renovation:
          </motion.p>

          <motion.ul
            className="list-disc list-inside space-y-2 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <li>Plumbers / Gas Engineers</li>
            <li>Electricians</li>
            <li>Plasterers</li>
            <li>Tilers</li>
            <li>Bricklayers</li>
          </motion.ul>
        </div>
      </section>
    </Layout>
  );
}

export default TradeSupply;
