import { useState } from 'react';
import { Badge, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { BeerProps } from '../../types';
import { useAuth0 } from '@auth0/auth0-react';

import { useQuery } from '@tanstack/react-query';

import { postAnOrder } from '../../api/POSTRequests';
import { getAllBeers } from '../../api/GETRequests';

export const Search = () => {
  const [page, setPage] = useState(1);
  const { isAuthenticated, user } = useAuth0();

  const { status, error, data } = useQuery({
    queryKey: ['beers', { page }],
    keepPreviousData: true,
    queryFn: () => getAllBeers(page)
  });

  function navigateToAPage(amount: number) {
    setPage(page + amount);
  }

  if (status === 'loading') return <h1>Loading...</h1>;
  if (status === 'error') return <h1>{JSON.stringify(error)}</h1>;

  return (
    <Container className="mt-4">
      <Form>
        <Row className="align-items-center justify-content-center">
          <Col xs={6} className="align-items-center">
            <Button
              className="mx-2"
              variant="dark"
              onClick={() => {
                page === 2 && navigateToAPage(-1);
              }}>
              Page précédente
            </Button>
            <Badge className="bg-black py-2">{page}/2</Badge>
            <Button
              className="mx-2"
              variant="dark"
              onClick={() => {
                page === 1 && navigateToAPage(1);
              }}>
              Page Suivante
            </Button>
          </Col>
        </Row>
      </Form>

      <div className="relative px-2">
        {isAuthenticated && user !== undefined ? (
          <ul>
            {data.beers.map((beer: BeerProps) => (
              <li key={beer.id}>
                <div>Nom de la bière: {beer.name}</div>
                <div>Style de bière: {beer.style}</div>
                <Button
                  className="mb-4 mt-2"
                  variant="dark"
                  onClick={() =>
                    beer.id &&
                    postAnOrder({
                      customer_name: user.name,
                      beers: [beer.id],
                      date: new Date().toISOString()
                    })
                  }>
                  Ajouter au panier
                </Button>
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
