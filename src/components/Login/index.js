import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
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
    <Container> 
      <img src={require('../../assets/logo.png')} alt=""/>
      <div className="content">
      <h1>EasyWay</h1>
      <p>Bem-vindo(a) ao EasyWay, acompanhe sua rotina direto do sistema.</p>
      <Form onSubmit={getToken}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Digite seu e-mail" onChange={handleEmail} />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Digite sua senha" onChange={handlePassword} />
        </Form.Group>
        <button type="submit">
          Entrar
        </button>
      </Form>
      </div>
    </Container>
  );
};
export default Login;
