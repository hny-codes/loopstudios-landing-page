import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className='relative'>
      <div>
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
