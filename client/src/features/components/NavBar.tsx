import { Container, Nav, Navbar } from 'react-bootstrap';
import { Auth } from './Auth';
import { Link } from 'react-router-dom';

const links = [
  { name: 'Rechercher une bière', linkTo: '/recherche' },
  { name: 'Rechercher une brasserie', linkTo: '/recherche-par-brasserie' },
  { name: 'Panier', linkTo: '/panier' }
];

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="/logo.svg" alt="logo du site" width="60px" height="60px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto top-50 d-flex align-items-center">
            {links.map((item) => (
              <Link
                className="mx-3 text-white"
                style={{ textDecoration: 'none' }}
                key={item.name}
                to={item.linkTo}>
                {item.name}
              </Link>
            ))}
          </Nav>
          <Auth />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
