import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';

const Header = ({ handleRoute, handleLogout }) => (
  <Navbar bg="light" variant="light">
    <Navbar.Brand onClick={() => handleRoute('agendamentos')}>
      <img src={require('../../assets/logo.png')} style={{height: '30px'}} alt="logo"/>       EasyWay
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link onClick={() => handleRoute('agendamentos')}>{}Agendamentos{}</Nav.Link>
      <Nav.Link onClick={() => handleRoute('prontuarios')}>Prontuarios</Nav.Link>
    </Nav>
    <Form inline>
      <Button 
        style={{ height: '40px'}} 
        variant="danger"
        onClick={() => handleLogout('')}>Logout</Button>
    </Form>
  </Navbar>
);

export default Header;
