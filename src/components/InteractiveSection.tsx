import InteractiveContent from './InteractiveContent';
import InteractiveImage from './InteractiveImage';

export default function InteractiveSection() {
  return (
    <div>
      <section className='px-8 my-24 max-w-[--max-width] mx-auto sm:flex relative'>
        <InteractiveImage />
        <InteractiveContent />
      </section>
    </div>
  );
}
