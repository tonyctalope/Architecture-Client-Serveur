import { Nav, NavItem, NavLink } from 'react-bootstrap';

export const Sidebar = (navItems: string, href: string, text: string) => {
  return (
    <Nav className="vertical">
      {/* {[{ navItems }].map((text, href, index) => (
        <NavItem key={index}>
          <NavLink href={href}>{text}</NavLink>
        </NavItem>
      ))} */}

      <NavItem>
        <NavLink href="#">Toutes les bières</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Filtrer par bières_ids</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href="#">Filtrer par brewerries_id</NavLink>
      </NavItem>
    </Nav>
  );
};
