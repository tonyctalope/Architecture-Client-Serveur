import { Button, Container, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <Container>
      <div className="relative text-center">
        <Image
          className="bg-area z-3 m-4"
          src={'/img/404.png'}
          width="30%"
          height="30%"
          alt="background de la page 404"
        />

        <div className="absolute z-1">
          <p className="mt-6">Désolé, la page que vous cherchez n'existe pas.</p>
          <Button href="/" variant="dark">
            <Link to="/" className="text-white" style={{ textDecoration: 'none' }}>
              Revenir à l'accueil
            </Link>
          </Button>
        </div>
      </div>
    </Container>
  );
};
