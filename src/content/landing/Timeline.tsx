import { Section, createTextSectionContent } from 'components/Section';
import { LandingSectionInput } from 'content/Landing';
import { subtitle, text, title } from 'res/landing/timeline';

export default function Timeline(props: LandingSectionInput) {
  let textContent = createTextSectionContent(
    props.darkBg,
    title,
    subtitle,
    text
  );
  let content = <div>{textContent}</div>;
  return <Section id="timeline-section" darkBg={false} content={content} />;
}
