type Prop = {
  text: string;
};

export default function Button({ text }: Prop) {
  return (
    <button className='uppercase tracking-widest border-2 border-[--clr-black] px-12 py-2 font-josefin hover:bg-[--clr-black] hover:transition hover:text-[--clr-white]'>
      <p>{text}</p>
    </button>
  );
}
