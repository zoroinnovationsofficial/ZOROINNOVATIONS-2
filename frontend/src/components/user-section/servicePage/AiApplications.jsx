import React from "react";
import { motion } from "framer-motion";

export default function AiApplications() {
  return (
    <section className="bg-white py-20 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            AI Applications & Intelligent Solutions
          </h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Harness the power of Artificial Intelligence to automate complex
            tasks, provide predictive insights, and enhance decision-making.
          </p>
          <ul className="space-y-4 text-gray-700">
            {[
              "Machine Learning models for forecasting & optimization",
              "Natural Language Processing for chatbots & automation",
              "Computer Vision solutions for real-time analytics",
              "AI-powered personalization engines",
            ].map((item, i) => (
              <li key={i} className="flex gap-3 items-start">
                <img src="/Serviceimages/Overlay.png" alt="check" className="w-5 h-5 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <img
            src="/Serviceimages/ai-illustration.svg"
            alt="AI Applications"
            className="rounded-2xl shadow-lg max-w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
