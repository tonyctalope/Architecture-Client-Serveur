export type BeerProps = {
  id?: number;
  name: string;
  style: string;
  brewery_id: number;
};

export type BreweryProps = {
  id?: number;
  name: string;
  location: string;
  beers: number[];
};

type DateISO = string;

export type OrderProps = {
  id?: number;
  customer_name?: string;
  date: DateISO;
  beers: number[];
};

export type ButtonProps = {
  className?: string;
  variant:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark'
    | 'link';
  href?: string;
  color?: string;
  pageId?: number;
};
