import axios from "axios";

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:8000";

// Authenticated API client for admin operations
const apiClient = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  withCredentials: true,
});

// Public API client for contact form submissions (no auth required)
const publicApiClient = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  withCredentials: true,
});

// Add request interceptor to include auth token (only for authenticated requests)
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      console.log("🔑 Adding Bearer token to request:", config.url);
    } else {
      console.warn("⚠️ No access token found in localStorage for request:", config.url);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling (both clients)
const responseInterceptor = (response) => response;
const errorInterceptor = (error) => {
  const message = error?.response?.data?.message || error?.message || "An error occurred";
  return Promise.reject(new Error(message));
};

apiClient.interceptors.response.use(responseInterceptor, errorInterceptor);
publicApiClient.interceptors.response.use(responseInterceptor, errorInterceptor);

/**
 * Send a contact message (public - no authentication required)
 * @param {Object} formData - The contact form data
 * @param {string} formData.name - User's name
 * @param {string} formData.email - User's email
 * @param {string} formData.message - User's message
 * @param {string} [formData.subject] - Optional subject
 * @param {string} [formData.city] - Optional city
 * @returns {Promise<Object>} API response
 */
export const sendContactMessage = async (formData) => {
  try {
    if (!formData?.name || !formData?.email || !formData?.message) {
      throw new Error("Name, email, and message are required fields");
    }

    console.log("📤 Sending contact message via public API...");
    const response = await publicApiClient.post("/api/v1/contacts", formData);
    console.log("✅ Contact message sent successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("❌ Error sending contact message:", error);
    throw error;
  }
};

/**
 * Get all contacts (admin only)
 * @returns {Promise<Array>} Array of contacts
 */
export const getAllMessages = async () => {
  try {
    const response = await apiClient.get("/api/v1/contacts");
    return response.data;
  } catch (error) {
    throw error;
  }
};



/**
 * Get a specific message by ID (admin only)
 * @param {string} id - Message ID
 * @returns {Promise<Object>} Message data
 */
export const getMessageById = async (id) => {
  try {
    if (!id) {
      throw new Error("Message ID is required");
    }
    const response = await apiClient.get(`/api/v1/admin/messages/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
