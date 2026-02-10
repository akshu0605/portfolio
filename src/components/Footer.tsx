import { motion } from 'motion/react';
import { Heart, Github, Linkedin, Mail, Users, Twitter } from 'lucide-react';
import { useState, useEffect } from 'react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [stats, setStats] = useState<{ pageVisits: number } | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-1bef722e/stats`, {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`
          }
        });
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };
    fetchStats();
  }, []);

  const socialLinks = [
    { icon: Github, href: 'https://github.com/akshu0605', label: 'GitHub' },
    { icon: Linkedin, href: 'https://in.linkedin.com/in/akshit-jaswal-7554172b7', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/im__akshit?s=11', label: 'X' },
    { icon: Mail, href: 'mailto:replyakshit@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative py-12 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Visitor Stats */}
          {stats && (
            <div className="flex items-center justify-center gap-2 text-foreground/40 text-xs mb-4">
              <Users className="w-3 h-3" />
              <span>{stats.pageVisits.toLocaleString()} unique visits tracked</span>
            </div>
          )}

          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.1 }}
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                <link.icon className="w-6 h-6" />
                <span className="sr-only">{link.label}</span>
              </motion.a>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 text-foreground/70">
            <p>Made with</p>
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Heart className="w-5 h-5 text-red-500 fill-red-500" />
            </motion.div>
            <p>by Akshit Jaswal</p>
          </div>
          
          <div className="text-foreground/60 text-sm">
            © {currentYear} Akshit Jaswal. All rights reserved.
          </div>

          <div className="pt-4">
            <p className="text-foreground/50 text-xs">
              Designed & Developed with React, Tailwind CSS, and Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}