import { TextSection, TextSectionImageLeft } from 'components/Section';
import {
  title as helloTitle,
  subtitle as helloSubtitle,
  text as helloText,
} from 'res/landing/hello';
import womanReading from 'images/woman_reading.svg';
import { text as loremIpsum } from 'res/placeholder/Text';

export default function Landing() {
  let helloImage = <HelloImage />;
  return (
    <div>
      <TextSectionImageLeft
        id={helloTitle}
        title={helloTitle}
        subtitle={helloSubtitle}
        text={helloText}
        image={helloImage}
        imageAlt="woman reading"
        dark={true}
      />
      <TextSection
        id="test-section"
        title="Lorem ipsum"
        text={loremIpsum}
        dark={false}
      />
    </div>
  );
}

function HelloImage() {
  return (
    <div className="w-full sm:w-7/12 md:w-10/12">
      <img src={womanReading} alt="woman reading" />
    </div>
  );
}
