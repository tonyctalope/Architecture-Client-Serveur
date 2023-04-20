import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Beer, SubmitForm } from '../../components';

import {
  getAllBeers,
  getABeerById,
  getABreweryById,
  getAllBreweries,
  getAllOrders
} from '../../api/GETRequests';
import { postABeer, postABrewery, postAnOrder } from '../../api/POSTRequests';

export const Search = () => {
  return (
    <Container className="mt-4 ">
      <div className="relative px-2">
        <SubmitForm />

        <Row>
          {['Primary', 'Secondary', 'Success', 'Danger', 'Warning', 'Info', 'Light', 'Dark'].map(
            (item) => (
              <Col key={item}>
                <Beer id={0} name={''} style={''} brewery_id={0} />
              </Col>
            )
          )}
        </Row>
      </div>
    </Container>
  );
};
