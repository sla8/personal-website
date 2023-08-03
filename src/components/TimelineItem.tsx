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
  screenIsAtLeastSm: boolean;
  content: JSX.Element[];
}

interface TimelineItemInput {
  key: string;
  time: string;
  titleColor: string;
  title: string;
  textColor: string;
  subtitle: string;
  text: JSX.Element;
  connectorTop: boolean;
  connectorBottom: boolean;
}

export function TimelineContentContainer(props: TimelineContentContainerInput) {
  return (
    <div>
      <Timeline
        position={props.screenIsAtLeastSm ? 'alternate-reverse' : 'right'}
        sx={{ padding: 0 }}
      >
        {props.content}
      </Timeline>
    </div>
  );
}

export function TimelineItemLeft(props: TimelineItemInput) {
  const theme = useTheme();
  const screenIsAtLeastSm = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{
          m: 'auto 0',
          flex: screenIsAtLeastSm ? 1 : 0.1,
          whiteSpace: 'nowrap',
          paddingLeft: screenIsAtLeastSm ? '16px' : 0,
          paddingRight: screenIsAtLeastSm ? 0 : '16px',
          minWidth: screenIsAtLeastSm ? 'none' : '103px',
          maxWidth: screenIsAtLeastSm ? 'none' : '103px',
        }}
        className={`${props.textColor}`}
      >
        {props.time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{ opacity: props.connectorTop ? 1 : 0 }} />
        <TimelineDot color="secondary">
          <SchoolIcon className="text-white" />
        </TimelineDot>
        <TimelineConnector sx={{ opacity: props.connectorTop ? 1 : 0 }} />
      </TimelineSeparator>
      <TimelineContent
        sx={{
          paddingRight: screenIsAtLeastSm ? '16px' : 0,
          paddingLeft: screenIsAtLeastSm ? 0 : '16px',
        }}
      >
        <div
          className={`${screenIsAtLeastSm ? 'text-right' : 'text-left'} ${
            props.titleColor
          } pb-1 text-left antialiased font-normal`}
        >
          {props.title}
        </div>
        <div
          className={`${screenIsAtLeastSm ? 'text-right' : 'text-left'} ${
            props.titleColor
          } pb-1`}
        >
          {props.subtitle}
        </div>
        <div className={`${props.textColor} text-justify`}>{props.text}</div>
      </TimelineContent>
    </TimelineItem>
  );
}

export function TimelineItemRight(props: TimelineItemInput) {
  const theme = useTheme();
  const screenIsAtLeastSm = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{
          m: 'auto 0',
          flex: screenIsAtLeastSm ? 1 : 0.1,
          whiteSpace: 'nowrap',
          paddingLeft: 0,
          minWidth: screenIsAtLeastSm ? 'none' : '103px',
          maxWidth: screenIsAtLeastSm ? 'none' : '103px',
        }}
        className={`w-60 ${props.textColor}`}
      >
        {props.time}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{ opacity: props.connectorTop ? 1 : 0 }} />
        <TimelineDot color="secondary">
          <SchoolIcon className="text-white" />
        </TimelineDot>
        <TimelineConnector sx={{ opacity: props.connectorBottom ? 1 : 0 }} />
      </TimelineSeparator>
      <TimelineContent sx={{ paddingRight: 0 }}>
        <div
          className={`${props.titleColor} pb-1 text-left antialiased font-normal`}
        >
          {props.title}
        </div>
        <div className={`${props.titleColor} pb-1 text-left`}>
          {props.subtitle}
        </div>
        <div className={`${props.textColor} text-justify`}>{props.text}</div>
      </TimelineContent>
    </TimelineItem>
  );
}
