import React from "react";
import { ExternalLink, Github } from "lucide-react";
import { motion, useInView } from "framer-motion";
import FadeInView from "./animations/FadeInView";

const projects = [
  {
    title: " Twitter / X clone",
    description: "A full-stack web application built with React and Node.js",
    image: "src/thumbnails/twitter.png",
    tech: [
      "React",
      "Express.js",
      "Node.js",
      "MongoDB",
      "Socket.io",
      "JSON web tokens",
      "Cloudinary",
      "Tailwind CSS",
    ],
    liveLink: "https://twitter-clone-57i7.onrender.com/",
    githubLink: "https://github.com/YashTirpude/Twitter-Clone",
  },
  {
    title: "M-E-R-N Chat",
    description: "A Real-time chat application using MERN stack",
    image: "src/chat.png",
    tech: [
      "React",
      "Express.js",
      "Node.js ",
      "MongoDB",
      "Socket.io",
      "JSON web tokens",
      "Tailwind CSS",
    ],
    liveLink: "https://mern-chat-1kh6.onrender.com",
    githubLink: "https://github.com/YashTirpude/Mern-Chat",
  },
  {
    title: "React Store",
    description:
      "A product data store with comprehensive data filtration features ",
    image: "src/thumbnails/store.png",
    tech: ["React", "Typescript", "Axios", "Tailwind CSS", "Daisy ui"],
    liveLink:
      "https://react-store-cnlb2fpv1-yashs-projects-d8eb281f.vercel.app/",
    githubLink: "https://github.com/YashTirpude/React-store",
  },
  {
    title: "Notes App",
    description:
      "An interactive and user-friendly note-taking using modern web technologies",
    image: "src/thumbnails/notes.png",
    tech: ["React", "TypeScript", "Tailwind CSS", "DaisyUI", "Framer Motion"],
    liveLink: "https://advance-notes-five.vercel.app/",
    githubLink: "https://github.com/YashTirpude/Advance-Notes",
  },
  {
    title: "Goal Tracking Web Application",
    description:
      "A web-based goal tracking application to monitor daily and weekly goals.",
    image: "src/thumbnails/goal-tracker.png",
    tech: ["React", "TypeScript", "Redux", "Redux Toolkit", "Material UI"],
    liveLink: "https://goal-tracker-blue.vercel.app/",
    githubLink: "https://github.com/YashTirpude/Goal-Tracker",
  },
];

const Projects = () => {
  const titleRef = React.useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <section id="projects" className="relative bg-gray-900 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900 to-gray-900"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          ref={titleRef}
          initial={{ opacity: 0, y: -20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-12"
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeInView key={index} delay={index * 0.2}>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-gray-700/50 backdrop-blur-sm text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-400 hover:text-purple-300"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-purple-400 hover:text-purple-300"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
