import { Toaster } from '../components/ui/sonner';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Skills } from '../components/Skills';
import { Hackathons } from '../components/Hackathons';
import { Projects } from '../components/Projects';
import { Certifications } from '../components/Certifications';
import { Education } from '../components/Education';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
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