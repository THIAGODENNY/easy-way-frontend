import React from "react";
import { Form, Button } from "react-bootstrap";

import './index.css';

const ViewRecordDetails = ({ scheduleInfos, handleSave }) => {
  const { patientInfo, schedule } = scheduleInfos;
  const handleMedicar = async (event) => {
    handleSave("");
  };


  console.log(scheduleInfos)
  return scheduleInfos && (
    <Form id="teste" onSubmit={handleMedicar}>
      <Form.Group controlId="schedule">
        <Form.Label>
          <b>{patientInfo.name} - Data: {schedule.date}</b>
        </Form.Label>
      </Form.Group>

      <Form.Group controlId="cid">
        <Form.Label><strong>CID</strong></Form.Label>
        <br />
        <Form.Label>{scheduleInfos.schedule.cids}</Form.Label>
      </Form.Group>

      <Form.Group controlId="symptoms">
        <Form.Label><strong>Sintomas</strong></Form.Label>
        <br />
        <Form.Label>{scheduleInfos.schedule.symptoms}</Form.Label>
      </Form.Group>

      <Form.Group controlId="diagnosis">
        <Form.Label><strong>Medicamentos</strong></Form.Label>
        <br />
        <Form.Label>{scheduleInfos.schedule.diagnosis}</Form.Label>
      </Form.Group>

      <Form.Group controlId="notes">
        <Form.Label><strong>Notas</strong></Form.Label>
        <br />
        <Form.Label>{scheduleInfos.schedule.medicNotes}</Form.Label>
      </Form.Group>

      <Button variant="primary" type="submit">
        Fechar
      </Button>
    </Form>
  );
};

export default ViewRecordDetails;
