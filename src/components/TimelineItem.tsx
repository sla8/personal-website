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
import { Typography, useMediaQuery, useTheme } from '@mui/material';

interface TimelineContentContainerInput {
  screenIsAtLeastSm: boolean;
  content: JSX.Element[];
}

interface TimelineItemInput {
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
        <Typography
          variant="h2"
          sx={{ textAlign: screenIsAtLeastSm ? 'right' : 'left' }}
          className={`${props.titleColor}`}
        >
          {props.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            paddingBottom: '10px',
            textAlign: screenIsAtLeastSm ? 'right' : 'left',
          }}
          className={`${props.titleColor}`}
        >
          {props.subtitle}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'justify' }}>
          {props.text}
        </Typography>
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
        <TimelineConnector sx={{ opacity: props.connectorBottom ? 1 : 0 }} />
      </TimelineSeparator>
      <TimelineContent sx={{ paddingRight: 0 }}>
        <Typography
          variant="h2"
          sx={{ textAlign: 'left' }}
          className={`${props.titleColor}`}
        >
          {props.title}
        </Typography>
        <Typography
          variant="body1"
          sx={{ paddingBottom: '10px', textAlign: 'left' }}
          className={`${props.titleColor}`}
        >
          {props.subtitle}
        </Typography>
        <Typography variant="body1" sx={{ textAlign: 'justify' }}>
          {props.text}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}
