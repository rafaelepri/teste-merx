export interface ContentProps {
  id: string;
  value: string | number;
  field: string;
  symbol: string;
}

export interface HomeTableProps {
  headers: {
    id: string;
    value: string;
    filter: boolean;
    field: string;
  }[];
  body: {
    id: string;
    content: ContentProps[];
  }[];
}
