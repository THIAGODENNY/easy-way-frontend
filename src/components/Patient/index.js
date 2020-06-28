import React from 'react';
import { Card } from 'react-bootstrap';

const Patient = ({ patient, handleSave, name }) => (
  <Card className="card-patient">
    <Card.Header as="h5">10/10/20 - 12:00</Card.Header>
    <Card.Body>
      <Card.Title>Patient Name</Card.Title>
      <Card.Text>
        Status: Agendado
      </Card.Text>
      <button variant="primary" onClick={() => handleSave(name)} >Medicar</button>
    </Card.Body>
  </Card>
)

export default Patient;
