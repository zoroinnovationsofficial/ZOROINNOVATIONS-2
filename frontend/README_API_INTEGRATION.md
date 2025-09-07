# Frontend Projects Page API Integration

This document describes the API integration for the Projects page in the frontend application.

## Overview

The Projects page has been integrated with the backend API to fetch real project data, categories, and dashboard statistics. The integration follows the same pattern as the Admin-Section_Frontend.

## API Configuration

### Environment Variables

Create a `.env` file in the frontend root directory with the following variables:

```env
VITE_API_URL=https://zoroinnovations.onrender.com/api/v1

```

### API Endpoints

The following endpoints are used:

- `GET /api/v1/projects/getAllProjects` - Fetch all projects
- `GET /api/v1/projects/getProjectById/:id` - Fetch project by ID
- `POST /api/v1/projects/createProject` - Create new project
- `GET /api/v1/projects/getAllCategories` - Fetch all categories
- `GET /api/v1/projects/getDashboardStats` - Fetch dashboard statistics

## Files Added/Modified

### New Files

- `src/api/config.js` - API configuration and helper functions
- `src/api/projects.js` - Project-related API functions

### Modified Files

- `src/pages/user-section/Projects.jsx` - Integrated with API calls

## Features

### 1. Real-time Data Fetching

- Projects are fetched from the API on component mount
- Categories are dynamically loaded from the API
- Dashboard statistics are fetched and displayed in hero metrics

### 2. Fallback Data

- If the API is unavailable, the page falls back to static demo data
- Users see a warning banner when in demo mode
- The application remains functional even without API connectivity

### 3. Loading States

- Loading spinner is displayed while fetching data
- Smooth transitions between loading and loaded states

### 4. Error Handling

- Comprehensive error handling for API failures
- Graceful degradation to fallback data
- Console logging for debugging

## Data Structure

### Project Object

```javascript
{
  id: string,
  title: string,
  client: string,
  category: string,
  description: string,
  image: string,
  progress: number,
  completed: boolean,
  dueDate?: string
}
```

### Dashboard Stats Object

```javascript
{
  totalProjects: number,
  clientSatisfaction: number,
  industriesServed: number,
  yearsExperience: number
}
```

## Usage

1. Start the backend server on `http://localhost:8000`
2. Create a `.env` file with the API URL
3. Start the frontend development server
4. Navigate to the Projects page

## API Response Handling

The integration handles various API response structures:

```javascript
// Expected response formats:
{ data: { projects: [...] } }
{ projects: [...] }
[...] // Direct array
```

## Development

To test the API integration:

1. Ensure the backend server is running
2. Check browser console for API logs
3. Verify data is loading correctly
4. Test fallback behavior by stopping the backend server

## Troubleshooting

### Common Issues

1. **API Connection Failed**: Check if backend server is running
2. **CORS Errors**: Ensure backend has proper CORS configuration
3. **Environment Variables**: Verify `.env` file exists and has correct values

### Debug Logs

The integration includes console logging for debugging:

- `🔄 Fetching projects from API...`
- `✅ Loaded X projects from API`
- `❌ API Error: [error details]`
- `📋 Using fallback project data`
