import React from 'react';

function MissionSection() {
  return (
    <section className="bg-gray-100 text-center py-16 px-4">
      <h2 className="text-4xl font-bold mb-4">Our mission: Complete client success</h2>
      <p className="text-gray-600 text-base mb-12">Trusted by leading companies worldwide</p>

      {/* Responsive Company Logos Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
        <img src="/Homeimages/Icon.svg" alt="Company 1" className="h-12 object-contain" />
        <img src="/Homeimages/Icon-1.svg" alt="Company 2" className="h-12 object-contain" />
        <img src="/Homeimages/Icon-2.svg" alt="Company 3" className="h-12 object-contain" />
        <img src="/Homeimages/Icon-3.svg" alt="Company 4" className="h-12 object-contain" />
        <img src="/Homeimages/Icon-4.svg" alt="Company 5" className="h-12 object-contain" />
        <img src="/Homeimages/Icon-5.svg" alt="Company 6" className="h-12 object-contain" />
      </div>
    </section>
  );
}

export default MissionSection;
