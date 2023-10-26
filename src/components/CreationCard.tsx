import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cardVariant } from '@/util/framerAnimation';

type Props = {
  name: string;
  mobileImg: string;
  deskImg: string;
};

export default function CreationCard({ name, mobileImg, deskImg }: Props) {
  return (
    <motion.div
      className='w-full relative min-h-[150px] sm:min-h-[350px] overflow-hidden group'
      variants={cardVariant}
    >
      <Link href={'/'}>
        <Image
          className='group-hover:opacity-30 group-hover:transition sm:hidden'
          src={mobileImg}
          alt={`${name} image`}
          fill={true}
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
        <Image
          className='group-hover:opacity-30 group-hover:transition hidden sm:block'
          src={deskImg}
          alt={`${name} image`}
          fill={true}
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
        <div className='absolute text-left text-[--clr-white] font-josefin text-2xl bg-gradient-to-r from-black/50 w-full h-full flex uppercase group-hover:bg-none'>
          <h3 className='self-end p-4 w-1/2 group-hover:text-black group-hover:transition'>
            {name}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}
