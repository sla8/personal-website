import Section from 'components/Section';
import { text } from 'placeholder/Text';
import { navitems } from 'components/Navbar';

export default function Landing() {
  return (
    <div>
      <Section title={`Hi ${navitems[0]}!`} text={text} dark={true} />
      <Section title={`Hi ${navitems[1]}!`} text={text} dark={false} />
      <Section title={`Hi ${navitems[2]}!`} text={text} dark={true} />
      <Section title={`Hi ${navitems[3]}!`} text={text} dark={false} />
    </div>
  );
}
