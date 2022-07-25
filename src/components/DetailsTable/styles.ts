import styled from 'styled-components';

import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Chip from '@mui/material/Chip';
import { SxProps } from '@mui/material';

export const MainContainer = styled(TableContainer)`
  max-width: 674px;

  margin: 0 auto;

  width: 674px;

  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;

  border-radius: 4px;
  border: solid 1px #d8e3e8;
`;

export const TableHeader = styled(TableHead)`
  background-color: #f9f9fb;
  height: 47px;
`;

interface ChipProps {
  background: string;
  fontColor: string;
}

export const Terms = styled(Chip)<ChipProps>`
  background-color: ${({ background }) => background} !important;
  color: ${({ fontColor }) => fontColor} !important;
`;

export const ButtonWrapper = styled.div`
  margin-top: 10px;
  width: 100%;

  justify-content: flex-end;
  display: flex;
`;

export const ThStyling: SxProps = {
  color: '#a8adb2',
  fontFamily: 'Helvetica',
  fontSize: '12px',
  fontWeight: 'bold',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'center',
};

export const TdStyling: SxProps = {
  color: '#8e9394',
  fontFamily: 'Helvetica',
  fontSize: '15px',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 'normal',
  letterSpacing: 'normal',
  textAlign: 'center',
};

export const TableRowStyling: SxProps = {
  transition: 'all 0.4s',

  '&:hover': {
    borderRadius: '4px',
    border: 'solid 1px #d8e3e8',

    marginLeft: '-20px',
    marginRight: '-20px',
  },
};
