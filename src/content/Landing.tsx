import Section from 'components/Section';
import { text } from 'placeholder/Text';
import { navitems } from 'placeholder/Navigation';

export default function Landing() {
  return (
    <div>
      <Section
        id={`section${navitems[0]}`}
        title={`Hi ${navitems[0]}!`}
        text={text}
        dark={true}
      />
      <Section
        id={`section${navitems[1]}`}
        title={`Hi ${navitems[1]}!`}
        text={text}
        dark={false}
      />
      <Section
        id={`section${navitems[2]}`}
        title={`Hi ${navitems[2]}!`}
        text={text}
        dark={true}
      />
      <Section
        id={`section${navitems[3]}`}
        title={`Hi ${navitems[3]}!`}
        text={text}
        dark={false}
      />
    </div>
  );
}
