export const personalInfo = {
  name: "Pratibha Thote",
  role: "2nd Year B.Tech Student in CSE (AI) at IGDTUW",
  institution: "Indira Gandhi Delhi Technical University for Women (IGDTUW), Delhi",
  degree: "2nd Year B.Tech in Computer Science & Engineering (Artificial Intelligence)",
  tagline: "Building with AI, software, and problem-solving.",
  bio: "2nd Year B.Tech CSE (AI) student at IGDTUW with hands-on experience building machine learning prototypes, full-stack tools, and algorithmic systems. Focused on developing explainable AI models, robust backend APIs, and practical software solutions.",
  phone: "+91 8920824867",
  email: "pratibhthote151@gmail.com",
  links: {
    github: "https://github.com/pratibhathote",
    linkedin: "https://www.linkedin.com/in/pratibha-thote-1b822137b/",
    email: "mailto:pratibhthote151@gmail.com",
    phone: "tel:+918920824867"
  }
};

export const technicalSkills = {
  languages: [
    { name: "C++", detail: "DSA & Core Problem Solving" },
    { name: "Python", detail: "AI / ML, Scripting & Backend" },
    { name: "JavaScript", detail: "Frontend & Web Development" }
  ],
  aiMl: [
    { name: "Machine Learning", detail: "Supervised & Unsupervised Modeling" },
    { name: "NLP", detail: "Text & Scam Pattern Analysis" },
    { name: "Scikit-learn", detail: "Isolation Forest, Random Forest, Pipelines" },
    { name: "Pandas", detail: "Data Manipulation & Cleansing" },
    { name: "NumPy", detail: "Numerical Array Operations" }
  ],
  development: [
    { name: "React", detail: "Component Architecture & UI State" },
    { name: "FastAPI", detail: "High-Performance REST APIs" },
    { name: "HTML", detail: "Semantic Web Structure" },
    { name: "CSS", detail: "Modern Layouts & Print Styling" },
    { name: "REST APIs", detail: "Client-Server Contract Design" }
  ],
  coreCs: [
    { name: "Data Structures & Algorithms", detail: "Problem Solving & Analysis" },
    { name: "Object-Oriented Programming", detail: "Modularity & Design Principles" },
    { name: "DBMS", detail: "Database Management Concepts" },
    { name: "Git", detail: "Version Control & Branching" },
    { name: "GitHub", detail: "Open Source & Code Collaboration" }
  ],
  currentlyLearning: [
    { name: "DSA in C++", status: "Active Focus", detail: "Strengthening problem-solving and algorithmic fundamentals" },
    { name: "Advanced Machine Learning", status: "In Progress", detail: "Deep learning architectures & advanced modeling" },
    { name: "AI Agents", status: "In Progress", detail: "Autonomous agentic workflows & tooling" },
    { name: "Backend Development", status: "In Progress", detail: "Scalable systems & API design" }
  ]
};

export const featuredProject = {
  title: "PayShield",
  subtitle: "AI Pre-Payment Risk & Scam Analyzer",
  badge: "Primary Featured Project",
  badgeType: "featured",
  notice: "Prototype / Educational System using Synthetic Data (not for production banking)",
  description: "An AI-assisted pre-payment risk assessment system designed to analyze digital transaction behaviors and inspect suspicious payment messages before payment confirmation.",
  architecture: [
    {
      layer: "Client Layer",
      tech: "React Dashboard",
      role: "Interactive interface for transaction inputs, real-time message parsing, and visual risk factor breakdowns."
    },
    {
      layer: "API Layer",
      tech: "FastAPI Backend",
      role: "REST endpoints handling payload validation, inference execution, and explainability extraction."
    },
    {
      layer: "Inference Engine",
      tech: "Isolation Forest & NLP",
      role: "Anomaly detection for behavioral patterns combined with NLP heuristics for scam detection."
    },
    {
      layer: "Decision & Scorer",
      tech: "Risk Engine",
      role: "Composite scoring (0–100), LOW / MEDIUM / HIGH risk classification, and action recommendation."
    }
  ],
  keyFeatures: [
    "Transaction anomaly detection using Isolation Forest",
    "Explainable behavioral risk rules",
    "Scam-message analysis",
    "Risk score from 0–100",
    "LOW / MEDIUM / HIGH risk classification",
    "Explainable risk factors with clear attribution",
    "Recommended action output for end-user safety",
    "FastAPI backend with structured endpoints",
    "React dashboard for real-time visualization",
    "Deployed frontend and backend instances"
  ],
  techStack: ["Python", "Scikit-learn", "FastAPI", "React", "NLP"],
  links: {
    github: "https://github.com/pratibhathote/PayShield",
    liveDemo: "https://pay-shield-et0qvaj9v-pratibhathote.vercel.app/"
  }
};

export const otherProjects = [
  {
    id: "uav-digital-twin",
    title: "Aero Piston Engine Digital Twin for MALE UAVs",
    fullTitle: "AI-Enabled Real-Time Digital Twin System for Health Monitoring, Fault Prediction and Mission Reliability Enhancement of Aero Piston Engines used in MALE UAVs",
    tag: "Team Project (Contribution: Member 3 — RUL / Engine Health)",
    type: "Digital Twin / Predictive Maintenance",
    description: "Contributed as Member 3 in a team project building an AI-enabled digital twin system for aero piston engines in MALE UAVs, specifically leading the Remaining Useful Life (RUL) prediction and engine health/severity evaluation modules.",
    keyFocus: [
      "Remaining Useful Life (RUL) prediction",
      "Engine health/severity estimation",
      "Mission-wise evaluation",
      "ONNX model export and inference",
      "Predictive maintenance workflows",
      "Health/fault analysis"
    ],
    results: [
      { label: "Mission-wise RUL MAE", value: "0.68" },
      { label: "RUL RMSE", value: "3.61" },
      { label: "R² Score", value: "0.9924" },
      { label: "Severity Accuracy", value: "99.1%" }
    ],
    techStack: ["Python", "Machine Learning", "ONNX", "Predictive Analytics", "Data Modeling"]
  },
  {
    id: "predictive-waste-mgmt",
    title: "Predictive Waste Management System",
    tag: "Internship Project (IGDTUW Anveshan Foundation)",
    type: "ML Prediction Pipeline",
    description: "Developed an ML-based waste management system to predict waste collection requirements based on historical waste-management data during the Machine Learning & Generative AI summer internship.",
    keyFocus: [
      "Data preprocessing and cleansing pipelines",
      "Feature analysis on historical collection logs",
      "Random Forest prediction modeling",
      "End-to-end prediction pipeline",
      "Interactive prototype for operational insights"
    ],
    techStack: ["Python", "Machine Learning", "Random Forest", "Data Analysis", "Pandas"]
  }
];

export const experience = [
  {
    role: "Machine Learning & Generative AI Summer Intern",
    organization: "IGDTUW Anveshan Foundation",
    points: [
      "Worked with machine learning and generative-AI concepts using Python.",
      "Developed a predictive waste-management project using historical data.",
      "Applied data preprocessing, model training, evaluation, and deployment-oriented workflows."
    ]
  }
];

export const hackathonsAndPrograms = [
  {
    title: "ONE HACK 2026 — AI × Web3",
    subtitle: "Challenge: W3A-1 — Let AI Agents Buy Services Safely",
    type: "Technical Hackathon Build",
    description: "Engineered an autonomous service and payment pipeline enabling AI agents to pay for web services safely using machine-readable HTTP 402 protocols and on-chain verification.",
    highlights: [
      "AI-agent service/payment workflow",
      "x402-style payment flow",
      "Machine-readable HTTP 402 payment response",
      "Sepolia blockchain transaction verification",
      "Replay protection & cryptographic idempotency",
      "Deployed prototype application"
    ],
    techStack: ["Web3 / Sepolia", "HTTP 402 Protocol", "JavaScript / Node.js", "Express", "Crypto Verification"]
  },
  {
    title: "GirlScript Summer of Code 2026",
    subtitle: "Selected Participant — Open Source + AI Agent Track",
    type: "Open Source Program",
    description: "Selected for the competitive Open Source + AI Agent Track to collaborate on open-source ecosystems, software modularity, and AI agent architectures.",
    highlights: [
      "Selected for Open Source + AI Agent Track",
      "Collaborative development & version control practices",
      "Exploration of agentic tooling and open repositories"
    ],
    techStack: ["Git", "GitHub", "AI Agents", "Open Source"]
  }
];

export const learningJourney = [
  {
    step: "01",
    title: "Programming & C++ Fundamentals",
    category: "Foundation",
    description: "Built strong foundations in C++ syntax, object-oriented concepts, and procedural programming."
  },
  {
    step: "02",
    title: "Web Development Foundations",
    category: "Full Stack",
    description: "Learned semantic HTML, CSS, JavaScript, and modern frontend frameworks like React."
  },
  {
    step: "03",
    title: "Machine Learning & Data Analysis",
    category: "AI / ML",
    description: "Studied core ML algorithms, data manipulation with Pandas/NumPy, and model training with Scikit-learn."
  },
  {
    step: "04",
    title: "ML Internship & Waste Management",
    category: "Experience",
    description: "Built a predictive waste management system at IGDTUW Anveshan Foundation with Random Forest."
  },
  {
    step: "05",
    title: "Aero Piston Engine Digital Twin",
    category: "Research / Team Build",
    description: "Member 3 role on UAV aero engine digital twin: RUL prediction (R²: 0.9924) & ONNX inference export."
  },
  {
    step: "06",
    title: "ONE HACK 2026 (AI × Web3)",
    category: "Hackathon",
    description: "Built x402-style machine-readable payment protocol for AI agents with Sepolia verification."
  },
  {
    step: "07",
    title: "PayShield: Pre-Payment Risk Analyzer",
    category: "Featured Project",
    description: "Engineered pre-payment risk analyzer prototype combining Isolation Forest anomaly detection & NLP rules."
  },
  {
    step: "08",
    title: "Active Learning: DSA in C++",
    category: "Current Focus",
    description: "Actively strengthening problem-solving and algorithmic fundamentals through rigorous DSA practice in C++."
  }
];
