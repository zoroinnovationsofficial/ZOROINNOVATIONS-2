// src/components/MetricsSection.jsx
import React from 'react';
import metrics from '../data/metrics';

function MetricsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Success Metrics
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Quantifiable results that demonstrate our commitment to delivering exceptional value to our clients.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 bg-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-600 transition-colors duration-200">
                <img src={metric.icon} alt="icon" className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
              <div className="text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MetricsSection;
