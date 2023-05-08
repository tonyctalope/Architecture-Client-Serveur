import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BeerFullProps, BreweryProps, OrderProps } from '../types';
import { baseUrl } from '../constants';

const queryClient = useQueryClient();

// POST ENDPOINTS -- Beer
export async function postABeer({ name, style, brewery }: BeerFullProps) {
  return useMutation<BeerFullProps>({
    mutationFn: async () => {
      const { data } = await axios.post(`${baseUrl}beers`, {
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          name: `${name}`,
          style: `${style}`,
          brewery: `${brewery}`
        }
      });
      return data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['beers', data.id], data);
      queryClient.invalidateQueries(['beers'], { exact: true });
    }
  });
}

// POST ENDPOINTS -- Brewery
export async function postABrewery({ name, location }: BreweryProps) {
  return useMutation<BreweryProps>({
    mutationFn: async () => {
      const { data } = await axios.post(`${baseUrl}breweries`, {
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          name: `${name}`,
          location: `${location}`
        }
      });
      return data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['breweries', data.id], data);
      queryClient.invalidateQueries(['breweries'], { exact: true });
    }
  });
}

// POST ENDPOINTS -- Order
export async function postAnOrder({ customerName, beers, date }: OrderProps) {
  return useMutation<OrderProps>({
    mutationFn: async () => {
      const { data } = await axios.post(`${baseUrl}orders`, {
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          customerName: `${customerName}`,
          beers: `${beers}`,
          date: `${date}`
        }
      });
      return data;
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['orders', data.id], data);
      queryClient.invalidateQueries(['orders'], { exact: true });
    }
  });
}
