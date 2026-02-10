import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Trophy, Cloud, Code2 } from 'lucide-react';
import { Badge } from './ui/badge';

export function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const certifications = [
    {
      icon: Cloud,
      title: 'AWS Certified',
      issuer: 'Amazon Web Services',
      description: 'Certified in Amazon Web Services cloud architecture, deployment, and management of scalable applications',
      color: 'from-orange-500 to-yellow-500',
      accentColor: 'border-orange-500/50',
    },
    {
      icon: Cloud,
      title: 'Oracle Cloud Computing',
      issuer: 'Oracle',
      description: 'Certified in cloud infrastructure, services, and deployment strategies on Oracle Cloud platform',
      color: 'from-red-500 to-orange-500',
      accentColor: 'border-red-500/50',
    },
    {
      icon: Trophy,
      title: '9th Place - BITS Goa Hackathon',
      issuer: 'BITS Pilani, Goa Campus',
      description: 'Achieved 9th position among top teams in a highly competitive national-level hackathon',
      color: 'from-yellow-500 to-amber-500',
      accentColor: 'border-yellow-500/50',
    },
  ];

  return (
    <section id="certifications" ref={ref} className="py-20 lg:py-32 relative overflow-hidden bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Professional certifications and competitive achievements that showcase expertise and dedication
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="perspective-1000 group"
            >
              <div className={`relative glass rounded-3xl p-8 overflow-hidden preserve-3d hover:shadow-2xl transition-all duration-300`}>
                {/* Animated background */}
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5`}
                />

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex"
                  >
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}>
                      <cert.icon className="w-10 h-10 text-white" />
                    </div>
                  </motion.div>

                  {/* Title and Badge */}
                  <div>
                    <h3 className="text-2xl mb-2">{cert.title}</h3>
                    <Badge 
                      variant="outline" 
                      className="border-primary text-primary"
                    >
                      {cert.issuer}
                    </Badge>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/70 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Decorative elements */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${cert.color} opacity-10 rounded-bl-full`} />
                  <div className={`absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr ${cert.color} opacity-10 rounded-tr-full`} />
                </div>

                {/* Verified badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  className="absolute top-4 right-4"
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}>
                    <Award className="w-6 h-6 text-white" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional stats or info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
            <Code2 className="w-5 h-5 text-primary" />
            <span className="text-foreground/70">Continuously learning and achieving new milestones</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}