import { HomeTableProps } from 'utils/types';

export const mock: HomeTableProps = {
  headers: [
    {
      id: '1',
      value: 'STATUS',
      filter: false,
      field: 'code',
    },
    {
      id: '2',
      value: 'INVOICE',
      filter: true,
      field: 'order',
    },
    {
      id: '3',
      value: 'BALANCE',
      filter: true,
      field: 'amount',
    },
    {
      id: '4',
      value: 'DUE DATE',
      filter: false,
      field: 'due-date',
    },
    {
      id: '5',
      value: 'BEYOND TERMS',
      filter: false,
      field: 'terms',
    },
    {
      id: '6',
      value: '',
      filter: false,
      field: '',
    },
  ],
  body: [
    {
      id: '1',
      content: [
        {
          id: '1',
          value: 'Simbolo',
          field: 'code',
          symbol: 'ANF',
        },
        {
          id: '2',
          value: 676,
          field: 'order',
          symbol: 'NFE',
        },
        {
          id: '3',
          value: 95631.88,
          field: 'amount',
          symbol: 'PYA',
        },
        {
          id: '4',
          value: '2018-10-14',
          field: 'due-date',
          symbol: 'PYR',
        },
        {
          id: '5',
          value: 0,
          field: 'terms',
          symbol: 'PYD',
        },
        {
          id: '6',
          value: 'Details',
          field: '',
          symbol: 'DYA',
        },
      ],
    },
    {
      id: '2',
      content: [
        {
          id: '1',
          value: 'Simbolo',
          field: 'code',
          symbol: 'CRO',
        },
        {
          id: '2',
          value: 677,
          field: 'order',
          symbol: 'NFE',
        },
        {
          id: '3',
          value: 92631.88,
          field: 'amount',
          symbol: 'PYA',
        },
        {
          id: '4',
          value: '2018-10-14',
          field: 'due-date',
          symbol: 'PYR',
        },
        {
          id: '5',
          value: 95,
          field: 'terms',
          symbol: 'PYD',
        },
        {
          id: '6',
          value: 'Details',
          field: '',
          symbol: 'DYA',
        },
      ],
    },
    {
      id: '3',
      content: [
        {
          id: '1',
          value: 'Simbolo',
          field: 'code',
          symbol: 'CRO',
        },
        {
          id: '2',
          value: 678,
          field: 'order',
          symbol: 'NFE',
        },
        {
          id: '3',
          value: 90631.88,
          field: 'amount',
          symbol: 'PYA',
        },
        {
          id: '4',
          value: '2018-10-14',
          field: 'due-date',
          symbol: 'PYR',
        },
        {
          id: '5',
          value: 1,
          field: 'terms',
          symbol: 'PYD',
        },
        {
          id: '6',
          value: 'Details',
          field: '',
          symbol: 'DYA',
        },
      ],
    },
  ],
};
