import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Github, ExternalLink, Code2 } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: 'Samatva',
      description: 'A comprehensive platform for mental wellbeing, providing mindfulness resources, meditation guides, and community support to promote holistic mental health.',
      tech: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
      github: '#',
      demo: '#',
      gradient: 'from-purple-500 to-indigo-600',
    },
    {
      title: 'Mental Health Application',
      description: 'A comprehensive mental health platform providing resources, mood tracking, and professional support to help users manage their mental wellbeing effectively.',
      tech: ['React', 'Supabase', 'Node.js', 'Python'],
      github: '#',
      demo: '#',
      gradient: 'from-primary to-cyan-500',
    },
    {
      title: 'Shopping Mobile Application',
      description: 'A feature-rich mobile shopping application with intuitive UI, seamless checkout, and personalized product recommendations for enhanced user experience.',
      tech: ['React Native', 'Node.js', 'Firebase', 'Redux'],
      github: '#',
      demo: '#',
      gradient: 'from-secondary to-pink-600',
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A showcase of innovative solutions and creative implementations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="perspective-1000 group"
            >
              <motion.div
                whileHover={{ 
                  rotateY: hoveredIndex === index ? 5 : 0,
                  rotateX: hoveredIndex === index ? -5 : 0,
                  scale: 1.03,
                }}
                transition={{ duration: 0.3 }}
                className="relative glass rounded-2xl overflow-hidden h-full preserve-3d shadow-xl"
              >
                {/* Gradient header */}
                <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <motion.div
                    animate={{
                      scale: hoveredIndex === index ? 1.2 : 1,
                      rotate: hoveredIndex === index ? 10 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 opacity-30"
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]" />
                  </motion.div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      animate={{
                        scale: hoveredIndex === index ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Code2 className="w-16 h-16 text-white/80" />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl">{project.title}</h3>
                  <p className="text-foreground/70 leading-relaxed min-h-[4.5rem]">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-muted hover:bg-primary hover:text-white transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3 pt-4">
                    <Button
                      onClick={() => window.open(project.github, '_blank')}
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-white group/btn"
                    >
                      <Github className="mr-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </Button>
                    <Button
                      onClick={() => window.open(project.demo, '_blank')}
                      className="flex-1 bg-primary hover:bg-primary/90 group/btn"
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                      Demo
                    </Button>
                  </div>
                </div>

                {/* Hover effect border */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  className={`absolute inset-0 border-2 border-transparent bg-gradient-to-r ${project.gradient} rounded-2xl -z-10 blur-sm`}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View more section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <Button
            onClick={() => window.open('https://github.com/akshu0605', '_blank')}
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-6 text-lg group"
          >
            <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            View All Projects on GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
}