import React, { useState, useEffect } from 'react';
import { getAllProjects, createProject } from '../../api/projects.js';

const fallbackProjects = [
  {
    id: '1',
    title: "AI-Powered Analytics Platform",
    client: "Global Retail Corp",
    image: "/ProjectImages/analytics.png",
    progress: 75,
    dueDate: "2024-08-15",
    completed: false,
    category: "AI Applications",
    description: "Advanced analytics platform for retail insights",
  },
  {
    id: '2',
    title: "Smart Home Automation System",
    client: "Tech Startup Inc",
    image: "/ProjectImages/smart-home.png",
    progress: 100,
    dueDate: "2024-05-20",
    completed: true,
    category: "IoT",
    description: "Complete home automation solution",
  },
  {
    id: '3',
    title: "Predictive Maintenance Software",
    client: "Industrial Solutions Ltd",
    image: "/ProjectImages/maintainance.png",
    progress: 25,
    dueDate: "2024-11-30",
    completed: false,
    category: "AI Applications",
    description: "Predictive maintenance for industrial equipment",
  },
  {
    id: '4',
    title: "Custom CRM Development",
    client: "Business Growth Partners",
    image: "/ProjectImages/crm.png",
    progress: 60,
    dueDate: "2024-09-22",
    completed: false,
    category: "Web Development",
    description: "Custom CRM system for business management",
  },
  {
    id: '5',
    title: "Mobile App for Healthcare",
    client: "Health Innovations LLC",
    image: "/ProjectImages/healthcare.png",
    progress: 100,
    dueDate: "2024-04-10",
    completed: true,
    category: "Mobile Development",
    description: "Healthcare mobile application",
  },
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newProject, setNewProject] = useState({
    title: '',
    client: '',
    category: '',
    description: '',
    dueDate: '',
    image: '/ProjectImages/default.png'
  });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await getAllProjects();
        const projectsData = response.data?.projects || response.projects || response;
        if (Array.isArray(projectsData)) {
          setProjects(projectsData);
          setFilteredProjects(projectsData);
        } else {
          throw new Error('Invalid projects data structure');
        }
      } catch (err) {
        setError('Failed to load projects from API. Using demo data.');
        setProjects(fallbackProjects);
        setFilteredProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (project.category && project.category.toLowerCase().includes(searchTerm.toLowerCase()))
      );
      setFilteredProjects(filtered);
    }
  }, [searchTerm, projects]);

  const handleCreateProject = async (e) => {
    e.preventDefault();
    try {
      const projectData = {
        ...newProject,
        progress: 0,
        completed: false,
        createdAt: new Date().toISOString().split('T')[0]
      };
      const response = await createProject(projectData);
      const createdProject = response.data?.project || response.project || response;
      setProjects(prev => [createdProject, ...prev]);
      setNewProject({
        title: '',
        client: '',
        category: '',
        description: '',
        dueDate: '',
        image: '/ProjectImages/default.png'
      });
      setShowCreateModal(false);
    } catch (err) {
      alert('Failed to create project. Please try again.');
    }
  };

  const handleDeleteProject = (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(prev => prev.filter(p => p.id !== projectId));
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-700 to-orange-300 flex items-center justify-center">
        <div className="bg-white rounded-2xl p-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 to-orange-300 p-10">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl p-6 mt-20">
        {error && (
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  <strong>Demo Mode:</strong> {error}
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
          <div className="w-full sm:w-1/2 bg-gray-100 rounded-lg overflow-hidden mb-4 sm:mb-0 sm:mr-6">
            <img
              src="/ProjectImages/team.png"
              alt="Team"
              className="w-full h-[320px] object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-extrabold text-gray-900">Projects</h1>
            <p className="text-gray-600 mt-1 mb-4">
              Manage your projects efficiently and effectively.
            </p>
            <button 
              onClick={() => setShowCreateModal(true)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-semibold transition-colors"
            >
              New Project
            </button>
          </div>
        </div>

        <div className="mb-6">
          <input
            type="text"
            placeholder="🔍 Search projects by title, client, or category"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full border rounded-lg px-4 py-2 focus:outline-none bg-gray-100"
          />
        </div>

        <div className="mb-4 text-sm text-gray-600">
          Showing {filteredProjects.length} of {projects.length} projects
        </div>

        <div className="space-y-6">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500">No projects found matching your search.</p>
            </div>
          ) : (
            filteredProjects.map((project, idx) => (
              <div
                key={project.id || idx}
                className="bg-white rounded-xl shadow border border-gray-200 p-4 space-y-4"
              >
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <div className="flex-1">
                    <h2 className="font-semibold text-2xl text-gray-800 mb-4">
                      {project.title}
                    </h2>
                    <p className="text-lg text-gray-500 mb-2">
                      Client: {project.client}
                    </p>
                    {project.category && (
                      <p className="text-sm text-gray-400 mb-4">
                        Category: {project.category}
                      </p>
                    )}
                    {project.description && (
                      <p className="text-gray-600 mb-4">
                        {project.description}
                      </p>
                    )}
                    <div className="flex space-x-2 mt-2">
                      <button className="px-3 py-1 text-sm border font-bold rounded-full bg-gray-100 hover:bg-gray-200">
                        View Project
                      </button>
                      <button 
                        onClick={() => handleDeleteProject(project.id)}
                        className="px-3 py-1 text-sm border rounded-full font-bold bg-red-100 hover:bg-red-200 text-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                  <div className="w-fit rounded-lg overflow-hidden">
                    <div className="flex justify-end mb-2">
                      <button className="px-3 py-1 text-sm border rounded-full bg-orange-500 text-white hover:bg-orange-600 transition">
                        Edit
                      </button>
                    </div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-[475px] h-[165px] object-cover rounded-2xl"
                      onError={(e) => {
                        e.target.src = '/ProjectImages/default.png';
                      }}
                    />
                  </div>
                </div>

                <div className="text-sm text-gray-600">
                  <div className="mb-1">Progress</div>
                  <div className="w-full bg-gray-200 h-1.5 rounded-full overflow-hidden">
                    <div
                      className="bg-orange-500 h-1.5 transition-all duration-300"
                      style={{ width: `${project.progress}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span>
                      {project.completed
                        ? `Completed: ${project.dueDate}`
                        : `Due Date: ${project.dueDate}`}
                    </span>
                    <span className="text-orange-500 font-semibold">
                      {project.progress}%
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
            <h2 className="text-2xl font-bold mb-4">Create New Project</h2>
            <form onSubmit={handleCreateProject}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Title
                  </label>
                  <input
                    type="text"
                    required
                    value={newProject.title}
                    onChange={(e) => setNewProject(prev => ({ ...prev, title: e.target.value }))}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Client
                  </label>
                  <input
                    type="text"
                    required
                    value={newProject.client}
                    onChange={(e) => setNewProject(prev => ({ ...prev, client: e.target.value }))}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category
                  </label>
                  <input
                    type="text"
                    value={newProject.category}
                    onChange={(e) => setNewProject(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Description
                  </label>
                  <textarea
                    value={newProject.description}
                    onChange={(e) => setNewProject(prev => ({ ...prev, description: e.target.value }))}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    rows="3"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Due Date
                  </label>
                  <input
                    type="date"
                    required
                    value={newProject.dueDate}
                    onChange={(e) => setNewProject(prev => ({ ...prev, dueDate: e.target.value }))}
                    className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
              <div className="flex space-x-3 mt-6">
                <button
                  type="submit"
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-lg font-semibold transition-colors"
                >
                  Create Project
                </button>
                <button
                  type="button"
                  onClick={() => setShowCreateModal(false)}
                  className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 rounded-lg font-semibold transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;


