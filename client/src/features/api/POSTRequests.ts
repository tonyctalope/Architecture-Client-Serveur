import axios from 'axios';
import { BeerProps, BreweryProps, OrderProps } from '../types';

const baseUrl = 'https://back.blackbay-e5c0fb3a.francecentral.azurecontainerapps.io/';

// POST ENDPOINTS -- Beer
export const postABeer = async ({ id, name, style, brewery_id }: BeerProps) => {
  await axios
    .post(`${baseUrl}beers`, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        id: `${id}}`,
        name: `${name}`,
        style: `${style}`,
        brewery_id: `${brewery_id}`
      }
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// POST ENDPOINTS -- Brewery
export const postABrewery = async ({ id, name, location }: BreweryProps) => {
  await axios
    .post(`${baseUrl}breweries`, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        id: `${id}`,
        name: `${name}`,
        location: `${location}`
      }
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// PUT ENDPOINTS -- Order
export const postAnOrder = async ({ id, customer_name, beer_ids }: OrderProps) => {
  await axios
    .put(`${baseUrl}orders`, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: {
        id: `${id}`,
        customer_name: `${customer_name}`,
        beer_ids: `${beer_ids}`
      }
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
