import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Auth } from './Auth';

const navigation = [
  { name: 'Rechercher une bière', href: '/recherche' },
  { name: 'Ajouter une bière', href: '/creation' },
  { name: 'Panier', href: '/panier' }
];

export const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="/logo.svg" alt="logo du site" width="60px" height="60px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            {navigation.map((item) => (
              <Nav.Link key={item.name} href={item.href}>
                {item.name}
              </Nav.Link>
            ))}
          </Nav>
          <Auth />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
