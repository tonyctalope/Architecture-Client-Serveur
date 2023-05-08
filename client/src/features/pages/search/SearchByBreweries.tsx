import { useState } from 'react';
import { Card } from '../../components';
import { Container, Button, Col, Row, Nav, Tab } from 'react-bootstrap';
import { BeerProps, BreweryProps } from '../../types';
import { useAuth0 } from '@auth0/auth0-react';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { postAnOrder } from '../../api/postRequests';
import { getAllBreweries, getABreweryById } from '../../api/getRequests';

export const SearchByBreweries = () => {
  const [id, setId] = useState(1);
  const { isAuthenticated, user } = useAuth0();

  const queryClient = useQueryClient();

  const queryGetAllBreweries = useQuery({
    queryKey: ['breweries'],
    keepPreviousData: true,
    queryFn: getAllBreweries,
    retry: 5,
    cacheTime: 60
  });

  function defineBreweryId(id: number) {
    setId(id);
  }

  const queryGetABreweryById = useQuery({
    queryKey: ['brewery', { id }],
    keepPreviousData: true,
    queryFn: () => getABreweryById(id),
    retry: 5,
    cacheTime: 60
  });

  const queryPostAnOrder = useMutation({
    mutationFn: postAnOrder,
    onSuccess: (data) => {
      queryClient.setQueryData(['orders', data.id], data);
      // invalidate the cache for this query, and refresh
      queryClient.invalidateQueries(['orders'], { exact: true });
    },
    onError: (error) => {
      console.log(error);
    }
  });

  function countAllOrders(): number {
    if (queryGetAllBreweries.data === undefined) {
      return 0;
    } else if (queryGetAllBreweries.data.length === 0) return 0;
    return queryGetAllBreweries.data.length;
  }

  function makeAnOrder(): number {
    return countAllOrders() + 1;
  }

  if (queryGetAllBreweries.status === 'loading') {
    return (
      <Container className="d-flex align-items-center justify-content-center mt-4">
        <Row className="d-flex align-items-center justify-content-center">
          <h3>Chargement...</h3>
        </Row>
      </Container>
    );
  }

  if (queryGetAllBreweries.status === 'error') {
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
      <div className="relative px-2">
        {isAuthenticated && user !== undefined ? (
          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                  {queryGetAllBreweries.data?.map((breweries: BreweryProps) => (
                    <Nav.Item key={breweries.id}>
                      <Nav.Link
                        eventKey={breweries.id}
                        onClick={() => {
                          defineBreweryId(breweries.id);
                        }}>
                        {breweries.name}
                      </Nav.Link>
                    </Nav.Item>
                  ))}
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Content>
                  {queryGetABreweryById.data.brewbery?.map((brewery: BreweryProps) => (
                    <>
                      {brewery.beers.map((beer: BeerProps) => (
                        <Tab.Pane key={beer.id} eventKey={beer.id}>
                          <Card
                            key={beer.id}
                            name={beer.name}
                            style={beer.style}
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
                        </Tab.Pane>
                      ))}
                    </>
                  ))}
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        ) : (
          <p>Vous devez être connecté !</p>
        )}
      </div>
    </Container>
  );
};
