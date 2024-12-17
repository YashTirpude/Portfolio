import { projectsData } from "../data/projectData";
import ProjectTitle from "./ProjectTitle";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="relative bg-gray-900 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-900 to-gray-900" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-purple-600/5 via-transparent to-transparent rotate-12 transform-gpu" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-pink-600/5 via-transparent to-transparent -rotate-12 transform-gpu" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectTitle />

        <div className="divide-y divide-gray-800/50">
          {projectsData.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
