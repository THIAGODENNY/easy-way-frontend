import React from "react";
import { Form, Button } from "react-bootstrap";

const EditPatient = ({ patient, handleSave }) => {
  const handleMedicar = (event) => {
    event.preventDefault();
    handleSave("");
  };
  return (
    <Form onSubmit={handleMedicar}>
      <Form.Group controlId="formGridAddress1">
        <Form.Label>
          <b>{patient} - Data: 10/10/10 12:00</b>
        </Form.Label>
      </Form.Group>

      <Form.Group controlId="formGridAddress1">
        <Form.Label>CID</Form.Label>
        <Form.Control as="select" value="Choose...">
          <option>Choose...</option>
          <option>...</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Sintomas</Form.Label>
        <Form.Control placeholder="Relate os sintomas do paciente" />
      </Form.Group>

      <Form.Group controlId="formGridAddress2">
        <Form.Label>Medicamentos</Form.Label>
        <Form.Control placeholder="Informe a medicação do paciente" />
      </Form.Group>

      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Notas</Form.Label>
        <Form.Control
          as="textarea"
          rows="3"
          placeholder="Observações sobre a consulta"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Medicar
      </Button>
    </Form>
  );
};

export default EditPatient;
