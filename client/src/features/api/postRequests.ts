import axios from 'axios';
import { baseUrl } from '../constants';
import { BeerWithoutIdProps, OrderProps } from '../types';

// POST ENDPOINTS -- Beer
export async function postABeer({ name, style, brewery }: BeerWithoutIdProps) {
  return await axios
    .post(`${baseUrl}beers`, {
      name: `${name}`,
      style: `${style}`,
      brewery_id: `${brewery.id}`
    })
    .then((res) => res.data);
}

// POST ENDPOINTS -- Order
export async function postAnOrder({ customerName, beers }: OrderProps) {
  return await axios
    .post(`${baseUrl}orders`, {
      customer_name: `${customerName}`,
      beer_ids: [`${beers.id}`]
    })
    .then((res) => res.data);
}
