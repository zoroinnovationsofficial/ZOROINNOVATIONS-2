import React from 'react';

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 w-full relative">
        <img src={project.image} alt={project.title} className="h-48 w-full object-cover" />
        <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
          {project.category}
        </span>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-6">{project.description}</p>
        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200">
          View Details
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;
