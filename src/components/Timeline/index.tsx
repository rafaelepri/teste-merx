import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';

import {
  Container,
  TimelineMaterial,
  TimelineDotMaterial,
  TimelineConnectorMaterial,
  TimelineContentMaterial,
  DateWrapper,
} from './styles';

function TimelineComponent() {
  const mockDate = '2018-06-05';

  return (
    <Container>
      <TimelineMaterial>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDotMaterial border="#76d275" variant="outlined" />
            <TimelineConnectorMaterial />
          </TimelineSeparator>
          <TimelineContentMaterial>Create a Order</TimelineContentMaterial>
          <DateWrapper>{mockDate}</DateWrapper>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDotMaterial border="#76d275" variant="outlined" />
            <TimelineConnectorMaterial bg="#ff6f60" />
          </TimelineSeparator>

          <TimelineContentMaterial>Payment Request</TimelineContentMaterial>
          <DateWrapper>{mockDate}</DateWrapper>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDotMaterial border="#ff6f60" variant="outlined" />
          </TimelineSeparator>
          <TimelineContentMaterial>Wrong Amount</TimelineContentMaterial>
          <DateWrapper>{mockDate}</DateWrapper>
        </TimelineItem>
      </TimelineMaterial>
    </Container>
  );
}

export default TimelineComponent;
