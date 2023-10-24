'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function InteractiveContent() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.8 });

  return (
    <motion.header
      ref={ref}
      initial={{ opacity: 0 }}
      id='interactive-text'
      animate={inView && { opacity: 1 }}
      className='text-center sm:text-left mt-12 sm:bg-[--clr-white] sm:w-2/3 md:w-1/2 sm:px-20 sm:pt-20 sm:ml-auto
        sm:absolute right-0 bottom-0'
    >
      <h2 className='uppercase text-3xl sm:text-4xl md:text-5xl tracking-wide font-josefin'>
        The leader in interactive VR
      </h2>
      <p className='mt-4 text-[--clr-dark-gray] font-alata w-10/12 sm:w-full mx-auto text-body'>
        Founded in 2011, Loopstudios has been producing world-class virtual
        reality projects for some of the best companies around the globe. Our
        award-winning creations have transformed businesses through digital
        experiences that bind to their brand.
      </p>
    </motion.header>
  );
}
