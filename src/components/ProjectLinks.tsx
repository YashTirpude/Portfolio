import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface ProjectLinksProps {
  liveLink: string;
  githubLink: string;
}

const ProjectLinks: React.FC<ProjectLinksProps> = ({
  liveLink,
  githubLink,
}) => {
  return (
    <div className="flex gap-4">
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={liveLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 
          text-white font-medium rounded-lg hover:from-purple-500 hover:to-pink-500 
          transition-all duration-300 shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
      >
        <ExternalLink size={16} className="mr-2" />
        Live Demo
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-6 py-2.5 bg-gray-800/50 text-gray-300 font-medium
          rounded-lg hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50"
      >
        <Github size={16} className="mr-2" />
        View Code
      </motion.a>
    </div>
  );
};

export default ProjectLinks;
