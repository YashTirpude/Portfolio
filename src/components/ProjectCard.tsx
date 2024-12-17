import React from "react";
import { Project } from "../data/projectData";
import ProjectImage from "./ProjectImage";
import ProjectContent from "./ProjectContent";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className="relative py-16 first:pt-0 last:pb-0">
      <div
        className={`flex flex-col lg:flex-row gap-12 ${
          isEven ? "" : "lg:flex-row-reverse"
        }`}
      >
        <ProjectImage src={project.image} alt={project.title} isEven={isEven} />
        <ProjectContent project={project} isEven={isEven} />
      </div>
    </div>
  );
};

export default ProjectCard;
