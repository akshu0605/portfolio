import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, BookOpen, Award, Code } from 'lucide-react';

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const timeline = [
    {
      year: '2023',
      title: 'First Year',
      description: 'Started my college journey at VIT-AP University - filled with new experiences, learning, and memories',
      achievement: 'Foundation in Programming',
      icon: GraduationCap,
    },
    {
      year: '2024',
      title: 'Second Year',
      description: 'Deepened understanding of data structures, algorithms, and software development',
      achievement: 'Academic Excellence',
      icon: BookOpen,
    },
    {
      year: '2025',
      title: 'Third Year - Current',
      description: 'Specializing in AI/ML, advanced web development, and full-stack technologies',
      achievement: 'Advanced Specialization',
      icon: Code,
    },
    {
      year: '2026',
      title: 'Looking Ahead',
      description: 'Preparing for final year with focus on capstone projects and industry readiness',
      achievement: 'Future Goals',
      icon: Award,
    },
  ];

  return (
    <section id="education" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Education Journey
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            From freshman to third-year scholar - a journey of continuous learning and growth at VIT-AP
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-primary hidden lg:block" />

          <div className="space-y-12 lg:space-y-24">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="flex-1 bg-card border border-border rounded-2xl p-8 group hover:border-secondary/50 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${
                        index % 2 === 0 ? 'from-primary to-primary/50' : 'from-secondary to-secondary/50'
                      } flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <item.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        {item.year}
                      </div>
                      <h3 className="text-2xl">{item.title}</h3>
                    </div>
                  </div>
                  <p className="text-foreground/70 leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className={`inline-block bg-gradient-to-r ${
                    index % 2 === 0 ? 'from-primary/20 to-primary/5' : 'from-secondary/20 to-secondary/5'
                  } px-4 py-2 rounded-lg border ${
                    index % 2 === 0 ? 'border-primary/30' : 'border-secondary/30'
                  }`}>
                    <p className="text-sm">🎓 {item.achievement}</p>
                  </div>
                </motion.div>

                {/* Center dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  className="hidden lg:block flex-shrink-0 relative z-10"
                >
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${
                    index % 2 === 0 ? 'from-primary to-primary/50' : 'from-secondary to-secondary/50'
                  } border-4 border-background shadow-lg`} />
                </motion.div>

                {/* Empty space for alternating layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key highlights section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: 'VIT-AP University',
              description: 'Computer Science Engineering',
              icon: '🎓',
            },
            {
              title: 'Third Year Student',
              description: 'Expected Graduation 2026',
              icon: '📚',
            },
            {
              title: 'Tech Enthusiast',
              description: 'AI, Web Dev & UI/UX',
              icon: '💻',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 text-center group hover:border-primary/50 transition-all duration-300"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl mb-2">{item.title}</h4>
              <p className="text-foreground/70">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
            <p className="text-2xl italic text-foreground/90 mb-4">
              "Education is not just about acquiring knowledge, but about transforming that knowledge into innovation and impact."
            </p>
            <p className="text-primary">- Akshit Jaswal</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}