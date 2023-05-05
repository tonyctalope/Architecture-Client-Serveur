import { Container } from 'react-bootstrap';
import { BreweryProps } from '../../../types';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import { useQuery } from '@tanstack/react-query';

import { getAllBreweries } from '../../../api/GETRequests';

export const SearchByBreweries = () => {
  const { isAuthenticated, user } = useAuth0();

  const { status, error, data } = useQuery({
    queryKey: ['breweries'],
    keepPreviousData: true,
    queryFn: getAllBreweries
  });

  if (status === 'loading') return <h1>Loading...</h1>;
  if (status === 'error') return <h1>{JSON.stringify(error)}</h1>;

  return (
    <Container className="mt-4">
      <div className="relative px-2">
        {isAuthenticated && user !== undefined ? (
          <ul>
            {data.map((breweries: BreweryProps) => (
              <li key={breweries.id}>
                <div>Nom de la brasserie: {breweries.name}</div>
                <div>Localisation géographique: {breweries.location}</div>
                <Link to={`/brasserie/${breweries.id}/bieres`}>Voir les bières associées</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>Vous devez être connecté !</p>
        )}
      </div>
    </Container>
  );
};
