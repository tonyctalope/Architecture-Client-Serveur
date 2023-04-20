export type BeerProps = {
  id: number;
  name: string;
  style: string;
  brewery_id: number;
};

export type BreweryProps = {
  id: number;
  name: string;
  location: string;
};

export type OrderProps = {
  id: number;
  customer_name: string;
  beer_ids: number[];
};
