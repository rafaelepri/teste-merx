import { useNavigate } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { ContentProps } from 'utils/types';
import { useCallback } from 'react';
import { currencyMask, formatDate } from 'utils/format';

import {
  ButtonWrapper,
  MainContainer,
  TableHeader,
  TableRowStyling,
  TdStyling,
  Terms,
  ThStyling,
} from './styles';
import TimelineComponent from 'components/Timeline';
import { Button } from '@mui/material';

function DetailsTable(props: { body: ContentProps[] }) {
  const navigate = useNavigate();

  const handleTerms = useCallback((value: number) => {
    switch (true) {
      case value === 0:
        return (
          <Terms background="#e9f8e9" fontColor="#2fa12d" label="Current" />
        );
      case value > 0 && value < 30:
        return (
          <Terms
            background="#fff5e7"
            fontColor="#cc8325"
            label={value === 1 ? `1 day late` : `${value} days late`}
          />
        );
      case value > 30 && value < 75:
        return (
          <Terms
            background="#ffeae4"
            fontColor="#f25324"
            label={`${value} days late`}
          />
        );
      case value > 75 && value < 90:
        return (
          <Terms
            background="#ffe4e3"
            fontColor="#e32319"
            label={`${value} days late`}
          />
        );
      default:
        return (
          <Terms
            background="#f2ebf7"
            fontColor="#925abf"
            label={`${value} days late`}
          />
        );
    }
  }, []);

  const handleRender = useCallback((row: ContentProps) => {
    switch (row.field) {
      case 'amount':
        return currencyMask(+row.value);
      case 'due-date':
        return formatDate(row.value as string);
      case 'terms':
        return handleTerms(+row.value);
      case 'order':
        return `#${row.value}`;
      default:
        break;
    }
  }, []);

  return (
    <>
      <MainContainer>
        <Table aria-label="customized table">
          <TableHeader>
            <TableRow>
              <TableCell sx={ThStyling} variant="head">
                INVOICE
              </TableCell>
              <TableCell sx={ThStyling} variant="head">
                BALANCE
              </TableCell>
              <TableCell sx={ThStyling} variant="head">
                DUE DATE
              </TableCell>
              <TableCell sx={ThStyling} variant="head">
                BEYOND TERMS
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow sx={TableRowStyling}>
              {props.body.map((row) => (
                <>
                  {row.field !== 'code' && row.field && (
                    <TableCell key={row.id} sx={TdStyling}>
                      {handleRender(row)}
                    </TableCell>
                  )}
                </>
              ))}
            </TableRow>
          </TableBody>
        </Table>
        <TimelineComponent />
      </MainContainer>

      <ButtonWrapper>
        <Button onClick={() => navigate(-1)} variant="outlined">
          BACKWARD
        </Button>
      </ButtonWrapper>
    </>
  );
}

export default DetailsTable;
