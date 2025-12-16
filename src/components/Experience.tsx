import React from "react";
import { motion, useInView } from "framer-motion";
import { experienceData } from "../data/experienceData";
import ExperienceCard from "./experience/ExperienceCard";
import ExperienceTitle from "./experience/ExperienceTitle";

const Experience = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="relative bg-gray-900 py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-gray-900 to-gray-900" />

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-600/5 via-transparent to-transparent rotate-45 transform-gpu" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-gradient-to-tl from-purple-600/5 via-transparent to-transparent -rotate-45 transform-gpu" />
      </div>

      <div
        ref={sectionRef}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <ExperienceTitle />

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 origin-top hidden md:block"
          />

          <div className="space-y-12">
            {experienceData.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
