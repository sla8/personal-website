import { TextSectionImageLeft } from 'components/Section';
import { title as helloTitle, text as helloText } from 'res/landing/hello';
import womanReading from 'images/woman_reading.svg';

export default function Landing() {
  return (
    <div>
      <TextSectionImageLeft
        id={helloTitle}
        title={helloTitle}
        text={helloText}
        image={womanReading}
        imageAlt="woman reading"
        dark={true}
      />
    </div>
  );
}
