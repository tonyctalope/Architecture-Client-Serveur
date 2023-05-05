import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BreweryProps } from '../../../types';
import { baseUrl } from '../../../constants';
import axios from 'axios';

export const AllBeersByBrewery = () => {
  const [breweries, setBreweries] = useState<BreweryProps[]>([]);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchBeers = async () => {
      async function getBreweriesById() {
        return await axios
          .get(`${baseUrl}breweries/${id}`)
          .then((res) => {
            console.log(res.data);
            return res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      }
      getBreweriesById().then((res) => {
        console.log(res);
        setBreweries(res.breweries);
      });
    };

    fetchBeers();
  }, [id]);

  return (
    <div>
      {breweries.map((brewery) => (
        <div key={brewery.id}>
          <h3>{brewery.name}</h3>
          <p>Id: {brewery.id}</p>
          <p>Beers: {brewery.beers}</p>
        </div>
      ))}
    </div>
  );
};
