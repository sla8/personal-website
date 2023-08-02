import { useMediaQuery, useTheme } from '@mui/material';
import { Section, createTextSectionContent } from 'components/Section';
import {
  TimelineContentContainer,
  TimelineItemLeft,
  TimelineItemRight,
} from 'components/TimelineItem';
import { LandingSectionInput } from 'content/Landing';
import { id, title } from 'res/landing/work';

export default function Work(props: LandingSectionInput) {
  const theme = useTheme();
  const screenIsAtLeastSm = useMediaQuery(theme.breakpoints.up('md'));

  let titleColor = props.darkBg ? 'text-yellow' : 'text-textblue';
  let textColor = props.darkBg ? 'text-textwhite' : 'text-textblack';

  let content = (
    <div id={id}>
      {createTextSectionContent(props.darkBg, title)}
      <TimelineContentContainer
        screenIsAtLeastSm={screenIsAtLeastSm}
        content={[
          createErgonInternshipItem(titleColor, textColor, screenIsAtLeastSm),
          createCampusScoutZuehlkeItem(
            titleColor,
            textColor,
            screenIsAtLeastSm
          ),
        ]}
      />
    </div>
  );
  return (
    <Section id="timeline-section" darkBg={props.darkBg} content={content} />
  );
}

function createErgonInternshipItem(
  titleColor: string,
  textColor: string,
  screenIsAtLeastSm: boolean
) {
  return (
    <TimelineItemLeft
      time="2022"
      titleColor={titleColor}
      title="Software Development Intern"
      textColor={textColor}
      subtitle="Ergon Informatik AG, Zurich, Switzerland"
      text={
        <div>
          Developed and maintained multiple Android apps for HVAC solutions
          which communicate over NFC with a focus on the Belimo Assistant app
          and the shared library. Work included concept development,
          implementation of features, improvements, bug fixes, writing unit and
          UI tests, clarifying requirements with the client, and presenting
          demos.
        </div>
      }
      connectorTop={true}
      connectorBottom={true}
    />
  );
}

function createCampusScoutZuehlkeItem(
  titleColor: string,
  textColor: string,
  screenIsAtLeastSm: boolean
) {
  return (
    <TimelineItemRight
      time="2020 - 2021"
      titleColor={titleColor}
      title="Campus Scout"
      textColor={textColor}
      subtitle="Zühlke Engineering AG, Schlieren, Zurich"
      text={
        <div>
          Organized, promoted and participated in workshops, talks, and
          promotional booths at Swiss universities. Established relevant contact
          with university representatives and students. Acted as a contact
          person for students regarding career opportunities.
        </div>
      }
      connectorTop={true}
      connectorBottom={false}
    />
  );
}
