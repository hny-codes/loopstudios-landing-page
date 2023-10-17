import Image from 'next/image';

export default function InteractiveImage() {
  return (
    <>
      <div className='sm:hidden'>
        <Image
          src={'/images/mobile/image-interactive.jpg'}
          alt='interactive VR man'
          width={654}
          height={448}
        />
      </div>
      <div className='hidden sm:block'>
        <Image
          src={'/images/desktop/image-interactive.jpg'}
          alt='interactive VR man'
          width={731}
          height={500}
        />
      </div>
    </>
  );
}
