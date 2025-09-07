// Mock data for development (replace with database queries later)
const mockProjects = [
  {
    id: '1',
    title: 'AI-Powered Analytics Platform',
    client: 'Global Retail Corp',
    image: '/ProjectImages/analytics.png',
    progress: 75,
    dueDate: '2024-08-15',
    completed: false,
    category: 'AI Applications',
    description: 'Advanced analytics platform for retail insights',
    createdAt: '2024-01-15',
    status: 'active'
  },
  {
    id: '2',
    title: 'Smart Home Automation System',
    client: 'Tech Startup Inc',
    image: '/ProjectImages/smart-home.png',
    progress: 100,
    dueDate: '2024-05-20',
    completed: true,
    category: 'IoT',
    description: 'Complete home automation solution',
    createdAt: '2024-02-20',
    status: 'completed'
  },
  {
    id: '3',
    title: 'Predictive Maintenance Software',
    client: 'Industrial Solutions Ltd',
    image: '/ProjectImages/maintainance.png',
    progress: 25,
    dueDate: '2024-11-30',
    completed: false,
    category: 'AI Applications',
    description: 'Predictive maintenance for industrial equipment',
    createdAt: '2024-03-10',
    status: 'active'
  },
  {
    id: '4',
    title: 'Custom CRM Development',
    client: 'Business Growth Partners',
    image: '/ProjectImages/crm.png',
    progress: 60,
    dueDate: '2024-09-22',
    completed: false,
    category: 'Web Development',
    description: 'Custom CRM system for business management',
    createdAt: '2024-04-05',
    status: 'active'
  },
  {
    id: '5',
    title: 'Mobile App for Healthcare',
    client: 'Health Innovations LLC',
    image: '/ProjectImages/healthcare.png',
    progress: 100,
    dueDate: '2024-04-10',
    completed: true,
    category: 'Mobile Development',
    description: 'Healthcare mobile application',
    createdAt: '2024-05-12',
    status: 'completed'
  }
];

const mockCategories = [
  { id: '1', name: 'AI Applications', count: 2 },
  { id: '2', name: 'IoT', count: 1 },
  { id: '3', name: 'Web Development', count: 1 },
  { id: '4', name: 'Mobile Development', count: 1 }
];

const mockDashboardStats = {
  totalProjects: 5,
  activeProjects: 3,
  completedProjects: 2,
  averageProgress: 72,
  totalRevenue: '$150K',
  averageProjectDuration: '4 months'
};

// Get all projects
export const getAllProjects = async (req, res) => {
  try {
    // TODO: Replace with database query
    // const projects = await Project.find({}).sort({ createdAt: -1 });
    
    return res.status(200).json({
      success: true,
      data: {
        projects: mockProjects
      },
      message: "Projects fetched successfully"
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching projects",
      error: error.message
    });
  }
};

// Get project by ID
export const getProjectById = async (req, res) => {
  try {
    const { id } = req.params;
    
    // TODO: Replace with database query
    // const project = await Project.findById(id);
    const project = mockProjects.find(p => p.id === id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        message: "Project not found"
      });
    }
    
    return res.status(200).json({
      success: true,
      data: {
        project
      },
      message: "Project fetched successfully"
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching project",
      error: error.message
    });
  }
};

// Create new project
export const createProject = async (req, res) => {
  try {
    const projectData = req.body;
    
    // TODO: Replace with database creation
    // const project = await Project.create(projectData);
    const newProject = {
      id: String(mockProjects.length + 1),
      ...projectData,
      createdAt: new Date().toISOString().split('T')[0],
      status: 'active'
    };
    
    mockProjects.push(newProject);
    
    return res.status(201).json({
      success: true,
      data: {
        project: newProject
      },
      message: "Project created successfully"
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating project",
      error: error.message
    });
  }
};

// Get all categories
export const getAllCategories = async (req, res) => {
  try {
    // TODO: Replace with database query
    // const categories = await Category.find({});
    
    return res.status(200).json({
      success: true,
      data: {
        categories: mockCategories
      },
      message: "Categories fetched successfully"
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching categories",
      error: error.message
    });
  }
};

// Get dashboard stats
export const getDashboardStats = async (req, res) => {
  try {
    // TODO: Replace with database aggregation
    // const stats = await Project.aggregate([...]);
    
    return res.status(200).json({
      success: true,
      data: {
        stats: mockDashboardStats
      },
      message: "Dashboard stats fetched successfully"
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error fetching dashboard stats",
      error: error.message
    });
  }
};
