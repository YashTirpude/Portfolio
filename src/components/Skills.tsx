import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { skillsData } from "../data/skillsData";
import SkillItem from "./SkillItem";
import FadeInView from "./animations/FadeInView";

interface Star {
  id: number;
  size: number;
  top: string;
  left: string;
  duration: number;
}

const Skills = () => {
  const titleRef = React.useRef(null);
  const isInView = useInView(titleRef, { once: true });
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const starArray: Star[] = Array.from({ length: 35 }).map((_, i) => ({
      id: i,
      size: Math.random() * 1.5 + 0.5,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 2,
    }));
    setStars(starArray);
  }, []);

  return (
    <section
      id="skills"
      className="relative bg-[#030014] py-24 overflow-hidden"
    >
      {/* 1. Cosmic Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Central Gravity Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] rounded-full opacity-60" />

        {/* Twinkling Stars */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            animate={{ opacity: [0.1, 0.6, 0.1] }}
            transition={{ duration: star.duration, repeat: Infinity }}
            className="absolute bg-white rounded-full"
            style={{
              width: star.size,
              height: star.size,
              top: star.top,
              left: star.left,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div ref={titleRef} className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500"
          >
            Skills & Technologies
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-24 h-[2px] bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-6"
          />
        </motion.div>

        {/* 2. Floating Skills Cloud */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {skillsData.map((skill, index) => (
            <FadeInView
              key={skill.name}
              delay={index * 0.05}
              className="flex-shrink-0"
            >
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -1, 1, 0],
                  filter: "brightness(1.2)",
                }}
                className="relative group"
              >
                {/* Subtle Hover Glow per Skill */}
                <div className="absolute inset-0 bg-purple-500/0 group-hover:bg-purple-500/10 blur-xl rounded-full transition-all duration-300" />

                <SkillItem
                  name={skill.name}
                  icon={skill.icon}
                  color={skill.color}
                />
              </motion.div>
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
