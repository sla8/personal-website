interface SectionInput {
  id: string;
  content: JSX.Element;
}

export function Section(props: SectionInput) {
  let contentContainer = createContentContainer(props.content);
  return createSectionContainer(props.id, contentContainer);
}

export function createTextSectionContent(
  title?: string,
  subtitle?: string,
  text?: string
) {
  return (
    <div className="pt-8">
      <h1
        className={`h1-light pl-10 pr-10 font-normal sm:font-light ${
          text ? '' : 'pb-8'
        }`}
      >
        {title}
      </h1>
      <h2
        className={`h2-light pl-10 pr-10 pb-3 text-center ${
          subtitle ? '' : 'hidden'
        }`}
      >
        {subtitle}
      </h2>
      <p
        className={`text-justify text-textblack bg-grey rounded-3xl pl-10 pr-10 pt-8 pb-8 ${
          text ? '' : 'hidden'
        }`}
      >
        {text}
      </p>
    </div>
  );
}

export function createSplitSectionContent(
  leftContent: JSX.Element,
  rightContent: JSX.Element
) {
  return (
    <div className="flex flex-col pb-10 pt-14 md:flex-row md:items-center md:pt-0">
      {leftContent}
      <div className="md:ml-10" />
      {rightContent}
    </div>
  );
}

function createContentContainer(content: JSX.Element) {
  return <div className="pb-10 pl-10 pr-10 w-full md:max-w-5xl">{content}</div>;
}

function createSectionContainer(id: string, content: JSX.Element) {
  return (
    <div id={id} className="flex flex-col items-center">
      {content}
    </div>
  );
}
