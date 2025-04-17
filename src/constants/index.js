import {
  mobile,
  backend,
  web,
  javascript,
  java,
  tableau,
  google,
  reactjs,
  rprog,
  powerpoint,
  powerbi,
  excel,
  git,
  figma,
  fathom,
  resil,
  frameflow,
  carrent,
  jobit,
  tripguide,
  threejs, 
  python,
  sql
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Data Analyst",
    icon: web,
  },
  {
    title: "AI & ML Developer",
    icon: mobile,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "Google",
    icon: google,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "PowerPoint",
    icon: powerpoint,
  },
  {
    name: "Excel",
    icon: excel,
  },
  {
    name: "Power BI",
    icon: powerbi,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Tableau",
    icon: tableau,
  },
  {
    name: "R Programming",
    icon: rprog,
  }
];

const experiences = [
  {
    title: "AI & Machine Learning Intern",
    company_name: "Fathom Realty",
    icon: fathom,
    iconBg: "#383E56",
    date: "February 2025 - Present",
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
    iconBg: "#383E56",
    date: "May 2024 - August 2024",
    points: [
      "Diagnosed and resolved 100+ technical issues across hardware, software, and network systems, including troubleshooting system errors, connectivity failures, and software malfunctions to minimize downtime and maintain operational continuity.",
      "Streamlined IT support processes by implementing efficient troubleshooting protocols and root cause analysis, reducing average ticket resolution time by 30% and significantly improving team productivity.",
      "Collaborated with cross-functional teams to escalate and resolve complex technical challenges, ensuring seamless operations and minimizing impact on business workflows."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
