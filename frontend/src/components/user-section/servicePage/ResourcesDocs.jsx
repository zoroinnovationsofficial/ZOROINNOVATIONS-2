export default function ResourcesDocs() {
  return (
    <section className="bg-white py-12 px-4 max-w-full mx-auto">
      <h2 className="text-4xl font-bold text-center mb-2">Resources & Documentation</h2>
      <p className="text-center text-xl font-normal mt-4 mb-12 text-gray-600">
        Helpful resources to understand our services better
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Service Brochure */}
        <div className="flex flex-col items-center">
          <img
            src="/Serviceimages/Overlay.svg"
            alt="Service Brochure"
            className="w-16 h-16 mb-2"
          />
          <div className="text-lg font-semibold mt-3 mb-1">Service Brochure</div>
          <div className="text-sm font-normal text-gray-600 mb-1 text-center w-[265px]">
            Comprehensive overview of all our services and capabilities
          </div>
          <a href="#" className="text-orange-500 text-sm font-semibold mt-2">
            Download PDF
          </a>
        </div>

        {/* Case Studies */}
        <div className="flex flex-col items-center">
          <img
            src="/Serviceimages/Overlay-1.svg"
            alt="Case Studies"
            className="w-16 h-16 mb-2"
          />
          <div className="text-lg font-semibold mt-3 mb-1">Case Studies</div>
          <div className="text-sm font-normal text-gray-600 mb-1 text-center w-[265px]">
            Detailed analysis of our successful project implementations
          </div>
          <a href="#" className="text-orange-500 text-sm font-semibold mt-2">
            View Studies
          </a>
        </div>

        {/* FAQ */}
        <div className="flex flex-col items-center">
          <img
            src="/Serviceimages/Overlay-2.svg"
            alt="FAQ"
            className="w-16 h-16 mb-2"
          />
          <div className="text-lg font-semibold mt-3 mb-1">FAQ</div>
          <div className="text-sm font-normal text-gray-600 mb-1 text-center w-[265px]">
            Frequently asked questions about our services and processes
          </div>
          <a href="#" className="text-orange-500 text-sm font-semibold mt-2">
            Read FAQ
          </a>
        </div>

        {/* Tech Blog */}
        <div className="flex flex-col items-center">
          <img
            src="/Serviceimages/Overlay-3.svg"
            alt="Tech Blog"
            className="w-16 h-16 mb-2"
          />
          <div className="text-lg font-semibold mt-3 mb-1">Tech Blog</div>
          <div className="text-sm font-normal text-gray-600 mb-1 text-center w-[265px]">
            Latest insights and trends in technology and development
          </div>
          <a href="#" className="text-orange-500 text-sm font-semibold mt-2">
            Read Blog
          </a>
        </div>
      </div>
    </section>
  );
}
