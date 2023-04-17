import { Container } from "react-bootstrap";

export const Home = () => {
  return (
    <Container className="mt-4 ">
      <div className="relative px-2 mx-auto py-8">
        <div className="text-center">
          <h1>Bienvenue sur Ubeer.</h1>
          <p className="mt-6">Ubeer est une plateforme de livraison de bières à domicile.</p>
        </div>
      </div>
    </Container>
  );
};
