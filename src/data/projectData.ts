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
    liveLink: "https://mern-chat-1kh6.onrender.com",
    githubLink: "https://github.com/YashTirpude/Mern-Chat",
  },
  {
    title: "Real-Time Chat App",
    description: "A Real-time chat application using MERN stack",
    longDescription:
      "A real-time chat application built with React and MongoDB. Features include instant messaging, user presence detection, and message encryption.",
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
    liveLink:
      "https://react-store-cnlb2fpv1-yashs-projects-d8eb281f.vercel.app/",
    githubLink: "https://github.com/YashTirpude/React-store",
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
      "A comprehensive task management system built with the MERN stack. Features include task creation, assignment, real-time updates, team collaboration, and detailed analytics.",
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
