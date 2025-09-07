import React from "react";

export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-pink-500 text-white py-16 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-lg text-orange-100 mb-8">
          Get a free consultation and discover how our team can help accelerate
          your growth.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:scale-105 hover:bg-orange-100 transition-transform duration-300"
          >
            Contact Us
          </a>
          <a
            href="#pricing-packages"
            className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors duration-300 hover:scale-105"
          >
            View Pricing
          </a>
        </div>
      </div>
    </section>
  );
}
