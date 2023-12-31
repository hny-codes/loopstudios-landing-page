'use client';

import { motion } from 'framer-motion';
import { heroVariant } from '@/util/framerAnimation';

export default function Hero() {
  return (
    <div
      className={`bg-[url('/images/mobile/image-hero.jpg')] sm:bg-[url('/images/desktop/image-hero.jpg')] bg-cover bg-no-repeat bg-center h-[650px] sm:h-[550px] text-[--clr-white] flex flex-col justify-center `}
    >
      <section className='max-w-[--max-width] mx-auto w-full'>
        <header>
          <motion.h1
            variants={heroVariant}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='border-2 px-8 py-6 text-4xl sm:text-6xl mx-6 [word-spacing:9999px] sm:[word-spacing:0px] overflow-hidden font-josefin sm:max-w-[33rem] sm:mx-6 uppercase  tracking-wide'
          >
            Immersive Experiences That Deliver
          </motion.h1>
        </header>
      </section>
    </div>
  );
}
