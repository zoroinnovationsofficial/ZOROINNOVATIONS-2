// config.js
const BASE_URL =
  process.env.REACT_APP_API_URL || "http://localhost:8000";

export const API_CONFIG = {
  BASE_URL,
  TIMEOUT: 10000, // 10 seconds
  ENDPOINTS: {
    PROJECTS: {
      GET_ALL: "/api/v1/projects/getAllProjects",
      GET_BY_ID: "/api/v1/projects/getProjectById",
      CREATE: "/api/v1/projects/createProject",
      GET_CATEGORIES: "/api/v1/projects/getAllCategories",
      GET_DASHBOARD_STATS: "/api/v1/projects/getDashboardStats",
    },
  },
};

// Helper function to build full API URL
export const buildApiUrl = (endpoint) => `${BASE_URL}${endpoint}`;

// Helper function to handle API responses
export const handleApiResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
  }
  return response.json();
};
