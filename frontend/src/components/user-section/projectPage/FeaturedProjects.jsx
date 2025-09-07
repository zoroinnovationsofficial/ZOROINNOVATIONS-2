import React, { useState, memo } from "react";
import PropTypes from "prop-types";

function FeaturedProjects({
  projectTabs,
  activeTab,
  setActiveTab,
  filteredProjects,
}) {
  const [imageLoadStates, setImageLoadStates] = useState({});
  const [selectedProject, setSelectedProject] = useState(null); // For popup modal

  const handleImageLoad = (projectId) => {
    setImageLoadStates((prev) => ({ ...prev, [projectId]: true }));
  };

  const handleImageError = (projectId) => {
    setImageLoadStates((prev) => ({ ...prev, [projectId]: "error" }));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful digital solutions across
            industries — delivering real impact through web, AI, SaaS, and IT
            innovation.
          </p>
        </div>

        {/* Project Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {projectTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                activeTab === tab
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id || index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Project Image */}
              <div className="h-48 w-full relative">
                {!imageLoadStates[project.id] && (
                  <div className="h-48 w-full bg-gray-200 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
                  </div>
                )}
                <img
                  src={project.image}
                  alt={project.title}
                  className={`h-48 w-full object-cover ${
                    !imageLoadStates[project.id] ? "hidden" : ""
                  }`}
                  onLoad={() => handleImageLoad(project.id)}
                  onError={(e) => {
                    handleImageError(project.id);
                    e.target.src = "/ProjectImages/analytics.png";
                  }}
                />
                <span className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm">
                  {project.category}
                </span>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-6">{project.description}</p>

                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/60">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-6 relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>

            {/* Project Image */}
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
              onError={(e) => {
                e.target.src = "/ProjectImages/analytics.png";
              }}
            />

            {/* Project Details */}
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {selectedProject.title}
            </h2>
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>

            <div className="space-y-2 text-sm text-gray-600">
              {selectedProject.client && (
                <p>
                  <span className="font-semibold">Client:</span>{" "}
                  {selectedProject.client}
                </p>
              )}
              {selectedProject.dueDate && (
                <p>
                  <span className="font-semibold">Due Date:</span>{" "}
                  {selectedProject.dueDate}
                </p>
              )}
              {typeof selectedProject.progress === "number" && (
                <p>
                  <span className="font-semibold">Progress:</span>{" "}
                  {selectedProject.progress}%
                </p>
              )}
              <p>
                <span className="font-semibold">Status:</span>{" "}
                {selectedProject.completed ? "Completed" : "In Progress"}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

FeaturedProjects.propTypes = {
  projectTabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  filteredProjects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      category: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      client: PropTypes.string,
      progress: PropTypes.number,
      completed: PropTypes.bool,
      dueDate: PropTypes.string,
    })
  ).isRequired,
};

export default memo(FeaturedProjects);
