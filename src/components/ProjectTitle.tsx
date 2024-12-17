import React from "react";
import { motion, useInView } from "framer-motion";

const ProjectTitle = () => {
  const titleRef = React.useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <motion.div ref={titleRef} className="text-center mb-16">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
          Featured Projects
        </span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 text-gray-400 max-w-2xl mx-auto"
      >
        Here are some of my recent projects that showcase my skills and
        experience
      </motion.p>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="w-24 h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mx-auto mt-6"
      />
    </motion.div>
  );
};

export default ProjectTitle;
