export default function CTASection() {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-4xl font-bold mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl font-normal md:text-xl text-white/90 mb-8">
          Let's discuss your requirements and create a solution that drives your business forward.
        </p>
        <div className="flex justify-center flex-wrap gap-4">
          <button className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-orange-600 transition duration-300 font-normal text-lg">
            <a href="/contact">Schedule Consultation </a>
          </button>
         <a href="/services#pricing-packages" className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-orange-600 transition duration-300 text-lg">
            Get Quote
          </a>
        </div>
      </div>
    </section>
  );
}
