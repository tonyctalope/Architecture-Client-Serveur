import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { BeerFullProps, BreweryProps, OrderProps } from '../types';
import { baseUrl } from '../constants';

// GET ENDPOINTS -- Beer
export async function getAllBeers(page: number) {
  return useQuery<BeerFullProps>({
    queryKey: ['beers', { page }],
    keepPreviousData: true,
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}beers?page=${page}`);
      return data;
    },
    select: (data) => ({
      id: data.id,
      name: data.name,
      style: data.style,
      brewery: {
        id: data.brewery.id,
        name: data.brewery.name,
        location: data.brewery.location
      }
    }),
    retry: 5,
    cacheTime: 120
  });
}

export async function getABeerById(id: number) {
  return useQuery<BeerFullProps>({
    queryKey: ['beers', { id }],
    keepPreviousData: true,
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}beers/${id}`);
      return data;
    },
    select: (data) => ({
      id: data.id,
      name: data.name,
      style: data.style,
      brewery: {
        id: data.brewery.id,
        name: data.brewery.name,
        location: data.brewery.location
      }
    }),
    retry: 5,
    cacheTime: 120
  });
}

export async function getABeerByName(name: string) {
  return useQuery<BeerFullProps>({
    queryKey: ['beers', { name }],
    keepPreviousData: true,
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}beers?name=${name}`);
      return data;
    },
    select: (data) => ({
      id: data.id,
      name: data.name,
      style: data.style,
      brewery: {
        id: data.brewery.id,
        name: data.brewery.name,
        location: data.brewery.location
      }
    }),
    retry: 5,
    cacheTime: 120
  });
}

// GET ENDPOINTS -- Brewery
export async function getAllBreweries() {
  return useQuery<BreweryProps>({
    queryKey: ['breweries'],
    keepPreviousData: true,
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}breweries`);
      return data;
    },
    select: (data) => ({
      id: data.id,
      name: data.name,
      location: data.location,
      beers: data.beers
    }),
    retry: 5,
    cacheTime: 120
  });
}

export async function getABreweryById(id: number) {
  return useQuery<BreweryProps>({
    queryKey: ['breweries', { id }],
    keepPreviousData: true,
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}breweries/${id}`);
      return data;
    },
    select: (data) => ({
      id: data.id,
      name: data.name,
      location: data.location,
      beers: data.beers
    }),
    retry: 5,
    cacheTime: 120
  });
}

// GET ENDPOINTS -- Order
export async function getAllOrders() {
  return useQuery<OrderProps>({
    queryKey: ['orders'],
    keepPreviousData: true,
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}orders`);
      return data;
    },
    select: (data) => ({
      id: data.id,
      customerName: data.customerName,
      date: data.date,
      beers: data.beers
    }),
    retry: 5,
    cacheTime: 120
  });
}

export async function getAnOrderById(id: number) {
  return useQuery<OrderProps>({
    queryKey: ['orders', { id }],
    keepPreviousData: true,
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}orders/${id}`);
      return data;
    },
    select: (data) => ({
      id: data.id,
      customerName: data.customerName,
      date: data.date,
      beers: data.beers
    }),
    retry: 5,
    cacheTime: 120
  });
}
