import React from 'react';
import caseStudy from '../data/caseStudy';

function CaseStudySection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            In-depth breakdown of our most transformative tech projects — and the strategies that delivered real business outcomes.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex">
          <div className="md:w-1/2 h-96 md:h-auto flex items-center justify-center bg-gray-100">
            <img src={caseStudy.image} alt="Case Study" className="h-full w-full object-cover" />
          </div>
          <div className="md:w-1/2 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{caseStudy.title}</h3>
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-2">
                  <img src="/Overlay-1.svg" alt="Challenge" className="h-6 w-6 mr-3" />
                  <h4 className="font-semibold text-gray-900">Challenge</h4>
                </div>
                <p className="text-gray-600 ml-9">{caseStudy.challenge}</p>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <img src="/Overlay-2.svg" alt="Solution" className="h-6 w-6 mr-3" />
                  <h4 className="font-semibold text-gray-900">Solution</h4>
                </div>
                <ul className="ml-9 text-gray-600 list-disc text-sm pl-4">
                  {caseStudy.solution.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
              <div>
                <div className="flex items-center mb-2">
                  <img src="/Overlay-3.svg" alt="Results" className="h-6 w-6 mr-3" />
                  <h4 className="font-semibold text-gray-900">Results</h4>
                </div>
                <ul className="ml-9 text-gray-600 list-disc text-sm pl-4">
                  {caseStudy.results.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
              </div>
              <div className="flex items-center pt-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4 flex items-center justify-center">
                  <img src={caseStudy.person.avatar} alt={caseStudy.person.name} className="h-8 w-8 rounded-full" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{caseStudy.person.name}</div>
                  <div className="text-sm text-gray-600">{caseStudy.person.role}</div>
                </div>
              </div>
              <blockquote className="border-l-4 border-orange-500 pl-4 italic text-gray-700">
                "{caseStudy.quote}"
              </blockquote>
              <button className="bg-orange-500 hover:bg-orange-600 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200">
                Read Full Case Study
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CaseStudySection;
