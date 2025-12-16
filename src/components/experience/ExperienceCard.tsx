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
      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
        className="relative z-10 hidden md:flex"
      >
        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-gray-900 shadow-lg" />
      </motion.div>

      {/* Content Card */}
      <motion.div
        whileHover={{ y: -5 }}
        transition={{ duration: 0.3 }}
        className="flex-1 bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300"
      >
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              {experience.position}
            </h3>
            <div className="flex items-center gap-2 text-blue-400 font-semibold mb-2">
              <Building2 size={16} />
              <span>{experience.company}</span>
            </div>
          </div>

          <div className="flex flex-col lg:items-end gap-2">
            <div className="flex items-center gap-2 text-gray-400">
              <Calendar size={16} />
              <span>{experience.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={16} />
              <span>{experience.location}</span>
            </div>
          </div>
        </div>

        <p className="text-gray-300 mb-4 leading-relaxed">
          {experience.description}
        </p>

        <div className="mb-4">
          <h4 className="text-white font-semibold mb-2">Key Achievements:</h4>
          <ul className="space-y-1">
            {experience.achievements.map((achievement, achievementIndex) => (
              <motion.li
                key={achievementIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.4,
                  delay: index * 0.2 + achievementIndex * 0.1 + 0.5,
                }}
                className="flex items-start gap-2 text-gray-300"
              >
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                <span>{achievement}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-2">Technologies:</h4>
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
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 text-sm bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 hover:border-gray-500/50 transition-colors"
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
