import { useState, useEffect, useRef, MutableRefObject } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { Beer } from '../..';

import { UseMutationResult, useMutation, useQueryClient } from '@tanstack/react-query';

import { postABeer, postABrewery } from '../../../api/postRequests';
import { BeerProps } from '../../../types';

export const SubmitForm = () => {
  const [validated, setValidated] = useState(false);

  const nameRef = useRef();
  const styleRef = useRef();
  const brewery_idRef = useRef();

  const queryClient = useQueryClient();

  const createPostMutation = useMutation({
    mutationFn: postABeer,
    onSuccess: (data) => {
      queryClient.setQueryData(['beers', data.id], data);
      queryClient.invalidateQueries(['beers'], { exact: true });
    }
  });

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    createPostMutation.mutate({
      name: nameRef.current.value,
      style: styleRef.current.value,
      brewery_id: brewery_idRef.current.value
    });
    setValidated(true);
  };

  return (
    <Container className="mt-4 ">
      {createPostMutation.isError && JSON.stringify(createPostMutation.error)}
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationName">
            <Form.Label>Nom</Form.Label>
            <Form.Control required type="text" placeholder="Nom de la bière" />
            <Form.Control.Feedback>Veuillez choisir un nom</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationStyle">
            <Form.Label>Style</Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  );
};
