import { useState } from 'react';
import { Card } from '../../components/Card';
import { Badge, Button, Col, Container, Form, Row } from 'react-bootstrap';
import { BeerFullProps } from '../../types';
import { useAuth0 } from '@auth0/auth0-react';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { postAnOrder } from '../../api/postRequests';
import { getAllBeers, getAllOrders } from '../../api/getRequests';

export const Search = () => {
  const [page, setPage] = useState(1);
  const { isAuthenticated, user } = useAuth0();

  const queryClient = useQueryClient();

  const queryGetAllBeers = useQuery({
    queryKey: ['beers', { page }],
    keepPreviousData: true,
    queryFn: () => getAllBeers(page),
    onSuccess: (data) => {
      queryClient.setQueryData(['beers', data.id], data);
      queryClient.invalidateQueries(['beers'], { exact: true });
    },
    retry: 5,
    cacheTime: 60
    });

  function navigateToAPage(amount: number) {
    setPage(page + amount);
  }

  const queryGetAllOrders = useQuery({
    queryKey: ['orders'],
    keepPreviousData: true,
    queryFn: getAllOrders,
    onSuccess: (data) => {
      queryClient.setQueryData(['orders', data.id], data);
      queryClient.invalidateQueries(['beers'], { exact: true });
    },
    retry: 5,
    cacheTime: 60
    });

  const queryPostAnOrder = useMutation({
    mutationFn: postAnOrder,
    onSuccess: (data) => {
      queryClient.setQueryData(['orders', data.id], data);
      queryClient.invalidateQueries(['orders'], { exact: true });
    },
    onError: (error) => {
      console.log(error);
    }
  });

  function countAllOrders(): number {
    if (
      queryGetAllOrders.data === null ||
      queryGetAllOrders.data === undefined ||
      queryGetAllOrders.data.length === 0
    ) {
      return 0;
    }
    return queryGetAllOrders.data.length;
  }

  function makeAnOrder(): number {
    return countAllOrders() + 1;
  }

  if (queryGetAllBeers.status === 'loading') {
    return (
      <Container className="d-flex align-items-center justify-content-center mt-4">
        <Row className="d-flex align-items-center justify-content-center">
          <h3>Chargement...</h3>
        </Row>
      </Container>
    );
  }

  if (queryGetAllBeers.status === 'error') {
    return (
      <Container className="d-flex align-items-center justify-content-center mt-4">
        <Row className="d-flex align-items-center justify-content-center">
          <h3>Un problème technique est survenu.</h3>
          <h5>Désolé, nous n'avons pas pu charger les bières.</h5>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Form>
        <Row className="d-lg-flex align-items-center justify-content-center">
          <Col xs={6} className="d-flex align-items-center">
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
          <div className="d-md-flex m-4 gap-4 align-items-center justify-content-evenly flex-wrap">
            {queryGetAllBeers.data.beers?.map((beer: BeerFullProps) => (
              <Card
                key={beer.id}
                pictureSrc={'/img/beers/' + beer.style.toLowerCase() + '.png'}
                name={beer.name}
                style={beer.style}
                breweryName={beer.brewery.name}
                breweryLocation={beer.brewery.location}
                children={
                  <Button
                    className="mb-4 mt-2"
                    variant="dark"
                    onClick={() => {
                      beer.id &&
                        queryPostAnOrder.mutate({
                          id: makeAnOrder(),
                          customerName: user.name,
                          date: new Date().toISOString(),
                          beers: [
                            {
                              id: beer.id,
                              name: beer.name,
                              style: beer.style
                            }
                          ]
                        });
                    }}>
                    Acheter
                  </Button>
                }
              />
            ))}
          </div>
        ) : (
          <p>Vous devez être connecté !</p>
        )}
      </div>
    </Container>
  );
};
