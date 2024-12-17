import React from "react";
import { motion } from "framer-motion";

interface ProjectImageProps {
  src: string;
  alt: string;
  isEven: boolean;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt, isEven }) => {
  return (
    <div className="lg:w-1/2">
      <motion.div
        initial={{ opacity: 0, x: isEven ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative group"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-red-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-70 group-hover:opacity-100" />
        <div className="relative overflow-hidden rounded-xl aspect-video">
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 via-transparent to-transparent group-hover:from-purple-600/10 transition-colors duration-300 z-10" />
          <motion.img
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectImage;
