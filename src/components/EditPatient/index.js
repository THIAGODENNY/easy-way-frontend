import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from 'axios';

const EditPatient = ({ scheduleInfos, handleSave }) => {
  const { patientInfo, schedule } = scheduleInfos;
  const handleMedicar = async (event) => {
    const { cid, symptoms, diagnosis, notes } = event.target;
    event.preventDefault();

    console.log(cid.value);
    const url = `https://ey7li2szf0.execute-api.us-east-1.amazonaws.com/dev/api/screcord/${schedule._id}`
    const body = {
      cids: cid.value,
      status: 'Medicado',
      symptoms: symptoms.value,
      medicNotes: notes.value,
      diagnosis: diagnosis.value,
    }

    await axios.put(url, body);

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
        <Form.Label>CID</Form.Label>
        <Form.Control placeholder="Digite o CID" required/>
      </Form.Group>

      <Form.Group controlId="symptoms">
        <Form.Label>Sintomas</Form.Label>
        <Form.Control placeholder="Relate os sintomas do paciente" required/>
      </Form.Group>

      <Form.Group controlId="diagnosis">
        <Form.Label>Medicamentos</Form.Label>
        <Form.Control placeholder="Informe a medicação do paciente" required/>
      </Form.Group>

      <Form.Group controlId="notes">
        <Form.Label>Notas</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          placeholder="Observações sobre a consulta"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Medicar
      </Button>
    </Form>
  );
};

export default EditPatient;
