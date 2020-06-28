import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

import './index.css';

const Login = ({ handleToken }) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const getToken = (e) => {
    e.preventDefault();
    axios.post('https://ey7li2szf0.execute-api.us-east-1.amazonaws.com/dev/auth/jwt/login/', {
      email: email,
      password: password,
    })
    .then(function (response) {
      const { token } = response.data;
      handleToken(token);
      console.log(response);
    })
    .catch(function (error) {
      alert('Login Incorreto');
    });
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  return (      
      <Form onSubmit={getToken}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={handleEmail} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handlePassword} />
        </Form.Group>
        <Button variant="dark" type="submit">
          Entrar
        </Button>
      </Form>
  );
};
export default Login;
