import styled from 'styled-components';

import Timeline from '@mui/lab/Timeline';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';

export const Container = styled.div`
  margin-top: 30px;

  margin-left: -130px;
  padding-right: 130px;
`;

interface DotProps {
  border: string;
}

export const TimelineMaterial = styled(Timeline)``;

export const TimelineDotMaterial = styled(TimelineDot)<DotProps>`
  border-color: ${({ border }) => border} !important;
  margin: 0px !important;
`;

interface ConnectorProps {
  bg?: string;
}

export const TimelineConnectorMaterial = styled(
  TimelineConnector
)<ConnectorProps>`
  ${({ bg }) => (bg ? `background-color: ${bg} !important;` : '')}
`;

export const TimelineContentMaterial = styled(TimelineContent)`
  padding: 0px !important;
  margin-top: -5px !important;
  margin-left: 20px !important;

  width: 97px;
  height: 18px;
  margin: 0 5px 1px 20px;
  font-family: Helvetica;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #8e9394;
`;

interface DateWrapperProps {
  marginRight?: string;
}

export const DateWrapper = styled.span<DateWrapperProps>`
  height: 14px;
  font-family: Helvetica;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #acb1b7;

  margin-right: 240px;
`;
