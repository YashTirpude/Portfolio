import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectData";
import ProjectTitle from "./ProjectTitle";
import ProjectCard from "./ProjectCard";

interface Star {
  id: number;
  size: number;
  top: string;
  left: string;
  duration: number;
}

const Projects = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Creating a sparse star field for the projects section
    const starArray: Star[] = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 0.5,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 4 + 3,
    }));
    setStars(starArray);
  }, []);

  return (
    <section
      id="projects"
      className="relative bg-[#030014] py-24 overflow-hidden"
    >
      {/* 1. Deep Space Background & Nebula */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-[#030014] to-[#030014]" />

        {/* Large, slow-moving nebula clouds */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[10%] -left-[10%] w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute -bottom-[10%] -right-[10%] w-[700px] h-[700px] bg-pink-600/5 blur-[150px] rounded-full"
        />
      </div>

      {/* 2. Twinkling Star Field */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            animate={{ opacity: [0.1, 0.8, 0.1], scale: [1, 1.2, 1] }}
            transition={{ duration: star.duration, repeat: Infinity }}
            className="absolute bg-white rounded-full"
            style={{
              width: star.size,
              height: star.size,
              top: star.top,
              left: star.left,
              boxShadow: `0 0 ${star.size * 2}px rgba(255, 255, 255, 0.8)`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectTitle />

        {/* 3. Project Grid / List */}
        <div className="mt-16 space-y-24">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
