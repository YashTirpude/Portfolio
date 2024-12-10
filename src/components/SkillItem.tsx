import React from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SkillItemProps {
  name: string;
  icon: LucideIcon;
  color: string;
}

const SkillItem: React.FC<SkillItemProps> = ({ name, icon: Icon, color }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-3 px-4 py-2 bg-gray-800/50 backdrop-blur-sm rounded-xl hover:bg-gray-800/70 transition-colors cursor-pointer"
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
        className="p-2 rounded-lg"
        style={{ backgroundColor: `${color}20` }}
      >
        <Icon size={20} className="text-white" style={{ color }} />
      </motion.div>
      <span className="text-sm font-medium text-gray-300">{name}</span>
    </motion.div>
  );
};

export default SkillItem;
