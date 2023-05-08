import { useState } from 'react';
import { Card } from '../components';
import { Button, Container, Row } from 'react-bootstrap';
import { OrderProps, BeerProps } from '../types';
import { useAuth0 } from '@auth0/auth0-react';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { deleteAnOrder } from '../api/deleteRequests';
import { getAllOrders } from '../api/getRequests';

export const Cart = () => {
  const { isAuthenticated, user } = useAuth0();
  const [id, setId] = useState(1);

  const queryClient = useQueryClient();

  const queryDeleteAnOrder = useMutation({
    mutationFn: () => deleteAnOrder(id),
    onSuccess: (data) => {
      queryClient.setQueryData(['orders'], data);
      queryClient.invalidateQueries(['orders'], { exact: true });
    }
  });

  const queryGetAllOrders = useQuery({
    queryKey: ['beers'],
    keepPreviousData: true,
    queryFn: getAllOrders,
    cacheTime: 60
  });

  function isOrderedByUser() {
    if (user !== undefined && user.name === queryGetAllOrders.data.customerName) {
      return true;
    }
    return false;
  }

  function orderId(id: number) {
    setId(id);
  }

  if (queryGetAllOrders.status === 'loading') {
    return (
      <Container className="d-flex align-items-center justify-content-center mt-4">
        <Row className="d-flex align-items-center justify-content-center">
          <h3>Chargement...</h3>
        </Row>
      </Container>
    );
  }

  if (queryGetAllOrders.status === 'error') {
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
        {isAuthenticated && user !== undefined && isOrderedByUser() === true ? (
          <>
            <h3>Voici vos commandes</h3>
            {queryGetAllOrders.data.orders?.map((order: OrderProps) => (
              <>
                {order.beers.map((beer: BeerProps) => (
                  <Card
                    key={order.id}
                    type="order"
                    date={order.date}
                    name={beer.name}
                    style={beer.style}
                    children={
                      <Button
                        className="mt-4"
                        variant="danger"
                        onClick={() => {
                          queryDeleteAnOrder.mutate();
                        }}>
                        Supprimer la commande
                      </Button>
                    }
                  />
                ))}
              </>
            ))}
          </>
        ) : (
          <h3>Votre panier est vide</h3>
        )}
      </div>
    </Container>
  );
};
