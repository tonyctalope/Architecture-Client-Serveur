import { useState, useEffect } from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { Beer } from '../../../components';

import {
  getAllBeers,
  getABeerById,
  getABreweryById,
  getAllBreweries,
  getAllOrders
} from '../../../api/GETRequests';
import { postABeer, postABrewery, postAnOrder } from '../../../api/POSTRequests';

export const SubmitForm = () => {
  // const [beers, setBeers] = useState([]);
  // const [breweries, setBreweries] = useState([]);
  // const [orders, setOrders] = useState([]);

  // useEffect(() => {
  //   getAllBeers().then((data) => setBeers(data));
  //   getAllBreweries().then((data) => setBreweries(data));
  //   getAllOrders().then((data) => setOrders(data));
  // }, []);

  // const handleDeleteBeer = (id: number) => {
  //   deleteABeerById(id).then(() => {
  //     getAllBeers().then((data) => setBeers(data));
  //   });
  // };

  // const handleDeleteBrewery = (id: number) => {
  //   deleteABreweryById(id).then(() => {
  //     getAllBreweries().then((data) => setBreweries(data));
  //   });
  // };

  // const handleDeleteOrder = (id: number) => {
  //   deleteAnOrderById(id).then(() => {
  //     getAllOrders().then((data) => setOrders(data));
  //   });
  // };

  const [validated, setValidated] = useState(false);

  type EventProps = {
    currentTarget: HTMLFormElement;
    preventDefault: () => void;
    stopPropagation: () => void;
  };

  const handleSubmit = (event: EventProps) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return (
    <Container className="mt-4 ">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Type de tri</Form.Label>
            <Form.Check
              type="radio"
              id={`check-api-radio`}
              feedback="Vous devez choisir un mode de tri."
              feedbackType="invalid">
              <Form.Check
                required
                inline
                label="Par bière"
                name="group1"
                type="radio"
                id={`inline-radio-1`}
              />
              <Form.Check
                required
                inline
                label="Par brasserie"
                name="group1"
                type="radio"
                id={`inline-radio-2`}
              />
            </Form.Check>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control required type="text" placeholder="Last name" defaultValue="Otto" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control type="text" placeholder="State" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom05">
            <Form.Label>Zip</Form.Label>
            <Form.Control type="text" placeholder="Zip" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Form.Group className="mb-3">
          <Form.Check
            required
            label="Agree to terms and conditions"
            feedback="You must agree before submitting."
            feedbackType="invalid"
          />
        </Form.Group>
        <Button type="submit">Submit form</Button>
      </Form>
    </Container>
  );
};
