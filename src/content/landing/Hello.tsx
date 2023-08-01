import {
  Section,
  createSplitSectionContent,
  createTextSectionContent,
} from 'components/Section';
import {
  title as helloTitle,
  subtitle as helloSubtitle,
  text as helloText,
} from 'res/landing/hello';
import womanReading from 'images/woman_web.svg';
import { LandingSectionInput } from 'content/Landing';

export default function Hello(props: LandingSectionInput) {
  return (
    <Section
      id={helloTitle}
      dark={props.darkBackground}
      content={createHelloContent(props.darkBackground)}
    />
  );
}

function createHelloContent(dark: boolean) {
  let textContent = (
    <div className="w-full pt-12 sm:pt-0 sm:ml-10 md:pt-0 md:ml-20">
      {createTextSectionContent(dark, helloTitle, helloSubtitle, helloText)}
    </div>
  );
  let imageContent = (
    <div className="w-full sm:w-7/12 md:w-10/12">
      <img src={womanReading} alt="woman reading" />
    </div>
  );
  return createSplitSectionContent(imageContent, textContent);
}
