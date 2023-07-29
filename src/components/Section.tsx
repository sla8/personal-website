import 'components/Section.css';

interface ITSInput {
  id: string;
  title: string;
  text: string;
  dark: boolean;
  image?: string;
  imageAlt?: string;
}

class TSInput implements ITSInput {
  id: string;
  title: string;
  text: string;
  dark: boolean;
  image?: string;
  imageAlt?: string;

  constructor(
    id: string,
    title: string,
    text: string,
    dark: boolean,
    image?: string,
    imageAlt?: string
  ) {
    this.id = id;
    this.title = title;
    this.text = text;
    this.dark = dark;
    this.image = image;
    this.imageAlt = imageAlt;
  }
}

export function TextSection(props: ITSInput) {
  return (
    <div
      id={props.id}
      className={`container-align
      ${props.dark ? 'bg-black' : 'bg-white'}`}
    >
      <div className="content-container">
        <h1 className={`${props.dark ? 'h1-light' : 'h1-dark'}`}>
          {props.title}
        </h1>
        <p
          className={`content-text
          ${props.dark ? 'text-textwhite' : 'text-textblack'}`}
        >
          {props.text}
        </p>
      </div>
    </div>
  );
}

export function TextSectionImageLeft(props: ITSInput) {
  return (
    <div id={props.id} className="container-align">
      <div className="content-container flex flex-col sm:flex-row sm:items-center">
        <div className="w-full sm:w-7/12 md:w-10/12">
          <img src={props.image} alt={props.imageAlt} />
        </div>
        <div className="w-full pt-12 sm:pt-0 sm:ml-10 md:pt-0 md:ml-20">
          <h1 className={`${props.dark ? 'h1-light' : 'h1-dark'}`}>
            {props.title}
          </h1>
          <p
            className={`content-text
          ${props.dark ? 'text-textwhite' : 'text-textblack'}`}
          >
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
}
