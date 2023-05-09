import axios from 'axios';
import { baseUrl } from '../constants';

// DELETE ENDPOINTS -- Beer
export async function deleteABeer(id: number) {
  return await axios.delete(`${baseUrl}beers/${id}`).then((res) => {
    return res.data;
  });
}

// DELETE ENDPOINTS -- Brewery
export async function deleteABrewery(id: number) {
  return await axios.delete(`${baseUrl}breweries/${id}`).then((res) => {
    return res.data;
  });
}

// DELETE ENDPOINTS -- Order
export async function deleteAnOrder(id: number) {
  return await axios.put(`${baseUrl}orders/${id}`).then((res) => {
    return res.data;
  });
}
