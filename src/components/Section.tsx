interface SectionInput {
  id: string;
  title: string;
  text: string;
  dark: boolean;
}

export default function Section({ id, title, text, dark }: SectionInput) {
  return (
    <div
      id={id}
      className={`pt-10 pb-10 flex flex-col items-center
      ${dark ? 'bg-black' : 'bg-white'}`}
    >
      <div className="pl-10 pr-10 sm:pl-10 pr-10 lg:max-w-4xl">
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
