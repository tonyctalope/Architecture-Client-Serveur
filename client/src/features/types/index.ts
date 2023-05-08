export type BeerFullProps = {
  id: number;
  name: string;
  style: string;
  brewery: {
    id: number;
    name: string;
    location: string;
  };
};

export type BeerProps = {
  id: number;
  name: string;
  style: string;
};

export type BreweryProps = {
  id: number;
  name: string;
  location: string;
  beers: BeerProps[];
};

type DateISO = string;

export type OrderProps = {
  id: number;
  customerName?: string;
  date: DateISO;
  beers: BeerProps[];
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

export type CardProps = {
  pictureSrc?: string;
  name?: string;
  style?: string;
  breweryName?: string;
  breweryLocation?: string;
  type?: 'order';
  customerName?: string;
  date?: DateISO;
  beer?: BeerProps;
};
