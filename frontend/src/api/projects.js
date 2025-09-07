import { buildApiUrl, handleApiResponse, API_CONFIG } from './config.js';

// Get all projects
export async function getAllProjects() {
  try {
    const response = await fetch(buildApiUrl(API_CONFIG.ENDPOINTS.PROJECTS.GET_ALL), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await handleApiResponse(response);
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
}

// Get project by ID
export async function getProjectById(projectId) {
  try {
    const response = await fetch(buildApiUrl(`${API_CONFIG.ENDPOINTS.PROJECTS.GET_BY_ID}/${projectId}`), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await handleApiResponse(response);
  } catch (error) {
    console.error('Error fetching project:', error);
    throw error;
  }
}

// Create new project
export async function createProject(projectData) {
  try {
    const response = await fetch(buildApiUrl(API_CONFIG.ENDPOINTS.PROJECTS.CREATE), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(projectData),
    });

    return await handleApiResponse(response);
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
}

// Get all categories
export async function getAllCategories() {
  try {
    const response = await fetch(buildApiUrl(API_CONFIG.ENDPOINTS.PROJECTS.GET_CATEGORIES), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await handleApiResponse(response);
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

// Get dashboard stats
export async function getDashboardStats() {
  try {
    const response = await fetch(buildApiUrl(API_CONFIG.ENDPOINTS.PROJECTS.GET_DASHBOARD_STATS), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await handleApiResponse(response);
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    throw error;
  }
}
