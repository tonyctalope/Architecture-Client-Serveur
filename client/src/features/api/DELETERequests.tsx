import axios from 'axios';
import { baseUrl } from '../constants';

// DELETE ENDPOINTS -- Beer
export async function deleteABeer(id: number) {
  return await axios
    .delete(`${baseUrl}beers/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

// DELETE ENDPOINTS -- Brewery
export async function deleteABrewery(id: number) {
  return await axios
    .delete(`${baseUrl}breweries/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}

// DELETE ENDPOINTS -- Order
export async function deleteAnOrder(id: number) {
  return await axios
    .put(`${baseUrl}orders/${id}`, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
}
