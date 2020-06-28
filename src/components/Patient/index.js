import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Patient = ({ patient, handleSave, name }) => (
  <Card>
    <Card.Header as="h5">10/10/20 - 12:00</Card.Header>
    <Card.Body>
      <Card.Title>{patient}</Card.Title>
      <Card.Text>
        Status: Agendado
      </Card.Text>
      <Button variant="primary" onClick={() => handleSave(name)} >Medicar</Button>
    </Card.Body>
  </Card>
)

export default Patient;
