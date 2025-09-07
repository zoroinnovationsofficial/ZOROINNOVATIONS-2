import React from 'react';

function PartnerEcosystem() {
  return (
    <section className="bg-blue-900 text-white py-20">
      <h2 className="text-4xl font-bold text-center mb-4">Our Partner Ecosystem</h2>
      <p className="text-center text-xl font-normal mb-12 text-[#D1D5DB]">
        Collaborating with industry leaders to deliver exceptional results
      </p>

      <div className="flex flex-wrap justify-center gap-8 px-4">
        <img src="/Homeimages/Background.svg" alt="Partner 1" className="h-16 w-auto" />
        <img src="/Homeimages/Background-1.svg" alt="Partner 2" className="h-16 w-auto" />
        <img src="/Homeimages/Background-2.svg" alt="Partner 3" className="h-16 w-auto" />
        <img src="/Homeimages/Background-3.svg" alt="Partner 4" className="h-16 w-auto" />
        <img src="/Homeimages/Background-4.svg" alt="Partner 5" className="h-16 w-auto" />
        <img src="/Homeimages/Background-5.svg" alt="Partner 6" className="h-16 w-auto" />
      </div>
    </section>
  );
}

export default PartnerEcosystem;
