import { TechBadge } from "../types";

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tech: TechBadge[];
  liveLink: string;
  githubLink: string;
}

export const projectsData: Project[] = [
  {
    title: "Job Application Tracker",
    description: "A full-stack web application built with React and Node.js",
    longDescription:
      "Streamline your job search with this full-stack Job Application Tracker, built using React and Node.js. The application allows users to manage their job applications efficiently, featuring real-time status updates, resume uploads, and infinite scrolling for seamless navigation.",
    image: "/job-tracker.png",
    tech: [
      { name: "React.js", color: "bg-black" },
      { name: "Node.js", color: "bg-blue-600" },
      { name: "MongoDB", color: "bg-purple-600" },
      { name: "Express.js", color: "bg-teal-500" },
      { name: "Redux", color: "bg-purple-500" },
      { name: "Tailwind CSS", color: "bg-teal-500" },
      { name: "Framer Motion", color: "bg-pink-500" },
      { name: "Supabase", color: "bg-teal-500" },
      { name: "Axios", color: "bg-blue-400" },
    ],
    liveLink: "https://job-application-tracker-orcin.vercel.app/applications",
    githubLink: "https://github.com/YashTirpude/job-application-tracker",
  },
  {
    title: " Twitter / X clone",
    description: "A full-stack web application built with React and Node.js",

    longDescription:
      "Dive into social networking with our full-stack Twitter / X clone, built with React and Node.js. Designed to emulate the popular platform, it offers all the essential features for a seamless and engaging user experience.",
    image: "/twitter.png",
    tech: [
      { name: "React.js", color: "bg-black" },
      { name: "Node.js", color: "bg-blue-600" },
      { name: "MongoDB", color: "bg-purple-600" },
      { name: "Socket.io", color: "bg-blue-400" },
      { name: "Express.js", color: "bg-teal-500" },
      { name: "JSON web tokens", color: "bg-teal-500" },
      { name: "Cloudinary", color: "bg-teal-500" },
      { name: "Tailwind CSS", color: "bg-teal-500" },
    ],
    liveLink: "https://twitter-clone-57i7.onrender.com",
    githubLink: "https://github.com/YashTirpude/Twitter-Clone",
  },
  {
    title: "React Store (E-commerce Product Explorer)",
    description:
      "An e-commerce platform with advanced search and filtering features, optimized for mobile devices using React.js and Tailwind CSS",

    longDescription:
      "React Store is a fully functional e-commerce platform using React.js and TypeScript, featuring advanced search and filtering capabilities for an enhanced user experience. Integrated Axios to fetch real-time product data and implemented a responsive design with Tailwind CSS, ensuring seamless usability across devices. Optimized the interface to increase user engagement on mobile by 40% and provided detailed product views for better customer decision-making.",
    image: "/store.png",
    tech: [
      { name: "React.js", color: "bg-black" },
      { name: "TypeScript", color: "bg-green-600" },
      { name: "Axios", color: "bg-blue-400" },
      { name: "Tailwind CSS", color: "bg-teal-500" },
    ],
    liveLink: "https://react-store-umber.vercel.app/",
    githubLink: "https://github.com/YashTirpude/React-store",
  },
  {
    title: "Real-Time Chat App",
    description: "A Real-time chat application using MERN stack",
    longDescription:
      "Designed and built a real-time chat application using React for the frontend and MongoDB for database management. Implemented instant messaging with WebSockets for seamless communication, along with user presence detection to display real-time online status.The platform offers a responsive interface for smooth user experience across devices and supports scalable multi-user interactions.",
    image: "/chat.png",
    tech: [
      { name: "React.js", color: "bg-cyan-500" },
      { name: "MongoDB", color: "bg-purple-600" },
      { name: "Express.js", color: "bg-teal-500" },
      { name: "Socket.io", color: "bg-blue-400" },
      { name: "WebSocket", color: "bg-green-500" },
      { name: "JSON web tokens", color: "bg-teal-500" },
      { name: "Tailwind CSS", color: "bg-teal-500" },
    ],
    liveLink: "https://mern-chat-1kh6.onrender.com",
    githubLink: "https://github.com/YashTirpude/Mern-Chat",
  },
  {
    title: "Notes App",
    description:
      "An interactive and user-friendly note-taking using modern web technologies",
    longDescription:
      "Easily keep track of your thoughts, ideas, and tasks with our user-friendly Notes App. Built with cutting-edge web technologies, it offers seamless note-taking and organization, making your life a little bit simpler.",
    image: "/notes.png",
    tech: [
      { name: "TypeScript", color: "bg-green-600" },
      { name: "Framer Motion", color: "bg-gray-600" },
      { name: "React.js", color: "bg-cyan-500" },
      { name: "Node.js", color: "bg-green-500" },
      { name: "Tailwind CSS", color: "bg-black" },
      { name: "DaisyUI", color: "bg-black" },
    ],
    liveLink: "https://advance-notes-five.vercel.app/",
    githubLink: "https://github.com/YashTirpude/Advance-Notes",
  },
  {
    title: "Goal Tracking Web Application",
    description:
      "A web-based goal tracking application to monitor daily and weekly goals.",
    longDescription:
      "Elevate your productivity with our sophisticated Goal Tracking Web Application, meticulously designed to streamline the monitoring of daily and weekly objectives.",
    image: "/goal-tracker.png",
    tech: [
      { name: "React.js", color: "bg-cyan-500" },
      { name: "TypeScript", color: "bg-green-600" },
      { name: "Redux Toolkit", color: "bg-green-500" },
      { name: "Material UI", color: "bg-black" },
    ],

    liveLink: "https://goal-tracker-blue.vercel.app/",
    githubLink: "https://github.com/YashTirpude/Goal-Tracker",
  },
];
