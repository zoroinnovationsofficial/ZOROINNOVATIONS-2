import React, { useState, useEffect, useMemo } from 'react';
import { getAllProjects, getAllCategories, getDashboardStats } from '../../api/projects.js';
import HeroSection from '../../components/user-section/projectPage/HeroSection';
import FeaturedProjects from '../../components/user-section/projectPage/FeaturedProjects';
import CaseStudy from '../../components/user-section/projectPage/CaseStudy';
import Metrics from '../../components/user-section/projectPage/Metrics';
import CTASection from '../../components/user-section/projectPage/CTASection';
// import Footer from '../../components/user-section/Footer';

// Metrics with SVG icons (assign overlays logically)
const metrics = [
  { icon: '/Overlay-3.svg', value: '100+', label: 'Products Deployed' },
  { icon: '/Overlay-4.svg', value: '95%', label: 'Client Retention Rate' },
  { icon: '/Overlay-5.svg', value: '15%', label: 'Average Annual Returns' },
  { icon: '/Overlay-6.svg', value: '4 Weeks', label: 'Average Implementation Time' },
];

const heroMetrics = [
  { value: '500+', label: 'Projects Completed' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '25+', label: 'Industries Served' },
  { value: '15', label: 'Years Experience' },
];

const projectTabs = [
  'All Projects',
  'AI Applications',
  'IoT',
  'Web Development',
  'Mobile Development',
];

// Fallback data in case API is not available - matching the original design
const fallbackProjects = [
  {
    id: '1',
    category: 'AI Applications',
    title: 'AI-Powered Analytics Platform',
    description: 'Advanced analytics platform for retail insights',
    image: '/ProjectImages/analytics.png',
    client: 'Global Retail Corp',
    progress: 75,
    completed: false,
  },
  {
    id: '2',
    category: 'IoT',
    title: 'Smart Home Automation System',
    description: 'Complete home automation solution',
    image: '/ProjectImages/smart-home.png',
    client: 'Tech Startup Inc',
    progress: 100,
    completed: true,
  },
  {
    id: '3',
    category: 'AI Applications',
    title: 'Predictive Maintenance Software',
    description: 'Predictive maintenance for industrial equipment',
    image: '/ProjectImages/maintainance.png',
    client: 'Industrial Solutions Ltd',
    progress: 25,
    completed: false,
  },
  {
    id: '4',
    category: 'Web Development',
    title: 'Custom CRM Development',
    description: 'Custom CRM system for business management',
    image: '/ProjectImages/crm.png',
    client: 'Business Growth Partners',
    progress: 60,
    completed: false,
  },
  {
    id: '5',
    category: 'Mobile Development',
    title: 'Mobile App for Healthcare',
    description: 'Healthcare mobile application',
    image: '/ProjectImages/healthcare.png',
    client: 'Health Innovations LLC',
    progress: 100,
    completed: true,
  },
];

// Use the same image for all featured projects (case study image)
const caseStudyImage = '/ProjectImages/team.png';

const caseStudy = {
  image: caseStudyImage, // Example image
  title: 'Enterprise IT Modernization for Fortune 500 Company',
  challenge: 'A global enterprise needed to modernize its legacy IT infrastructure across 10 countries while reducing downtime and operational costs.',
  solution: [
    'Migrated systems to hybrid cloud',
    'Deployed monitoring tools for real-time performance',
  ],
  results: [
    '40% reduction in operational costs',
    '75% improvement in deployment speed',
    '99.9% uptime achieved across global offices',
  ],
  person: {
    name: 'Anand Iyer',
    role: 'Global IT Director',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg', // Realistic avatar
  },
  quote: 'Zero Innovation helped us scale globally with a future-proof IT strategy. Their technical expertise and execution were flawless.',
};

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('All Projects');
  const [categories, setCategories] = useState([]);
  const [dashboardStats, setDashboardStats] = useState(null);

  // Fetch projects from API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('🔄 Fetching projects from API...');
        const response = await getAllProjects();
        console.log('📊 API Response:', response);
        console.log('📊 Projects Data Structure:', JSON.stringify(response, null, 2));
        
        // Handle different response structures
        const projectsData = response.data?.projects || response.projects || response;
        
        if (Array.isArray(projectsData)) {
          // Ensure all projects have the required fields
          const formattedProjects = projectsData.map(project => ({
            id: project.id || project._id || Math.random().toString(36).substr(2, 9),
            title: project.title || project.name || 'Untitled Project',
            client: project.client || project.clientName || 'Unknown Client',
            category: project.category || project.categoryName || 'Uncategorized',
            description: project.description || project.desc || 'No description available',
            image: project.image || project.imageUrl || '/ProjectImages/analytics.png',
            progress: project.progress || 0,
            completed: project.completed || false,
            dueDate: project.dueDate || project.deadline || null
          }));
          setProjects(formattedProjects);
          console.log(`✅ Loaded ${formattedProjects.length} projects from API`);
        } else {
          throw new Error('Invalid projects data structure');
        }
        
      } catch (err) {
        console.error('❌ API Error:', err);
        setError('Failed to load projects from API. Using demo data.');
        
        // Fallback to static data
        setProjects(fallbackProjects);
        console.log('📋 Using fallback project data');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Fetch categories from API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getAllCategories();
        console.log('📊 Categories API Response:', response);
        console.log('📊 Categories Data Structure:', JSON.stringify(response, null, 2));
        const categoriesData = response.data?.categories || response.categories || response;
        
        if (Array.isArray(categoriesData)) {
          // Handle category objects with {id, name, count} structure
          const categoryNames = categoriesData.map(cat => 
            typeof cat === 'string' ? cat : cat.name || cat.category || cat
          );
          setCategories(categoryNames);
          console.log(`✅ Loaded ${categoryNames.length} categories from API`);
        }
      } catch (err) {
        console.error('❌ Error fetching categories:', err);
        // Use default categories if API fails
        setCategories(['AI Applications', 'IoT', 'Web Development', 'Mobile Development']);
      }
    };

    fetchCategories();
  }, []);

  // Fetch dashboard stats from API
  useEffect(() => {
    const fetchDashboardStats = async () => {
      try {
        const response = await getDashboardStats();
        const statsData = response.data?.stats || response.stats || response;
        
        if (statsData) {
          setDashboardStats(statsData);
          console.log('✅ Loaded dashboard stats from API');
        }
      } catch (err) {
        console.error('❌ Error fetching dashboard stats:', err);
        // Use default stats if API fails
        setDashboardStats({
          totalProjects: 500,
          clientSatisfaction: 98,
          industriesServed: 25,
          yearsExperience: 15
        });
      }
    };

    fetchDashboardStats();
  }, []);

  // Filter projects based on active tab
  const filteredProjects = useMemo(() => projects.filter(
    (project) => {
      if (activeTab === 'All Projects') return true;
      return project.category && project.category === activeTab;
    }
  ), [projects, activeTab]);

  // Use dashboard stats if available, otherwise use default hero metrics
  const heroMetrics = useMemo(() => dashboardStats ? [
    { value: `${dashboardStats.totalProjects}+`, label: 'Projects Completed' },
    { value: `${dashboardStats.clientSatisfaction}%`, label: 'Client Satisfaction' },
    { value: `${dashboardStats.industriesServed}+`, label: 'Industries Served' },
    { value: `${dashboardStats.yearsExperience}`, label: 'Years Experience' },
  ] : [
    { value: '500+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Satisfaction' },
    { value: '25+', label: 'Industries Served' },
    { value: '15', label: 'Years Experience' },
  ], [dashboardStats]);

  // Use categories from API if available, otherwise use default
  const projectTabs = useMemo(() => categories.length > 0 
    ? ['All Projects', ...categories.filter(cat => typeof cat === 'string' && cat.trim() !== '')] 
    : [
        'All Projects',
        'AI Applications',
        'IoT',
        'Web Development',
        'Mobile Development',
      ], [categories]);
  
  console.log('🔧 Final projectTabs:', projectTabs);
  console.log('🔧 Final categories:', categories);
  console.log('🔧 Filtered projects count:', filteredProjects.length);
  console.log('🔧 Loading state:', loading);
  console.log('🔧 Error state:', error);
  // Show loading state
  if (loading) {
    return (
      <div className="font-sans bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      {/* API Status Banner */}
      {error && (
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
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
      
      <HeroSection heroMetrics={heroMetrics} />
      <FeaturedProjects
        projectTabs={projectTabs}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        filteredProjects={filteredProjects}
      />
      <CaseStudy caseStudy={caseStudy} />
      <Metrics metrics={metrics} />
      <CTASection />
      {/* <Footer /> */}
    </div>
  );
}

export default Projects;
