import { useEffect, useState } from 'react';
import { Toaster } from './components/ui/sonner';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Hackathons } from './components/Hackathons';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { projectId, publicAnonKey } from './utils/supabase/info';

export default function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Mouse movement tracking for liquid glow effect
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Backend visit tracking
    const incrementVisits = async () => {
      try {
        await fetch(`https://${projectId}.supabase.co/functions/v1/make-server-1bef722e/increment-visits`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`
          }
        });
      } catch (error) {
        console.error('Error tracking visit:', error);
      }
    };
    incrementVisits();

    // Vanilla JavaScript Scroll Tracking
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden liquid-glow">
      <CustomCursor />
      
      {/* Scroll Progress Bar - JS Driven */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-primary to-secondary z-[100] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Hackathons />
        <Education />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}