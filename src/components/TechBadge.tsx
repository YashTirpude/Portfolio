import React from "react";
import { motion } from "framer-motion";
import { TechBadge as TechBadgeType } from "../types";

interface TechBadgeProps {
  tech: TechBadgeType;
}

const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-3 py-1 text-sm ${tech.color}/10 text-white rounded-full 
        border border-${tech.color}/20 backdrop-blur-sm hover:${tech.color}/20 
        transition-colors duration-300`}
    >
      {tech.name}
    </motion.span>
  );
};

export default TechBadge;
