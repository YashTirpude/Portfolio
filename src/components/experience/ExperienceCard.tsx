import React from "react";
import { motion } from "framer-motion";
import { MapPin, Calendar, Building2 } from "lucide-react";
import { Experience } from "../../data/experienceData";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  isInView: boolean;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  index,
  isInView,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative flex items-start gap-8"
    >
      {/* 1. Cosmic Timeline Dot (Glowing Star) */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
        className="relative z-10 hidden md:flex mt-2"
      >
        <div className="w-4 h-4 bg-white rounded-full border-2 border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
        {/* Subtle pulse effect for the dot */}
        <div className="absolute inset-0 w-4 h-4 bg-purple-500 rounded-full animate-ping opacity-20" />
      </motion.div>

      {/* 2. Glassmorphic Content Card */}
      <motion.div
        whileHover={{
          y: -5,
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          borderColor: "rgba(168, 85, 247, 0.4)",
        }}
        transition={{ duration: 0.3 }}
        className="flex-1 bg-white/[0.03] backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl transition-all duration-300"
      >
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
              {experience.position}
            </h3>
            <div className="flex items-center gap-2 text-purple-400 font-medium">
              <Building2 size={18} className="text-purple-500" />
              <span className="text-lg">{experience.company}</span>
            </div>
          </div>

          <div className="flex flex-col lg:items-end gap-2 text-sm">
            <div className="flex items-center gap-2 text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/5">
              <Calendar size={14} />
              <span>{experience.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <MapPin size={14} />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-400 mb-6 leading-relaxed text-lg">
          {experience.description}
        </p>

        {/* Achievements Section */}
        <div className="mb-8">
          <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
            <span className="w-1 h-4 bg-purple-500 rounded-full" />
            Key Achievements
          </h4>
          <ul className="grid grid-cols-1 gap-3">
            {experience.achievements.map((achievement, achievementIndex) => (
              <motion.li
                key={achievementIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: index * 0.2 + achievementIndex * 0.1 + 0.5,
                }}
                className="flex items-start gap-3 text-gray-400 group"
              >
                <span className="w-1.5 h-1.5 bg-purple-500/50 rounded-full mt-2.5 group-hover:bg-purple-400 transition-colors" />
                <span className="group-hover:text-gray-200 transition-colors">
                  {achievement}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Technologies Section */}
        <div>
          <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest opacity-60">
            Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, techIndex) => (
              <motion.span
                key={techIndex}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.3,
                  delay: index * 0.2 + techIndex * 0.05 + 0.7,
                }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(168, 85, 247, 0.2)",
                  color: "#fff",
                }}
                className="px-4 py-1.5 text-xs font-medium bg-white/5 text-purple-300 rounded-lg border border-white/10 transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ExperienceCard;
