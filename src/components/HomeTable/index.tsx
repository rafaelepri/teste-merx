import { useCallback, useState } from 'react';

import {
  MainContainer,
  TableHeader,
  TableRowStyling,
  TdStyling,
  Terms,
  ThStyling,
} from './styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { Tooltip } from '@mui/material';
import { currencyMask, formatDate } from 'utils/format';

import WrongLocationSharpIcon from '@mui/icons-material/WrongLocationSharp';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';

import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import { useNavigate } from 'react-router-dom';
import { HomeTableProps, ContentProps } from 'utils/types';

function HomeTable({ headers, body }: HomeTableProps) {
  const navigate = useNavigate();

  const [filteredBody, setFilteredBody] = useState(body);
  const [order, setOrder] = useState<'asc' | 'desc' | undefined>('asc');
  const [orderBy, setOrderBy] = useState('');

  const handleSortRequest = (cell: string) => {
    const isAsc = orderBy === cell && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(cell);

    if (isAsc) {
      const holdBody = filteredBody.sort(
        (a, b) =>
          +a.content[a.content.findIndex((getIndex) => getIndex.field === cell)]
            .value -
          +b.content[b.content.findIndex((getIndex) => getIndex.field === cell)]
            .value
      );

      setFilteredBody(holdBody);

      return;
    }

    const holdBody = filteredBody.sort(
      (a, b) =>
        +b.content[b.content.findIndex((getIndex) => getIndex.field === cell)]
          .value -
        +a.content[a.content.findIndex((getIndex) => getIndex.field === cell)]
          .value
    );

    setFilteredBody(holdBody);
  };

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

  const handleDetails = useCallback((content: ContentProps[]) => {
    return (
      <Tooltip
        title="Order Details"
        placement="top"
        arrow
        enterDelay={500}
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: '#263238;',
              height: '16px',
              paddingTop: '8px',
              '& .MuiTooltip-arrow': {
                color: '#263238;',
              },
            },
          },
        }}
      >
        <MoreHorizOutlinedIcon
          sx={{
            color: '#e3e3e3',
            fontSize: 24,
            borderRadius: '21px',
            padding: '6px',
            cursor: 'pointer',

            '&:hover': {
              borderRadius: '18px',
              border: 'solid 1px #d8e3e8',

              marginBottom: '-2px',
              marginLeft: '-2px',
            },
          }}
          onClick={() => navigate('/details', { state: content })}
        />
      </Tooltip>
    );
  }, []);

  const handleStatus = useCallback((symbol: string | number) => {
    switch (symbol) {
      case 'ANF':
        return (
          <Tooltip
            title="Wrong Location"
            placement="top"
            arrow
            enterDelay={300}
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: '#263238;',
                  height: '16px',
                  paddingTop: '8px',
                  '& .MuiTooltip-arrow': {
                    color: '#263238;',
                  },
                },
              },
            }}
          >
            <WrongLocationSharpIcon
              sx={{
                backgroundColor: '#ff6f60',
                color: '#ffffff',
                fontSize: 24,
                borderRadius: '21px',
                padding: '6px',
                cursor: 'pointer',
              }}
              onClick={() => console.log('work')}
            />
          </Tooltip>
        );
      default:
        return (
          <Tooltip
            title="Create Order"
            placement="top"
            arrow
            enterDelay={300}
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: '#263238;',
                  height: '16px',
                  paddingTop: '8px',
                  '& .MuiTooltip-arrow': {
                    color: '#263238;',
                  },
                },
              },
            }}
          >
            <AddOutlinedIcon
              sx={{
                border: '1px solid #e3e3e3',
                borderRadius: '21px',
                fontSize: 30,
                backgroundColor: '#ffffff',
                cursor: 'pointer',
              }}
              onClick={() => console.log('work')}
            />
          </Tooltip>
        );
    }
  }, []);

  const handleRender = useCallback(
    (row: ContentProps, content: ContentProps[]) => {
      switch (row.field) {
        case 'code':
          return handleStatus(row.symbol);
        case 'amount':
          return currencyMask(+row.value);
        case 'due-date':
          return formatDate(row.value as string);
        case 'terms':
          return handleTerms(+row.value);
        case '':
          return handleDetails(content);
        default:
          return `#${row.value}`;
      }
    },
    []
  );

  return (
    <MainContainer>
      <Table aria-label="customized table">
        <TableHeader>
          <TableRow>
            {headers.map((item) => (
              <TableCell sx={ThStyling} variant="head" key={item.id}>
                {item.filter ? (
                  <TableSortLabel
                    onClick={() => {
                      handleSortRequest(item.field);
                    }}
                    direction={orderBy === item.field ? order : 'asc'}
                    active={orderBy === item.field}
                  >
                    {item.value}
                  </TableSortLabel>
                ) : (
                  item.value
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredBody.map((item) => (
            <TableRow sx={TableRowStyling} key={item.id}>
              {item.content.map((row) => (
                <TableCell sx={TdStyling} key={row.id}>
                  {handleRender(row, item.content)}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </MainContainer>
  );
}

export default HomeTable;
