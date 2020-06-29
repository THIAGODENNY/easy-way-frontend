import React, { useState, useEffect } from 'react';
import { Card } from 'react-bootstrap';
import axios from 'axios';

const Patient = ({ handleSave, schedule }) => {
  const [patientInfo, setPatientInfo] = useState();
  const { patient, date, status } = schedule;

  useEffect(() => {
    const url = `https://ey7li2szf0.execute-api.us-east-1.amazonaws.com/dev/api/patients/${patient}`;
    axios.get(url)
      .then(({ data }) => {
        setPatientInfo(data.patient.pop());
      })
  }, [patient]);

  return (
    <Card className="card-patient">
      <Card.Header as="h5">{date}</Card.Header>
      <Card.Body>
        <Card.Title>{patientInfo && patientInfo.name}</Card.Title>
        <Card.Text>
          Status: {status}
        </Card.Text>
        <button variant="primary" onClick={() => handleSave({ patientInfo, schedule })} >Medicar</button>
      </Card.Body>
    </Card>
  )
}

export default Patient;

//