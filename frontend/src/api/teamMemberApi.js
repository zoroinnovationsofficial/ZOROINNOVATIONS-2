import axios from 'axios';
import { API_CONFIG } from './config';

const apiClient = axios.create({
  baseURL: API_CONFIG.BASE_URL,
  timeout: API_CONFIG.TIMEOUT,
  withCredentials: true,
});

export const getAllTeamMembers = async () => {
  try {
    const response = await apiClient.get('/api/team-members');
    return response?.data ?? [];
  } catch (error) {
    const message = error?.response?.data?.message || error?.message || 'Failed to fetch team members';
    console.error('Error fetching team members:', message);
    throw new Error(message);
  }
};
