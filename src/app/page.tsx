import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import HeroSection from '@/sections/Hero';
import About from '@/sections/About';
import Projects from '@/sections/Projects';
import Contact from '@/sections/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
