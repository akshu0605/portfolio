import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { GraduationCap, School, Trophy, Heart } from 'lucide-react';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const cards = [
    {
      icon: GraduationCap,
      title: 'Current Education',
      description: 'Third-year Software Engineering student at VIT-AP University',
      color: 'from-primary to-primary/50',
    },
    {
      icon: School,
      title: 'Academic Foundation',
      description: 'Strong academic background from HIM Academy Public School',
      color: 'from-secondary to-secondary/50',
    },
    {
      icon: Trophy,
      title: 'Sports Excellence',
      description: 'National-level badminton player with competitive tournament experience',
      color: 'from-primary to-secondary',
    },
    {
      icon: Heart,
      title: 'Collaborative Spirit',
      description: 'Passionate about teamwork and building innovative solutions together',
      color: 'from-secondary to-primary',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            A passionate developer and athlete, combining technical expertise with sports discipline to create exceptional results
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, rotateY: 5 }}
              className="relative group perspective-1000"
            >
              <div className="relative bg-card border border-border rounded-2xl p-8 overflow-hidden preserve-3d transition-all duration-300 group-hover:border-primary/50">
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} mb-4`}
                >
                  <card.icon className="w-8 h-8 text-white" />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl mb-3 text-foreground">{card.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{card.description}</p>

                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bio section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="bg-gradient-to-br from-card to-card/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-border relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
            <div className="relative z-10">
              <h3 className="text-3xl mb-6 text-center">My Journey</h3>
              <div className="space-y-6 text-foreground/80 max-w-4xl mx-auto">
                <p className="leading-relaxed">
                  As a third-year Software Engineering student at VIT-AP University, I've cultivated a strong foundation in technology and innovation. My journey began at HIM Academy Public School, where I developed not just academic excellence, but also a competitive spirit through national-level badminton.
                </p>
                <p className="leading-relaxed">
                  My technical expertise spans across AI development, UI/UX design, React.js, and Java. I'm particularly passionate about front-end development and artificial intelligence, constantly exploring new ways to create intuitive and intelligent user experiences.
                </p>
                <p className="leading-relaxed">
                  The discipline and teamwork I've learned from competitive sports have shaped my approach to software development. I believe in collaborative innovation, where diverse perspectives come together to build something truly exceptional.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
