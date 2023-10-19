import Image from 'next/image';
import Link from 'next/link';

type Props = {
  name: string;
  mobileImg: string;
  deskImg: string;
};

export default function CreationCard({ name, mobileImg, deskImg }: Props) {
  return (
    <>
      <Link
        className='w-full relative min-h-[150px] sm:min-h-[350px] overflow-hidden group'
        href={'/'}
      >
        <Image
          className='group-hover:opacity-30 sm:hidden'
          src={mobileImg}
          alt={`${name} image`}
          fill={true}
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
        <Image
          className='group-hover:opacity-30 hidden sm:block'
          src={deskImg}
          alt={`${name} image`}
          fill={true}
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
        <div className='absolute text-left text-[--clr-white] font-josefin text-2xl bg-gradient-to-r from-black/50 w-full h-full flex uppercase group-hover:bg-none'>
          <h3 className='self-end p-4 w-1/2 group-hover:text-black'>{name}</h3>
        </div>
      </Link>
    </>
  );
}
