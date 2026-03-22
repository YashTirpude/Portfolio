import React, { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { experienceData } from "../data/experienceData";
import ExperienceCard from "./experience/ExperienceCard";
import ExperienceTitle from "./experience/ExperienceTitle";

// Define Star Interface for TS
interface Star {
  id: number;
  size: number;
  top: string;
  left: string;
  duration: number;
}

const Experience = () => {
  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const starArray: Star[] = Array.from({ length: 30 }).map((_, i) => ({
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
      id="experience"
      className="relative bg-[#030014] py-24 overflow-hidden"
    >
      {/* 1. Deep Space Nebula Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent opacity-50" />

        {/* Soft Nebula Glows */}
        <motion.div
          animate={{ opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full"
        />
        <motion.div
          animate={{ opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 7, repeat: Infinity, delay: 2 }}
          className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full"
        />
      </div>

      {/* 2. Twinkling Stars */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            animate={{ opacity: [0.1, 0.7, 0.1] }}
            transition={{ duration: star.duration, repeat: Infinity }}
            className="absolute bg-white rounded-full"
            style={{
              width: star.size,
              height: star.size,
              top: star.top,
              left: star.left,
              boxShadow: "0 0 4px rgba(255, 255, 255, 0.6)",
            }}
          />
        ))}
      </div>

      <div
        ref={sectionRef}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <ExperienceTitle />

        <div className="relative mt-16">
          {/* 3. Glowing Timeline Beam */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-8 top-0 bottom-0 w-[2px] origin-top hidden md:block"
            style={{
              background:
                "linear-gradient(to bottom, transparent, #8b5cf6, #3b82f6, #ec4899, transparent)",
              boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)",
            }}
          />

          <div className="space-y-16">
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
