import axios from 'axios';
import { baseUrl } from '../constants';
import { BeerFullProps, BreweryProps, OrderProps } from '../types';

// POST ENDPOINTS -- Beer
export async function postABeer({ name, style, brewery }: BeerFullProps) {
  return await axios
    .post(`${baseUrl}beers`, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        name: `${name}`,
        style: `${style}`,
        brewery_id: `${brewery}`
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
export async function postAnOrder({ customerName, beers, date }: OrderProps) {
  return await axios
    .put(`${baseUrl}orders`, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        customer_name: `${customerName}`,
        date: `${date}`,
        beers: `${beers}`
      }
    })
    .then((res) => res.data);
}
