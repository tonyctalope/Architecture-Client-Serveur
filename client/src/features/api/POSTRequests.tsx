import axios from 'axios';
import { baseUrl } from '../constants';
import { BeerProps, BreweryProps, OrderProps } from '../types';

// POST ENDPOINTS -- Beer
export async function postABeer({ name, style, brewery_id }: BeerProps) {
  return await axios
    .post(`${baseUrl}beers`, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        name: `${name}`,
        style: `${style}`,
        brewery_id: `${brewery_id}`
      }
    })
    .then((res) => res.data);
}

// POST ENDPOINTS -- Brewery
export async function postABrewery({ name, location }: BreweryProps) {
  return await axios
    .post(`${baseUrl}breweries`, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        name: `${name}`,
        location: `${location}`
      }
    })
    .then((res) => res.data);
}

// POST ENDPOINTS -- Order
export async function postAnOrder({ customer_name, beers, date }: OrderProps) {
  return await axios
    .put(`${baseUrl}orders`, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        customer_name: `${customer_name}`,
        date: `${date}`,
        beers: `${beers}`
      }
    })
    .then((res) => res.data);
}
