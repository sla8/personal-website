import { useMediaQuery, useTheme } from '@mui/material';
import { Section, createTextSectionContent } from 'components/Section';
import {
  CustomTimelineItem,
  TimelineContentContainer,
} from 'components/TimelineItem';
import { LandingSectionInput } from 'content/Landing';
import { id, title } from 'res/landing/work';

export default function Work(props: LandingSectionInput) {
  const theme = useTheme();
  const screenIsAtLeastMd = useMediaQuery(theme.breakpoints.up('md'));

  let content = (
    <div id={id}>
      {createTextSectionContent(title)}
      <TimelineContentContainer
        screenIsAtLeastMd={screenIsAtLeastMd}
        content={[createErgonInternshipItem(), createCampusScoutZuehlkeItem()]}
      />
    </div>
  );
  return <Section id="timeline-section" content={content} />;
}

function createErgonInternshipItem() {
  return (
    <CustomTimelineItem
      key="ergon-internship-timeline-item"
      time="2022"
      title="Software Development Intern"
      subtitle="Ergon Informatik AG, Zurich, Switzerland"
      texts={[
        {
          title: undefined,
          text: (
            <div>
              Developed and maintained multiple Android apps for HVAC solutions
              which communicate over NFC. Work included concept development,
              implementation of features, improvements, bug fixes, writing unit
              and UI tests, clarifying requirements with the client, and
              presenting demos.
            </div>
          ),
        },
      ]}
      connectorTop={true}
      connectorBottom={true}
    />
  );
}

function createCampusScoutZuehlkeItem() {
  return (
    <CustomTimelineItem
      key="zuehlke-campus-scout-timeline-item"
      time="2020 - 2021"
      title="Campus Scout"
      subtitle="Zühlke Engineering AG, Schlieren, Switzerland"
      texts={[
        {
          title: undefined,
          text: (
            <div>
              Organized, promoted and participated in workshops, talks, and
              promotional booths at Swiss universities. Established relevant
              contact with university representatives and students. Acted as a
              contact person for students regarding career opportunities.
            </div>
          ),
        },
      ]}
      connectorTop={true}
      connectorBottom={false}
    />
  );
}
