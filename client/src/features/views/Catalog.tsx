import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

export const Catalog = () => {
  return (
    <Container className="mt-4 ">
      <div className="relative px-2">
        <div className="mx-auto py-8">
          <div className="text-center">
            <h1>Voici nos différents services :</h1>
          </div>
        </div>

        
        

        <Row>
          {[
            'Primary',
            'Secondary',
            'Success',
            'Danger',
            'Warning',
            'Info',
            'Light',
            'Dark',
          ].map((item) => (
            <Col key={item}>
              <Card
                bg={item.toLowerCase()}
                key={item}
                text={item.toLowerCase() === 'light' ? 'dark' : 'white'}
                style={{ width: '18rem' }}
                className="my-2"
              >
                <Card.Header>Header</Card.Header>
                <Card.Body>
                  <Card.Title>{item} Card Title </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};
