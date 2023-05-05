import { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { deleteAnOrder } from '../api/DELETERequests';
import { getAllOrders } from '../api/GETRequests';
import { OrderProps, BeerProps } from '../types';

export const Cart = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      getAllOrders().then((res) => {
        setOrders(res.orders);
      });
    };

    fetchData();
  }, []);

  return (
    <Container className="mt-4">
      <div className="relative px-2">
        <ul>
          {orders.map((order: OrderProps) => (
            <li key={order.id}>
              <div>ID de la commande: {order.id}</div>
              <div>Nom du client: {order.customer_name}</div>
              <div>Date de la commande: {order.date}</div>
              {order.beers.map((beer: BeerProps) => (
                <ul key="mybeers">
                  <li key={beer.id}>{beer.name}</li>
                </ul>
              ))}
              <Button
                className="mt-4"
                variant="danger"
                onClick={() => {
                  deleteAnOrder({ id: order.id });
                }}>
                Supprimer la commande
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};
