import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';

const Patient = ({ handleSave, schedule }) => {
  const [patientInfo, setPatientInfo] = useState();
  const { patient, date, status, specialty} = schedule;

  useEffect(() => {
    const url = `https://ey7li2szf0.execute-api.us-east-1.amazonaws.com/dev/api/patients/${patient}`;
    axios.get(url)
      .then(({ data }) => {
        setPatientInfo(data.patient.pop());
      })
  }, [patient]);

  return (
    <Card style={{ margin:'20px'}}>
      <Card.Header as="h5">{date}</Card.Header>
      <Card.Body>
        <Card.Title style={{ fontSize: '15px'}}><strong>Nome do Paciente: </strong>{patientInfo && patientInfo.name}</Card.Title>
        <Card.Title style={{ fontSize: '15px'}}><strong>Especialidade:</strong> {specialty}</Card.Title>
        <Card.Title style={{ fontSize: '15px'}}><strong>Status:</strong> {status}</Card.Title>
        <Button variant="danger" onClick={() => handleSave({ patientInfo, schedule })} >Medicar</Button>
      </Card.Body>
    </Card>
  )
}

export default Patient;