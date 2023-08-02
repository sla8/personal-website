import { Section, createTextSectionContent } from 'components/Section';
import { LandingSectionInput } from 'content/Landing';
import { id, title } from 'res/landing/education';
import { Timeline } from '@mui/lab';
import { useMediaQuery, useTheme } from '@mui/material';
import {
  TimelineContentContainer,
  TimelineItemLeft,
  TimelineItemRight,
} from 'components/TimelineItem';

export default function Education(props: LandingSectionInput) {
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
          createMasterTimelineItem(titleColor, textColor, screenIsAtLeastSm),
          createBachelorTimelineItem(titleColor, textColor, screenIsAtLeastSm),
        ]}
      />
    </div>
  );
  return (
    <Section id="timeline-section" darkBg={props.darkBg} content={content} />
  );
}

function createBachelorTimelineItem(
  titleColor: string,
  textColor: string,
  screenIsAtLeastSm: boolean
) {
  return (
    <TimelineItemRight
      time="2014 - 2020"
      titleColor={titleColor}
      title="ETH Zurich"
      textColor={textColor}
      subtitle="Bachelor of Science ETH in Computer Science"
      text={
        <div>
          <b>Bachelor Thesis</b> "Elaboration of a Function Memorization System
          Together With the Implementation of a User Management System for
          WebTigerJython"
        </div>
      }
      connectorTop={true}
      connectorBottom={false}
    />
  );
}

function createMasterTimelineItem(
  titleColor: string,
  textColor: string,
  screenIsAtLeastSm: boolean
) {
  return (
    <TimelineItemLeft
      time="2020 - 2023"
      titleColor={titleColor}
      title="ETH Zurich"
      textColor={textColor}
      subtitle="Master of Science ETH in Computer Science"
      text={
        <div>
          <div className="pb-2">
            <b>Master Thesis</b> "Prioritizing Cybersecurity Controls Based on
            Coverage of Attack Techniques and Attack Probabilities" done in the
            ETH Zurich Information Security Group in collaboration with Zurich
            Insurance.
          </div>
          <div>
            <b>Courses:</b> Security Engineering, Network Security, Future
            Internet, Big Data, Advanced Systems Lab, Algorithms Lab, Ubiquitous
            Computing, Advanced Seminar on Computational Haptics, Wireless
            Networking and Mobile Computing
          </div>
        </div>
      }
      connectorTop={true}
      connectorBottom={false}
    />
  );
}
