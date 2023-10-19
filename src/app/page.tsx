import CreationSection from '@/components/CreationSection';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import InteractiveSection from '@/components/InteractiveSection';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className='relative'>
      <div>
        <Navbar />
        <Hero />
        <InteractiveSection />
        <CreationSection />
        <Footer />
      </div>
    </main>
  );
}
