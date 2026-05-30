import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Portfolio from '@/components/Portfolio';
import HeroSection from '@/sections/Hero';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Portfolio />
      <Footer />
    </main>
  );
}
