import axios from 'axios';
import { baseUrl } from '../constants';
import { BeerFullProps } from '../types';

// PATCH ENDPOINTS -- Beer
export async function editABeer({ id, name, style, brewery }: BeerFullProps) {
  return await axios
    .put(`${baseUrl}beers/${id}`, {
      name: `${name}`,
      style: `${style}`,
      brewery_id: `${brewery.id}`
    })
    .then((res) => {
      return res.data;
    });
}
