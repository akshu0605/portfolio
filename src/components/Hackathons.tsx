import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Award, Trophy, Target, Users } from 'lucide-react';
import { Badge } from './ui/badge';

export function Hackathons() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const achievements = [
    {
      icon: Trophy,
      rank: '9th Place',
      event: 'National-Level Hackathon',
      location: 'BITS Pilani',
      description: 'Competed against top teams nationwide, showcasing innovative problem-solving and technical skills',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const stats = [
    { icon: Target, label: 'Hackathons', value: '5+' },
    { icon: Award, label: 'Awards', value: '3' },
    { icon: Users, label: 'Team Projects', value: '10+' },
  ];

  return (
    <section id="hackathons" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Hackathon Journey
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Pushing boundaries and solving real-world problems through competitive innovation
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-card border border-border rounded-2xl p-6 text-center group hover:border-primary/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-secondary mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-foreground/70">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Achievement Card */}
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="relative perspective-1000"
          >
            <div className="relative bg-gradient-to-br from-card to-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 lg:p-12 overflow-hidden preserve-3d group hover:border-primary/50 transition-all duration-300">
              {/* Animated background gradient */}
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
                className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-5`}
              />

              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
                {/* Trophy Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0"
                >
                  <div className={`w-32 h-32 rounded-3xl bg-gradient-to-br ${achievement.color} flex items-center justify-center shadow-2xl`}>
                    <achievement.icon className="w-20 h-20 text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4">
                    <Badge className={`bg-gradient-to-r ${achievement.color} text-white border-0 px-4 py-2 text-lg`}>
                      {achievement.rank}
                    </Badge>
                    <Badge variant="outline" className="border-primary text-primary px-4 py-2 text-lg">
                      {achievement.location}
                    </Badge>
                  </div>
                  <h3 className="text-3xl lg:text-4xl mb-4">
                    {achievement.event}
                  </h3>
                  <p className="text-foreground/70 text-lg leading-relaxed max-w-2xl">
                    {achievement.description}
                  </p>
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-secondary/20 to-transparent rounded-tr-full" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
