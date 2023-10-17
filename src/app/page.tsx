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
      </div>
    </main>
  );
}
