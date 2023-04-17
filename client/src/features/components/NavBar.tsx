import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { useAuth0 } from '@auth0/auth0-react';

const navigation = [
  { name: 'Catalogue de bières', href: '/catalogue-bieres' },
  { name: 'Panier', href: '/panier' },
];

export const NavBar = () => {
  const { isLoading, isAuthenticated, user, loginWithPopup, logout } = useAuth0();

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="../../../public/logo.svg" alt='logo du site' width="60px" height="60px"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            {navigation.map((item) => (
              <Nav.Link key={item.name} href={item.href}>{item.name}</Nav.Link>
            ))}
          </Nav>
          {isLoading && <div className="text-lg font-bold">Loading...</div>}
          {isAuthenticated && user ? (
            <Button
              variant='Danger'
              onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
            >
              Se déconnecter
            </Button>
          ) : (
            <Button 
              variant='success' 
              onClick={() => loginWithPopup()}
            >
              Se connecter
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
