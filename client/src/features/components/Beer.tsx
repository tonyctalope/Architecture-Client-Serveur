import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BeerProps } from '../types';

export const Beer = (
  { id, name, style, brewery_id }: BeerProps,
  imgUrl: string,
  redirect: string
) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>
          {id}. {name}
        </Card.Title>
        <Card.Text>
          {style} - {brewery_id}
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="primary" href={redirect}>
            modifier
          </Button>
          <Button variant="danger">supprimer</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
