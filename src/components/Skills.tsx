import React from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code2,
  Smartphone,
  FileCode2,
  Database,
  Server,
  Languages,
  GitBranch,
  Container,
  Cloud,
  FlaskConical,
  Figma,
  Palette,
  Package
} from 'lucide-react';
import SkillCard from './SkillCard';
import FadeInView from './animations/FadeInView';

const skillCategories = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: Code2 },
      { name: 'TypeScript', icon: FileCode2 },
      { name: 'Tailwind CSS', icon: Palette },
      { name: 'Next.js', icon: Smartphone },
      { name: 'Vue.js', icon: Code2 }
    ]
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: Server },
      { name: 'Express', icon: Package },
      { name: 'Python', icon: Languages },
      { name: 'PostgreSQL', icon: Database },
      { name: 'MongoDB', icon: Database }
    ]
  },
  {
    title: 'Tools & Others',
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'Docker', icon: Container },
      { name: 'AWS', icon: Cloud },
      { name: 'Jest', icon: FlaskConical },
      { name: 'Figma', icon: Figma }
    ]
  }
];

const Skills = () => {
  const titleRef = React.useRef(null);
  const isInView = useInView(titleRef, { once: true });

  return (
    <section id="skills" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={titleRef}
          className="text-center mb-12"
        >
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <FadeInView key={index} delay={index * 0.2}>
              <SkillCard
                title={category.title}
                skills={category.skills}
                index={index}
              />
            </FadeInView>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;