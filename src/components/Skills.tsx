import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Brain, Palette, Code, Coffee, Users } from 'lucide-react';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const skills = [
    {
      icon: Brain,
      name: 'Artificial Intelligence',
      description: 'Machine Learning & AI Development',
      color: 'from-purple-500 to-pink-500',
      delay: 0,
    },
    {
      icon: Palette,
      name: 'UI/UX Design',
      description: 'Creating Beautiful Interfaces',
      color: 'from-primary to-cyan-500',
      delay: 0.1,
    },
    {
      icon: Code,
      name: 'React.js',
      description: 'Modern Web Development',
      color: 'from-blue-500 to-primary',
      delay: 0.2,
    },
    {
      icon: Coffee,
      name: 'Java',
      description: 'Backend Development',
      color: 'from-secondary to-red-500',
      delay: 0.3,
    },
    {
      icon: Users,
      name: 'Team Collaboration',
      description: 'Working Together Effectively',
      color: 'from-green-500 to-primary',
      delay: 0.4,
    },
  ];

  return (
    <section id="skills" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A diverse skill set combining technical expertise with creative problem-solving
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.6, delay: skill.delay }}
              whileHover={{ 
                y: -15,
                rotateY: 10,
                rotateX: 5,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="perspective-1000 group"
            >
              <div className="relative glass rounded-3xl p-8 h-full preserve-3d transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(20,184,166,0.2)] overflow-hidden">
                {/* Animated gradient background */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 0.15 }}
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} transition-opacity duration-500`}
                />

                {/* Floating icon container */}
                <motion.div
                  whileHover={{ 
                    rotateY: [0, 15, -15, 0],
                    rotateX: [0, -15, 15, 0],
                    scale: 1.15 
                  }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="relative z-10"
                >
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${skill.color} mb-6 shadow-xl relative overflow-hidden group-hover:after:content-[''] group-hover:after:absolute group-hover:after:inset-0 group-hover:after:bg-white/20 transition-all`}>
                    <skill.icon className="w-10 h-10 text-white relative z-10" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl mb-2 text-foreground">{skill.name}</h3>
                  <p className="text-foreground/70">{skill.description}</p>
                </div>

                {/* Shine effect on hover */}
                <motion.div
                  initial={{ x: '-100%', opacity: 0 }}
                  whileHover={{ x: '100%', opacity: 0.3 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none"
                  style={{ transform: 'skewX(-20deg)' }}
                />

                {/* Bottom accent line */}
                <div className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${skill.color} group-hover:w-full transition-all duration-500`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur-sm rounded-2xl px-8 py-4 border border-primary/20">
            <p className="text-foreground/80">
              <span className="font-semibold text-primary">Always learning</span> and exploring new technologies to stay at the forefront of innovation
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}