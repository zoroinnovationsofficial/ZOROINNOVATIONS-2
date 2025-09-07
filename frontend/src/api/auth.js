import axios from "axios";

const API_BASE = process.env.REACT_APP_API_URL || "http://localhost:8000";

const apiClient = axios.create({
  baseURL: API_BASE,
  timeout: 10000,
  withCredentials: true, // important if using cookies for auth
});

export const login = async (email, password) => {
  try {
    const response = await apiClient.post("/api/v1/auth/login", { email, password });
    const resData = response?.data;

    const token = resData?.data?.accessToken || resData?.accessToken;
    if (token) {
      localStorage.setItem("accessToken", token);
    }
    if (resData?.success) {
      localStorage.setItem("isAuthenticated", "true");
      if (resData?.user) {
        localStorage.setItem("currentUser", JSON.stringify(resData.user));
      }
    }

    return resData;
  } catch (error) {
    const message = error?.response?.data?.message || error?.message || "Login failed";
    throw new Error(message);
  }
};

export const register = async (username, email, password, fullName) => {
  try {
    const response = await apiClient.post("/api/v1/auth/register", {
      username,
      email,
      password,
      fullName,
    });
    return response.data;
  } catch (error) {
    const message = error?.response?.data?.message || error?.message || "Registration failed";
    throw new Error(message);
  }
};

export const logout = async () => {
  try {
    await apiClient.post("/api/v1/auth/logout");
  } catch (error) {
    const status = error?.response?.status;
    if (status && status !== 401 && status !== 403) {
      console.warn("Logout API error (non-fatal):", error);
    }
  } finally {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("currentUser");
  }
};
