import { data } from "autoprefixer";
import {
  mobile,
  backend,
  datanalyst,
  javascript,
  cognizant,
  java,
  cmeye,
  tableau,
  frameflow2,
  google,
  reactjs,
  rprog,
  blender,
  powerpoint,
  powerbi,
  excel,
  git,
  figma,
  fathom,
  resil,
  frameflow,
  carrent,
  portfolio,
  jobit,
  tripguide,
  threejs, 
  python,
  sql,
  aws,
  softdev,
  sharepoint,
  lego
} from "../assets";

export const navLinks = [
  {
    id: "me",
    title: "Me",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "projects",
    title: "Projects",
  },  
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Analyst",
    icon: datanalyst,
  },
  {
    title: "AI & ML Developer",
    icon: mobile,
  },
  {
    title: "VR/AR Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: softdev,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
    description: "Powering every interactive feature on my portfolio — from 3D models to API calls.",
  },
  {
    name: "React JS",
    icon: reactjs,
    description: "Built this entire portfolio and multiple AI-powered apps with React's component-based magic.",
  },
  {
    name: "AWS",
    icon: aws,
    description: "Used S3, Lambda, and Rekognition in my AI travel planner and motion capture apps.",
  },
  {
    name: "Google",
    icon: google,
    description: "Integrated Firebase for real-time storage and auth in my image-based landmark app.",
  },
  {
    name: "Python",
    icon: python,
    description: "The brains behind my AI projects — powering pose estimation, ASL recognition, and more.",
  },
  {
    name: "Java",
    icon: java,
    description: "Built core backend systems and design pattern-heavy applications for coursework and labs.",
  },
  {
    name: "PowerPoint",
    icon: powerpoint,
    description: "Transformed my projects into visual stories for hackathons, pitches, and portfolio showcases.",
  },
  {
    name: "Excel",
    icon: excel,
    description: "Used in data analysis projects — especially for cleaning and visualizing financial and survey data.",
  },
  {
    name: "Power BI",
    icon: powerbi,
    description: "Created live dashboards to track trends and performance in analytics-focused projects.",
  },
  {
    name: "Three JS",
    icon: threejs,
    description: "Enabled real-time 3D model rendering across my portfolio — including animated avatars.",
  },
  {
    name: "Figma",
    icon: figma,
    description: "Mapped out every UI/UX flow before building apps — from dance instructors to smart glasses.",
  },
  {
    name: "SQL",
    icon: sql,
    description: "Queried and structured large data sets in backend systems and analytics pipelines.",
  },
  {
    name: "Git",
    icon: git,
    description: "The backbone of version control for every project — solo and collaborative.",
  },
  {
    name: "Tableau",
    icon: tableau,
    description: "Visualized business data for coursework and internship reports with interactive storytelling.",
  },
  {
    name: "R Programming",
    icon: rprog,
    description: "Used for statistical analysis and modeling during research and academic data projects.",
  },
  {
    name: "Sharepoint",
    icon: sharepoint,
    description: "Collaborated with teams via document management and process tracking during my internship.",
  },
  {
    name: "Blender",
    icon: blender,
    description: "Learned specifically to create and animate my 3D character models for this portfolio.",
  }
];

const experiences = [
  {
    title: "Software Associate Intern",
    company_name: "Cognizant",
    icon: cognizant,
    iconBg: "#FFFFFF",
    date: "June 2025 - Present",
    points: [
      "Assisted in the development of internal web applications using React.js and Java Spring Boot, streamlining key workflows across finance and operations teams.",
      "Participated in daily Agile stand-ups, sprint planning, and code reviews alongside senior engineers to improve code quality and maintain consistent deployment cycles.",
      "Built RESTful APIs and integrated third-party services to enable data retrieval and automation features for client-facing applications.",
      "Utilized tools like Git, JIRA, and Jenkins to manage version control, track development tasks, and support CI/CD pipelines.",
    ],
  },
  {
    title: "AI & Machine Learning Intern",
    company_name: "Fathom Realty",
    icon: fathom,
    iconBg: "#FFFFFF",
    date: "February 2025 - May 2025",
    points: [
      "Researched and deployed AI-driven solutions—including chatbots and predictive analytics—to enhance real estate operations, targeting a 20% increase in client engagement and response efficiency.",
      "Managed 10,000+ structured and unstructured data points for AI model training, ensuring high-quality inputs to improve predictive accuracy by 15%.",
      "Led end-to-end project execution, from planning and documentation to user testing, ensuring seamless AI integration and performance optimization.",
      "Collaborated with engineering, product, and business teams to design scalable AI systems, aligning technology with client needs and operational goals.",
    ],
  },
  {
    title: "AI Software Developer + Front-End Developer",
    company_name: "FRAMEFLOW | PREPPER | EXPENSETRACKER",
    icon: frameflow,
    iconBg: "#E6DEDD",
    date: "December 2024 - Present",
    points: [
      "Developing an AI-powered dance instruction app using Machine Learning techniques such as pose estimation (MediaPipe, OpenPose) and motion analysis (LSTMs, 3D CNNs) to compare user movements with expert choreography.",
      "Developed Prepper.ai, an AI-powered recipe generator using image recognition to scan 100+ ingredients and create personalized 7-day meal plans.",
      "Built ExpenseTracker, a standalone Java-based desktop application that allows users to record, filter, and visualize personal expenses. Features include category-based filtering, total spend summaries, and data persistence using file I/O."
    ],
  },
  {
    title: "IT Helpdesk Intern",
    company_name: "Resilience Inc.",
    icon: resil,
    iconBg: "#FFFFFF",
    date: "May 2024 - August 2024",
    points: [
      "Diagnosed and resolved 100+ technical issues across hardware, software, and network systems, including troubleshooting system errors, connectivity failures, and software malfunctions to minimize downtime and maintain operational continuity.",
      "Streamlined IT support processes by implementing efficient troubleshooting protocols and root cause analysis, reducing average ticket resolution time by 30% and significantly improving team productivity.",
      "Collaborated with cross-functional teams to escalate and resolve complex technical challenges, ensuring seamless operations and minimizing impact on business workflows."
    ],
  },
];

const projects = [
  {
    name: "FrameFlow",
    description:
      "FrameFlow is a cutting-edge, AI-driven platform that helps dancers of all levels learn, perfect, and freestyle their moves with real-time feedback. Whether you're a beginner or a pro, FrameFlow transforms your space into a virtual dance studio—no instructor needed!.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      }
    ],
    image: frameflow2,
    source_code_link: "https://github.com/kduvvuri1/FrameFlow",
  },
  {
    name: "Prepper",
    description:
      "Prepper is an AI-powered recipe generator that creates personalized 7-day meal plans based on the ingredients you have. By using a chatbot interface, users can input available items and dietary preferences, and receive tailored, delicious recipes.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
      {
        name: "gemini",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/kduvvuri1/Prepper",
  },
  {
    name: "ExpenseTracker GUI",
    description:
      "ExpenseTracker is a standalone Java-based desktop application that allows users to record, filter, and visualize personal expenses. Features include category-based filtering, total spend summaries, and data persistence using file I/O.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "javafx",
        color: "green-text-gradient",
      },
      {
        name: "fileio",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/kduvvuri1/ExpenseTracker",
  },
    {
    name: "Lego Data Analysis",
    description:
      "Analyzed dataset of 15,000+ LEGO sets spanning multiple decades to identify trends in theme longevity, piece count evolution, and pricing adjustments over time. Visualized data insights using Matplotlib, Seaborn, and Pandas to create interactive and static plots including heatmaps, trendlines, and distribution graphs",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "r-programming",
        color: "pink-text-gradient",
      },
      {
        name: "jupyter notebook",
        color: "green-text-gradient",
      }
    ],
    image: lego,
    source_code_link: "https://github.com/kduvvuri1/Lego-Data-Analysis",
  },
  {
    name: "Portfolio",
    description:
      "This portfolio showcases my projects, skills, and experiences in a visually appealing and interactive format. Built using React.js, Tailwind CSS, and Three.js, slong with extensive hardwork involving learning Blender, it expresses my commitment to technology and design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "blender",
        color: "green-text-gradient",
      },
      {
        name: "threejs",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "yellow-text-gradient",
      },
      {
        name: "vite",
        color: "orange-text-gradient",
      }
    ],
    image: portfolio,
    source_code_link: "https://github.com/kduvvuri1/MyPortfolio",
  },
  {
    name: "CaughtMyEye",
    description:
      "CaughtMyEye is a web application that allows users to upload images and receive AI-generated captions. Built using React.js and OpenAI's API, it provides a user-friendly interface for image captioning.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "orange-text-gradient",
      },
      {
        name: "firebase",
        color: "yellow-text-gradient",
      },
      {
        name: "figma",
        color: "purple-text-gradient",
      }
    ],
    image: cmeye,
    source_code_link: "",
  }
];

export { services, technologies, experiences, projects };
