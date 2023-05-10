import axios from 'axios';
import { baseUrl } from '../constants';

// GET ENDPOINTS -- Beer
export async function getAllBeers(page: number) {
  return await axios.get(`${baseUrl}beers?page=${page}`).then((res) => res.data);
}

export async function getABeerById(id: number) {
  return await axios.get(`${baseUrl}beers/${id}`).then((res) => res.data);
}

export async function getABeerByName(name: string) {
  return await axios.get(`${baseUrl}beers?name=${name}`).then((res) => res.data);
}

// GET ENDPOINTS -- Brewery
export async function getAllBreweries() {
  return await axios.get(`${baseUrl}breweries`).then((res) => res.data);
}

export async function getABreweryById(id: number) {
  return await axios.get(`${baseUrl}breweries/${id}`).then((res) => res.data);
}

// GET ENDPOINTS -- Order
export async function getAllOrders() {
  return axios.get(`${baseUrl}orders`).then((res) => res.data);
}

export async function getAnOrderById(id: number) {
  return await axios.get(`${baseUrl}orders/${id}`).then((res) => res.data);
}
