import { ArrowRight, FileDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

interface Star {
  id: number;
  size: number;
  top: string;
  left: string;
  duration: number;
}
const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const [stars, setStars] = useState<Star[]>([]);

  // Generate random stars on mount
  useEffect(() => {
    const starArray = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      size: Math.random() * 2 + 1,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      duration: Math.random() * 3 + 2,
    }));
    setStars(starArray);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-[#030014] overflow-hidden pt-16"
    >
      {/* 1. Animated Nebula Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-purple-900/30 blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-blue-900/20 blur-[120px]"
        />
      </div>

      {/* 2. Floating Stars Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ opacity: 0.2 }}
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{
              duration: star.duration,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute bg-white rounded-full"
            style={{
              width: star.size,
              height: star.size,
              top: star.top,
              left: star.left,
              boxShadow: "0 0 5px rgba(255, 255, 255, 0.8)",
            }}
          />
        ))}
      </div>

      {/* 3. Parallax Grid Overlay */}
      <motion.div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          y: y1,
          backgroundImage:
            "linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500"
          >
            Yash Tirpude
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-xl sm:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-6 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            Building high-performance applications with the{" "}
            <span className="text-purple-400">T3 Stack</span>. I transform
            complex data into seamless, interactive experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <motion.a
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-3 rounded-full text-white bg-gradient-to-r from-purple-600 to-blue-600 font-semibold flex items-center gap-2 transition-all"
            >
              Explore Projects
              <ArrowRight size={20} />
            </motion.a>

            <motion.a
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.95 }}
              href="/resume.pdf"
              className="px-8 py-3 rounded-full border border-white/10 text-white font-semibold flex items-center gap-2 backdrop-blur-sm"
            >
              Resume
              <FileDown size={20} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
