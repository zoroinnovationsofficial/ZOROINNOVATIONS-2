import React from 'react';
import { projectTabs } from '../data/projects';

function ProjectTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {projectTabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
            activeTab === tab ? 'bg-orange-500 text-white shadow-lg' : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

export default ProjectTabs;
