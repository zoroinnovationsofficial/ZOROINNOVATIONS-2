export default function TrackRecord() {
  return (
    <section className="py-16 px-4">
      <h2 className="text-4xl font-bold text-center mb-4">
        Our Track Record
      </h2>
      <p className="text-center text-xl font-normal mb-12 text-gray-600">
        Proven results across all service categories
      </p>

      <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Project Success Rate */}
        <div className="bg-white shadow-lg rounded-3xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Project Success Rate
          </h3>
          <img
            src="/Serviceimages/image.png"
            alt="Project Success Rate"
            className="rounded-xl w-full max-w-[584px] object-contain"
          />
        </div>

        {/* Client Satisfaction */}
        <div className="bg-white shadow-lg rounded-3xl p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Client Satisfaction by Service
          </h3>
          <img
            src="/Serviceimages/image1.png"
            alt="Client Satisfaction by Service"
            className="rounded-xl w-full max-w-[584px] object-contain"
          />
        </div>
      </div>
    </section>
  );
}
