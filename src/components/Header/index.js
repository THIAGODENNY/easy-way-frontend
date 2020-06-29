import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Header = ({ handleRoute, handleLogout }) => (
  <Navbar bg="light" variant="light">
    <Navbar.Brand onClick={() => handleRoute('agendamentos')}>EasyWay</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link onClick={() => handleRoute('agendamentos')}>{}Agendamentos{}</Nav.Link>
      <Nav.Link onClick={() => handleRoute('prontuarios')}>Prontuarios</Nav.Link>
      <Nav.Link onClick={() => handleLogout('')}>Logout</Nav.Link>
    </Nav>
  </Navbar>
);

export default Header;
