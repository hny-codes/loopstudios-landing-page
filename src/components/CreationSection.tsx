'use client';

import Button from './Button';
import CreationCard from './CreationCard';
import { motion } from 'framer-motion';
import { creationVariant } from '@/util/framerAnimation';

export default function CreationSection() {
  return (
    <div className='mb-28'>
      <section className='text-center sm:text-left px-6 sm:grid grid-cols-2 max-w-[--max-width] mx-auto sm:pt-20'>
        <h2 className='uppercase text-3xl sm:text-4xl font-josefin mb-10 sm:mb-16'>
          Our Creations
        </h2>
        <motion.div
         className='grid grid-cols-1 gap-8 mb-10 sm:grid-cols-4 sm:order-2 sm:col-span-2'
         variants={creationVariant}
         initial='hidden'
         whileInView={'visible'}
        >
          <CreationCard
            name='Deep Earth'
            mobileImg='/images/mobile/image-deep-earth.jpg'
            deskImg='/images/desktop/image-deep-earth.jpg'
          />
          <CreationCard
            name='Night Arcade'
            mobileImg='/images/mobile/image-night-arcade.jpg'
            deskImg='/images/desktop/image-night-arcade.jpg'
          />
          <CreationCard
            name='Soccer Team VR'
            mobileImg='/images/mobile/image-soccer-team.jpg'
            deskImg='/images/desktop/image-soccer-team.jpg'
          />
          <CreationCard
            name='The Grid'
            mobileImg='/images/mobile/image-grid.jpg'
            deskImg='/images/desktop/image-grid.jpg'
          />
          <CreationCard
            name='From Up Above VR'
            mobileImg='/images/mobile/image-from-above.jpg'
            deskImg='/images/desktop/image-from-above.jpg'
          />
          <CreationCard
            name='Pocket Borealis'
            mobileImg='/images/mobile/image-pocket-borealis.jpg'
            deskImg='/images/desktop/image-pocket-borealis.jpg'
          />
          <CreationCard
            name='The Curiosity'
            mobileImg='/images/mobile/image-curiosity.jpg'
            deskImg='/images/desktop/image-curiosity.jpg'
          />
          <CreationCard
            name='Make It Fisheye'
            mobileImg='/images/mobile/image-fisheye.jpg'
            deskImg='/images/desktop/image-fisheye.jpg'
          />
        </motion.div>
        <div className='order-1 sm:flex sm:items-start sm:justify-end'>
          <Button text='See all' />
        </div>
      </section>
    </div>
  );
}
