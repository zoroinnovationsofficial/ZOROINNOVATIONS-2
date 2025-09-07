import React from 'react';

function InnovationSection() {
  return (
    <section className="bg-blue-900 text-white py-20 px-6 md:px-20 animate-bg-pulse-blue">
      <h2 className="text-4xl font-bold text-center mb-4 animate-fade-in-up hover:animate-title-hover">
        Zoro: Relentless Innovation
      </h2>
      <p className="text-center text-xl font-normal text-gray-300 mb-12 animate-fade-in-up animation-delay-200">
        Delivering excellence through innovation and dedication
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white text-black px-8 py-6 rounded-3xl shadow-lg flex flex-col items-start transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] group">
          <img 
            src="/Homeimages/Overlay.svg" 
            alt="Innovation" 
            className="h-12 w-12 mt-2 transition-transform duration-300 ease-in-out group-hover:scale-110" 
          />
          <h3 className="text-xl font-bold mt-6 mb-3 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
            Innovation First
          </h3>
          <p className="text-base text-gray-700">
            We leverage cutting-edge technology to solve complex business challenges and drive digital transformation.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white text-black px-8 py-6 rounded-3xl shadow-lg flex flex-col items-start transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] group">
          <img 
            src="/Homeimages/Overlay-1.svg" 
            alt="Expert Team" 
            className="h-12 w-12 mt-2 transition-transform duration-300 ease-in-out group-hover:scale-110" 
          />
          <h3 className="text-xl font-bold mt-6 mb-3 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
            Expert Team
          </h3>
          <p className="text-base text-gray-700">
            Our skilled professionals bring years of experience in AI, software development, and IT consulting.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white text-black px-8 py-6 rounded-3xl shadow-lg flex flex-col items-start transition-all duration-300 ease-in-out hover:scale-105 hover:-translate-y-2 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] group">
          <img 
            src="/Homeimages/Overlay-2.svg" 
            alt="Client Success" 
            className="h-12 w-12 mt-2 transition-transform duration-300 ease-in-out group-hover:scale-110" 
          />
          <h3 className="text-xl font-bold mt-6 mb-3 transition-transform duration-300 ease-in-out group-hover:-translate-y-1">
            Client Success
          </h3>
          <p className="text-base text-gray-700">
            We partner with our clients to ensure their success through tailored solutions and ongoing support.
          </p>
        </div>
      </div>
    </section>
  );
}

export default InnovationSection;
