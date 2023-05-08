import axios from 'axios';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BeerFullProps, BreweryProps, OrderProps } from '../types';
import { baseUrl } from '../constants';

const queryClient = useQueryClient();

// DELETE ENDPOINTS -- Beer
export async function deleteABeer(id: number) {
  return useMutation<BeerFullProps>({
    mutationFn: async () => {
      const { data } = await axios.delete(`${baseUrl}beers/${id}`, {
        headers: {
          'Content-Type': 'application/json'
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

// DELETE ENDPOINTS -- Brewery
export async function deleteABrewery(id: number) {
  return useMutation<BreweryProps>({
    mutationFn: async () => {
      const { data } = await axios.delete(`${baseUrl}breweries/${id}`, {
        headers: {
          'Content-Type': 'application/json'
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

// DELETE ENDPOINTS -- Order
export async function deleteAnOrder(id: number) {
  return useMutation<OrderProps>({
    mutationFn: async () => {
      const { data } = await axios.delete(`${baseUrl}orders/${id}`, {
        headers: {
          'Content-Type': 'application/json'
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
