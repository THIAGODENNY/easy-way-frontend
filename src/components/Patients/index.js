import React from 'react';
import Patient from '../Patient'

const Patients = ({ patients, handleSave }) => patients
  .map((patient) => <Patient key={patient} name={patient} handleSave={handleSave} />)

export default Patients;
