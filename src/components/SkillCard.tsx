import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SkillCardProps {
  title: string;
  skills: Array<{
    name: string;
    icon: LucideIcon;
  }>;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {skills.map((skill, skillIndex) => {
          const IconComponent = skill.icon;
          return (
            <motion.div
              key={skillIndex}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 py-2 bg-gray-700 rounded-lg text-gray-300"
            >
              <IconComponent className="w-4 h-4 text-purple-400" />
              <span className="text-sm">{skill.name}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;
