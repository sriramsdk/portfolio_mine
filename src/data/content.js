export const PROFILE = {
  name: "Sriram.R",
  role: "Full-stack Software Developer",
  location: "Coimbatore, Tamilnadu, India",
  experience: "3+ years",
  email: "sriramkundhan716@gmail.com",
  phone: "+91-9384222707",
  socials: {
    github: "https://github.com/sriramsdk",
    linkedin: "https://linkedin.com/in/yourusername",
    portfolio: "https://sriram-sdk-portfolio.netlify.app/"
  }
};

export const INTRO = {
  headline: "Building fast, reliable web apps with PHP ecosystems, MERN, Python and Flutter.",
  summary:
    "Full-stack Software Developer with 3+ years of experience building production web applications and mobile apps using PHP (Laravel, CodeIgniter 3/4, Drupal, WordPress), MERN (MongoDB, Express, React, Node.js), Python (Frappe) and Flutter (Dart). Focused on clean architecture, performance, and maintainable code—delivering user-friendly interfaces backed by reliable APIs and database-driven systems."
};

export const SKILLS = [
  { group: "PHP", items: ["Laravel", "CodeIgniter 3", "CodeIgniter 4", "Drupal", "WordPress"] },
  { group: "MERN", items: ["React", "Node.js", "Express", "MongoDB", "REST APIs"] },
  { group: "Python", items: ["Automation", "Scripting", "API Integration", "Frappe"] },
  { group: "Flutter", items: ["Flutter", "Dart", "REST APIs", "State management"] },
  { group: "Database", items: ["MySQL", "MongoDB"] },
  { group: "Tools", items: ["Git", "SFTP" , "WSL", "Linux", "Postman", "Deployment (Netlify)"] }
];

export const PROJECTS = [
  {
    title: "SDK Portal",
    subtitle: "Full-stack Web App",
    stack: ["React", "Node", "Express" ,"MongoDB", "REST"],
    impact: ["Minimal UI with fully functional React Web App", "Works with connecting REST API from Node backend and MongoDB database "],
    description:
      "I developed a Register and Request Portal for my editing work. The portal is for users can register and request to edit video or photo for their occations and others",
    links: {
      live: "https://sdk-mern.netlify.app/",
      github: "https://github.com/sriramsdk/my_mern_react"
    }
  },
  {
    title: "SDK App",
    subtitle: "Mobile App",
    stack: ["Flutter", "Dart" ,"Node.js", "MongoDB" , "REST"],
    impact: ["Implemented role-based auth", "Built reusable components"],
    description:
      "I built an App following the SDK portal where users and requests in mobile App also",
    links: {
      live: "",
      github: "https://github.com/sriramsdk/sdk_edits_app"
    }
  },
  {
    title: "Online E-cart",
    subtitle: "CMS / Website",
    stack: ["PHP", "Codeigniter 3"],
    impact: ["SEO-friendly pages", "Optimized performance"],
    description:
      "Developed an product ordering software where users can register and order products . Separated role-based access on single site view",
    links: {
      live: "",
      github: "https://github.com/sriramsdk/online_ecart"
    }
  },
  {
    title: "My Portfolio",
    subtitle: "React App",
    stack: ["React"],
    impact: ["Contrast UI"],
    description:
      "Developed a portfolio app for my recruiters to analyse my skills",
    links: {
      live: "",
      github: "https://github.com/sriramsdk/online_ecart"
    }
  }
];

export const EXPERIENCE = [
  {
    title: "Software Developer",
    company: "Your Company",
    period: "2022 — Present",
    points: [
      "Built and maintained web applications using Laravel/CodeIgniter and React.",
      "Designed REST APIs and integrated third-party services.",
      "Improved performance, reliability, and developer experience with cleaner architecture."
    ]
  }
];
