import { motion, useScroll, useTransform } from 'motion/react';
import { Download, Mail, ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { useRef } from 'react';
import { Button } from './ui/button';
import profileImage from 'figma:asset/f59ab0b02f91cb4852c5b4d51dfe0fb087b22bc5.png';

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: y1, willChange: 'transform' }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: y2, willChange: 'transform' }}
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-secondary/15 rounded-full blur-[120px]"
        />
      </div>

      <motion.div style={{ opacity, willChange: 'opacity, transform' }} className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-primary mb-2">Hello, I'm</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary via-white to-secondary bg-clip-text text-transparent mb-4">
                Akshit Jaswal
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-2"
            >
              <p className="text-xl sm:text-2xl text-foreground/90">
                Software Engineering Student
              </p>
              <p className="text-xl sm:text-2xl text-foreground/90">
                Front-End & AI Developer
              </p>
              <p className="text-xl sm:text-2xl text-foreground/90">
                UI/UX Enthusiast
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-foreground/70 text-lg max-w-xl"
            >
              Passionate about creating innovative solutions and pushing boundaries both in technology and sports.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Button
                onClick={() => window.open('#', '_blank')}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-6 rounded-xl shadow-lg shadow-primary/30 group"
              >
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button
                onClick={() => scrollToSection('#contact')}
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white px-6 py-6 rounded-xl group"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Me
              </Button>
              <Button
                onClick={() => window.open('https://github.com/akshu0605', '_blank')}
                className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-6 rounded-xl shadow-lg shadow-gray-500/30 group"
              >
                <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                GitHub
              </Button>
              <Button
                onClick={() => window.open('https://in.linkedin.com/in/akshit-jaswal-7554172b7', '_blank')}
                className="bg-[#0077b5] hover:bg-[#0077b5]/90 text-white px-6 py-6 rounded-xl shadow-lg shadow-[#0077b5]/30 group"
              >
                <Linkedin className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                LinkedIn
              </Button>
              <Button
                onClick={() => window.open('https://x.com/im__akshit?s=11', '_blank')}
                className="bg-[#1da1f2] hover:bg-[#1da1f2]/90 text-white px-6 py-6 rounded-xl shadow-lg shadow-[#1da1f2]/30 group"
              >
                <Twitter className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                X
              </Button>
            </motion.div>
          </motion.div>

          {/* Right side - Profile image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative perspective-1000"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-3xl blur-2xl opacity-30" />
              <div className="relative glass-heavy rounded-3xl p-2 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Akshit Jaswal"
                  className="w-full h-auto rounded-2xl object-cover aspect-square"
                />
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute -top-4 -right-4 glass rounded-2xl p-4 shadow-lg"
              >
                <p className="text-sm">💻 AI & Web Dev</p>
              </motion.div>
              
              <motion.div
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5,
                }}
                className="absolute -bottom-4 -left-4 glass rounded-2xl p-4 shadow-lg"
              >
                <p className="text-sm">🏸 National Player</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{
              y: [0, 12, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}