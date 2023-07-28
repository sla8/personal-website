interface SectionInput {
  title: string;
  text: string;
  dark: boolean;
}

export default function Section({ title, text, dark }: SectionInput) {
  return (
    <div
      className={`pt-10 pb-10 flex flex-col items-center
      ${dark ? 'bg-black' : 'bg-white'}`}
    >
      <div className="lg:max-w-4xl sm:pl-10 pr-10">
        <h1 className={`${dark ? 'text-textwhite' : 'text-textblack'}`}>
          {title}
        </h1>
        <p
          className={`text-justify
          ${dark ? 'text-textwhite' : 'text-textblack'}`}
        >
          {text}
        </p>
      </div>
    </div>
  );
}
