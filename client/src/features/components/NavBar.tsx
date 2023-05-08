import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Auth } from './Auth';
import { Link } from 'react-router-dom';

// TODO: modif la navbar pour faire en sorte d'avoir juste rechercher et dans la page rechercher avoir un btn pour switcher entre recherche par bière et recherche par brasserie

const searchDropdown = [
  { name: 'Rechercher une bière', linkTo: '/recherche' },
  { name: 'Rechercher une brasserie', linkTo: '/recherche-par-brasserie' }
];

const managementDropdown = [
  { name: 'Ajout', linkTo: '/creation' },
  { name: 'Modification', linkTo: '/modification' },
  { name: 'Suppression', linkTo: '/suppression' }
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
              title="Recherche"
              id="basic-nav-dropdown"
              menuVariant="dark">
              {searchDropdown.map((item) => (
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
            <NavDropdown
              className="text-white"
              title="Gestion"
              id="basic-nav-dropdown"
              menuVariant="dark">
              {managementDropdown.map((item) => (
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
            <Link
              className="mx-2 text-white"
              style={{ textDecoration: 'none' }}
              key="Panier"
              to="/panier">
              Panier
            </Link>
          </Nav>
          <Auth />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
