const employees = [
  {
    id: 1,
    firstname: "Aarav",
    email: "e@e.com",
    password: "p12",
    TaskCounts: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Design Landing Page",
        description: "Create a clean and responsive UI for the homepage with proper layout, attractive visuals, and a user-friendly design.",
        taskDate: "2026-03-25",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve the mobile responsiveness issue in the navigation bar and make sure all menu items work correctly on smaller screens.",
        taskDate: "2026-03-24",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update Logo",
        description: "Replace the old logo with the latest company logo in all required assets and ensure it displays correctly across the website.",
        taskDate: "2026-03-23",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 2,
    firstname: "Vihaan",
    email: "employee2@example.com",
    password: "password12",
    TaskCounts: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "API Integration",
        description: "Connect the frontend application with the backend APIs and ensure that data is fetched, displayed, and handled correctly.",
        taskDate: "2026-03-25",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Write Unit Tests",
        description: "Add comprehensive unit test cases for the authentication module to verify login, validation, and error-handling functionality.",
        taskDate: "2026-03-22",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix Login Error",
        description: "Identify and resolve the incorrect validation issue during login and make sure valid users can successfully access their accounts.",
        taskDate: "2026-03-21",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Optimize Images",
        description: "Compress and optimize website images without significantly reducing quality to improve page loading speed and overall performance.",
        taskDate: "2026-03-20",
        category: "Performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 3,
    firstname: "Ishaan",
    email: "employee3@example.com",
    password: "password12",
    TaskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Database Setup",
        description: "Configure the MongoDB database schema with the required collections, fields, relationships, and validation rules for the application.",
        taskDate: "2026-03-25",
        category: "Backend",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Backup Data",
        description: "Take a complete weekly backup of the database and verify that the backup can be restored successfully when required.",
        taskDate: "2026-03-23",
        category: "Maintenance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix Query Issue",
        description: "Analyze and optimize the slow database queries to improve response time and ensure the application performs efficiently.",
        taskDate: "2026-03-22",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },

  {
    id: 4,
    firstname: "Aditya",
    email: "employee4@example.com",
    password: "password12",
    TaskCounts: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Client Meeting",
        description: "Discuss the current project requirements with the client, clarify important details, and finalize the upcoming development tasks.",
        taskDate: "2026-03-25",
        category: "Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Prepare Report",
        description: "Prepare a detailed weekly progress report covering completed tasks, ongoing work, project updates, and upcoming priorities.",
        taskDate: "2026-03-24",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Email Follow-up",
        description: "Send follow-up emails to clients regarding pending discussions, project updates, and any information required from their side.",
        taskDate: "2026-03-23",
        category: "Communication",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Team Sync",
        description: "Conduct the daily team standup meeting to discuss progress, current blockers, completed work, and the tasks planned for the day.",
        taskDate: "2026-03-22",
        category: "Management",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },

  {
    id: 5,
    firstname: "Krishna",
    email: "employee5@example.com",
    password: "password12",
    TaskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "SEO Optimization",
        description: "Improve the website's search engine rankings by optimizing keywords, page structure, metadata, and other important SEO factors.",
        taskDate: "2026-03-25",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Content Writing",
        description: "Write an informative and engaging blog post for the website that provides useful information and follows the required content guidelines.",
        taskDate: "2026-03-24",
        category: "Content",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Social Media Post",
        description: "Create and schedule engaging Instagram posts for the upcoming campaign while maintaining consistent branding and messaging.",
        taskDate: "2026-03-23",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  }
];

const admin = [
  {
    id: 101,
    email: "admin@me.com",
    password: "p12"
  }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees, admin}
}