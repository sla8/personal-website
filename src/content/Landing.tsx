import { TextSection, TextSectionImageLeft } from 'components/Section';
import { navitems } from 'res/placeholder/Navigation';
import { text } from 'res/placeholder/Text';
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

      <TextSection
        id={`section${navitems[0]}`}
        title={`Hi ${navitems[0]}!`}
        text={text}
        dark={false}
      />

      <TextSection
        id={`section${navitems[1]}`}
        title={`Hi ${navitems[1]}!`}
        text={text}
        dark={true}
      />
      <TextSection
        id={`section${navitems[2]}`}
        title={`Hi ${navitems[2]}!`}
        text={text}
        dark={false}
      />
      <TextSection
        id={`section${navitems[3]}`}
        title={`Hi ${navitems[3]}!`}
        text={text}
        dark={true}
      />
    </div>
  );
}
