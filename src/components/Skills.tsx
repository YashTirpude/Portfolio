import React from "react";
import { motion, useInView } from "framer-motion";
import { skillsData } from "../data/skillsData";
import SkillItem from "./SkillItem";
import FadeInView from "./animations/FadeInView";

const Skills = () => {
  const titleRef = React.useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <section id="skills" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={titleRef} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Skills & Technologies
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-600 mx-auto mt-4"
          />
        </motion.div>

        <div className="overflow-x-auto pb-4">
          <div className="flex flex-wrap justify-center gap-4">
            {skillsData.map((skill, index) => (
              <FadeInView
                key={skill.name}
                delay={index * 0.1}
                className="flex-shrink-0"
              >
                <SkillItem
                  name={skill.name}
                  icon={skill.icon}
                  color={skill.color}
                />
              </FadeInView>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
