import {
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
  Timeline,
} from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';
import { useMediaQuery, useTheme } from '@mui/material';

interface TimelineContentContainerInput {
  screenIsAtLeastMd: boolean;
  content: JSX.Element[];
}

interface TimelineItemInput {
  key: string;
  time: string;
  title: string;
  subtitle: string;
  texts: { title?: string; text: JSX.Element }[];
  connectorTop: boolean;
  connectorBottom: boolean;
  isRight: boolean;
}

export function TimelineContentContainer(props: TimelineContentContainerInput) {
  return (
    <div>
      <Timeline
        position={props.screenIsAtLeastMd ? 'alternate-reverse' : 'right'}
        sx={{ padding: 0 }}
      >
        {props.content}
      </Timeline>
    </div>
  );
}

export function CustomTimelineItem(props: TimelineItemInput) {
  const theme = useTheme();
  const screenIsAtLeastSm = useMediaQuery(theme.breakpoints.up('sm'));

  if (screenIsAtLeastSm) {
    return (
      <CustomTimelineItemWithTimeline
        key={props.key}
        time={props.time}
        title={props.title}
        subtitle={props.subtitle}
        texts={props.texts}
        connectorTop={props.connectorTop}
        connectorBottom={props.connectorTop}
        isRight={props.isRight}
      />
    );
  } else {
    return (
      <CustomTimelineItemWithoutTimeline
        key={props.key}
        time={props.time}
        title={props.title}
        subtitle={props.subtitle}
        texts={props.texts}
        connectorTop={props.connectorTop}
        connectorBottom={props.connectorTop}
        isRight={props.isRight}
      />
    );
  }
}

function CustomTimelineItemWithTimeline(props: TimelineItemInput) {
  const theme = useTheme();
  const screenIsAtLeastMd = useMediaQuery(theme.breakpoints.up('md'));
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{
          m: 'auto 0',
          flex: screenIsAtLeastMd ? 1 : 0.1,
          whiteSpace: screenIsAtLeastMd ? 'nowrap' : 'wrap',
          paddingLeft: screenIsAtLeastMd ? (props.isRight ? 0 : '16px') : 0,
          paddingRight: props.isRight ? (screenIsAtLeastMd ? '16px' : 0) : 0,
          marginRight: screenIsAtLeastMd ? 0 : '16px',
        }}
      >
        <div
          className={`bg-grey rounded-2xl sm:rounded-3xl w-14 sm:w-32 pl-3 pr-3 sm:pl-4 sm:pr-4 pt-1 pb-1 text-center body text-sm sm:text-base ${
            props.isRight ? 'sm:float-right' : ''
          }`}
        >
          {props.time}
        </div>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{ opacity: props.connectorTop ? 1 : 0 }} />
        <TimelineDot color="secondary">
          <SchoolIcon className="text-white" />
        </TimelineDot>
        <TimelineConnector sx={{ opacity: props.connectorTop ? 1 : 0 }} />
      </TimelineSeparator>
      {createTimelineContent(
        props.title,
        props.subtitle,
        props.texts,
        screenIsAtLeastMd,
        props.isRight
      )}
    </TimelineItem>
  );
}

function CustomTimelineItemWithoutTimeline(props: TimelineItemInput) {
  return (
    <div className="bg-grey rounded-3xl pl-10 pr-10 pt-8 pb-8 mb-3">
      <div className="mb-0 h2-dark">
        {props.title}
        <br />
        {props.subtitle}
        <br />
        <p className="body">{props.time}</p>
      </div>
      {props.texts.map((paragraph) => (
        <div>
          <div className={`pt-2 body ${'text-left'} text-textgreen`}>
            {paragraph.title}
          </div>
          <div className="body text-justify">{paragraph.text}</div>
        </div>
      ))}
    </div>
  );
}

function createTimelineContent(
  title: string,
  subtitle: string,
  texts: { title?: string; text: JSX.Element }[],
  screenIsAtLeastMd: boolean,
  isRight: boolean
) {
  return (
    <TimelineContent
      sx={{
        paddingRight: 0,
        paddingLeft: 0,
        marginLeft: screenIsAtLeastMd ? (isRight ? '16px' : 0) : '16px',
        marginRight: screenIsAtLeastMd ? (isRight ? 0 : '16px') : 0,
      }}
    >
      <div className="bg-grey rounded-3xl pl-10 pr-10 pt-8 pb-8">
        <div
          className={`${
            !isRight && screenIsAtLeastMd ? 'text-right' : 'text-left'
          } h2-dark mb-1 ${title ? '' : 'hidden'}`}
        >
          {title}
          <div
            className={`${
              !isRight && screenIsAtLeastMd ? 'text-right' : 'text-left'
            } mb-0 text-left h3-dark ${subtitle ? '' : 'hidden'}`}
          >
            {subtitle}
          </div>
        </div>
        {texts.map((paragraph) => (
          <div>
            <div
              className={`pt-2 body ${
                !isRight && screenIsAtLeastMd ? 'text-right' : 'text-left'
              } text-textgreen`}
            >
              {paragraph.title}
            </div>
            <div className="body text-justify">{paragraph.text}</div>
          </div>
        ))}
      </div>
    </TimelineContent>
  );
}
