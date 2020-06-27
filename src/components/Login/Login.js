import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const getToken = (e) => {
    e.preventDefault();
    axios.post('https://ey7li2szf0.execute-api.us-east-1.amazonaws.com/dev/auth/jwt/login/', {
      email: email,
      password: password,
    })
    .then(function (response) {
      const { token } = response.data;
      setToken(token);
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
    <Container>
      <Form onSubmit={getToken}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={handleEmail} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={handlePassword} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      {token}
    </Container>
  );
};
export default Login;
