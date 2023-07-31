import { ReactNode } from 'react';

interface SectionInput {
  id?: string;
  dark: boolean;
  title?: string;
  subtitle?: string;
  content?: ReactNode;
  text?: string;
  image?: ReactNode;
  imageAlt?: string;
}

interface SectionContainerInput {
  sectionInput: SectionInput;
  contentContainer: ReactNode;
}

export function TextSection(props: SectionInput) {
  let content = (
    <TextSectionContent
      dark={props.dark}
      title={props.title}
      subtitle={props.subtitle}
      text={props.text}
    />
  );
  let contentContainer = (
    <ContentContainer dark={props.dark} content={content} />
  );
  return (
    <SectionContainer
      sectionInput={props}
      contentContainer={contentContainer}
    />
  );
}

export function TextSectionImageLeft(props: SectionInput) {
  let content = (
    <TextSectionImageLeftContentContainer
      dark={props.dark}
      title={props.title}
      subtitle={props.subtitle}
      text={props.text}
      image={props.image}
      imageAlt={props.imageAlt}
    />
  );
  return <SectionContainer sectionInput={props} contentContainer={content} />;
}

function SectionContainer(props: SectionContainerInput) {
  return (
    <div
      id={props.sectionInput.id}
      className={`flex flex-col items-center
      ${props.sectionInput.dark ? 'bg-black' : 'bg-white'}`}
    >
      {props.contentContainer}
    </div>
  );
}

function ContentContainer(props: SectionInput) {
  return (
    <div className="pb-20 pt-20 pl-10 pr-10 w-full md:max-w-4xl">
      {props.content}
    </div>
  );
}

function TextSectionContent(props: SectionInput) {
  return (
    <div>
      <h1 className={`${props.dark ? 'h1-light' : 'h1-dark'}`}>
        {props.title}
      </h1>
      <h2 className={`${props.dark ? 'h2-light' : 'h2-dark'}`}>
        {props.subtitle}
      </h2>
      <p
        className={`ext-justify
  ${props.dark ? 'text-textwhite' : 'text-textblack'}`}
      >
        {props.text}
      </p>
    </div>
  );
}

function TextSectionImageLeftContentContainer(props: SectionInput) {
  let textContent = (
    <TextSectionContent
      dark={props.dark}
      title={props.title}
      subtitle={props.subtitle}
      text={props.text}
    />
  );
  let fullContent = (
    <div className="flex flex-col sm:flex-row sm:items-center">
      {props.image}
      <div className="w-full pt-12 sm:pt-0 sm:ml-10 md:pt-0 md:ml-20">
        {textContent}
      </div>
    </div>
  );
  return <ContentContainer content={fullContent} dark={props.dark} />;
}
