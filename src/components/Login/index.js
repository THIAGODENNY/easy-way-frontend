import React, { useState } from 'react';
import { Form, Container, Button } from 'react-bootstrap';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './index.css';

const Login = ({ handleToken }) => {

  toast.configure();
  
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
      
      const url = 'https://ey7li2szf0.execute-api.us-east-1.amazonaws.com/dev/auth/jwt/me';
      axios.get(url, {
        headers: {
          'x-access-token': token
        }
      }).then(({ data }) => {
        if(data.profile === 'medic') handleToken(token);
        return toast.warn('Você não possui permissão para acessar!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 8000          
        });
      })   
    })
    .catch(function (error) {
      toast.error('Login incorreto. Verifique novamente suas informações!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 8000
      })
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
          <Form.Control type="email" placeholder="Digite seu e-mail" onChange={handleEmail} required/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" placeholder="Digite sua senha" onChange={handlePassword} required />
        </Form.Group>
        <Button variant="danger" type="submit">
          Entrar
        </Button>
      </Form>
      </div>     
    </Container>
  );
};
export default Login;
