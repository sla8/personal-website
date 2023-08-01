interface SectionInput {
  id: string;
  darkBg: boolean;
  content: JSX.Element;
}

export function Section(props: SectionInput) {
  let contentContainer = createContentContainer(props.content);
  return createSectionContainer(props.id, props.darkBg, contentContainer);
}

export function createTextSectionContent(
  darkBg: boolean,
  title?: string,
  subtitle?: string,
  text?: string
) {
  return (
    <div>
      <h1 className={`${darkBg ? 'h1-light' : 'h1-dark'}`}>{title}</h1>
      <h2 className={`${darkBg ? 'h2-light' : 'h2-dark'}`}>{subtitle}</h2>
      <p
        className={`ext-justify ${
          darkBg ? 'text-textwhite' : 'text-textblack'
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
    <div className="flex flex-col sm:flex-row sm:items-center">
      {leftContent}
      {rightContent}
    </div>
  );
}

function createContentContainer(content: JSX.Element) {
  return (
    <div className="pb-20 pt-20 pl-10 pr-10 w-full md:max-w-4xl">{content}</div>
  );
}

function createSectionContainer(
  id: string,
  darkBg: boolean,
  content: JSX.Element
) {
  return (
    <div
      id={id}
      className={`flex flex-col items-center ${
        darkBg ? 'bg-black' : 'bg-white'
      }`}
    >
      {content}
    </div>
  );
}
