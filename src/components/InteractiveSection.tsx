import Image from 'next/image';

export default function InteractiveSection() {
  return (
    <div>
      <section className='px-8 my-24'>
        <div className=''>
          <Image
            src={'/images/mobile/image-interactive.jpg'}
            alt='interactive VR man'
            width={654}
            height={448}
          />
        </div>
        <header className='text-center mt-12'>
          <h2 className='uppercase text-3xl tracking-wider font-josefin'>
            The leader in interactive VR
          </h2>
          <p className='mt-4 text-[--clr-dark-gray] font-alata w-11/12 mx-auto'>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </header>
      </section>
    </div>
  );
}
