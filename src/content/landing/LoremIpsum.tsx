import { Section, createTextSectionContent } from 'components/Section';
import { LandingSectionInput } from 'content/Landing';
import { text as loremIpsum } from 'res/placeholder/Text';

export default function LoremIpsum(props: LandingSectionInput) {
  return (
    <Section
      id="test-section"
      dark={props.darkBackground}
      content={createTextSectionContent(
        props.darkBackground,
        'Lorem Ipsum',
        undefined,
        loremIpsum
      )}
    />
  );
}
