import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Auth } from './Auth';
import { Link } from 'react-router-dom';

// TODO: modif la navbar pour faire en sorte d'avoir juste rechercher et dans la page rechercher avoir un btn pour switcher entre recherche par bière et recherche par brasserie

const navigation = [
  { name: 'Ajouter un élément', linkTo: '/creation' },
  { name: 'Panier', linkTo: '/panier' }
];

const navigationDropdown = [
  { name: 'Rechercher une bière', linkTo: '/recherche' },
  { name: 'Rechercher une brasserie', linkTo: '/recherche-par-brasserie' }
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
            <NavDropdown
              className="text-white"
              title="Rechercher"
              id="basic-nav-dropdown"
              menuVariant="dark">
              {navigationDropdown.map((item) => (
                <NavDropdown.Item key={item.name}>
                  <Link
                    className="mx-2 text-white"
                    style={{ textDecoration: 'none' }}
                    key={item.name}
                    to={item.linkTo}>
                    {item.name}
                  </Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            {navigation.map((item) => (
              <Link
                className="mx-2 text-white"
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
