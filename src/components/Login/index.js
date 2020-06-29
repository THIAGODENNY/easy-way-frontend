import React, { useState } from 'react';
import { Form, Container } from 'react-bootstrap';
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

      <div className="easyway">
        <img src={require('../../assets/logo.png')} alt="" width="300"/>
        <h1>EasyWay</h1>
        <p>Bem-vindo(a) ao EasyWay, faça o acompanhamento <br /> dos seus pacientes em tempo real.</p>
      </div>


      <div className="form">

      <h5>Por favor, forneça suas informações para entrar no sistema</h5>

      <Form onSubmit={getToken}>      
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Digite seu e-mail" onChange={handleEmail}  required/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Digite sua senha" onChange={handlePassword} required />
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
