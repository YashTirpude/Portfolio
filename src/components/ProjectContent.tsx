import React from "react";
import { motion } from "framer-motion";
import { Project } from "../data/projectData";
import TechBadge from "./TechBadge";
import ProjectLinks from "./ProjectLinks";

interface ProjectContentProps {
  project: Project;
  isEven: boolean;
}

const ProjectContent: React.FC<ProjectContentProps> = ({ project, isEven }) => {
  return (
    <div className="lg:w-1/2 flex flex-col justify-center">
      <motion.div
        initial={{ opacity: 0, x: isEven ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="space-y-6"
      >
        <div>
          <h3 className="text-3xl font-bold text-white mb-2">
            {project.title}
          </h3>
          <p className="text-lg text-purple-400">{project.description}</p>
        </div>

        <p className="text-gray-300 leading-relaxed">
          {project.longDescription}
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="flex flex-wrap gap-2"
        >
          {project.tech.map((tech, techIndex) => (
            <TechBadge key={techIndex} tech={tech} />
          ))}
        </motion.div>

        <ProjectLinks
          liveLink={project.liveLink}
          githubLink={project.githubLink}
        />
      </motion.div>
    </div>
  );
};

export default ProjectContent;
