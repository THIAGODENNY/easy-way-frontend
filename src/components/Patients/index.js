import React from 'react';
import Patient from '../Patient'
import ViewRecord from '../ViewRecord';

const Patients = ({ patients, handleSave, status }) => {
  const filteredPatients = patients.filter((schedule) => schedule.status === status);

  if (filteredPatients.length === 0) {
    return <h5>Não há pacientes no status de {status}</h5>
  }

  return (
    filteredPatients.map((schedule) => {
      if (status === 'Agendado') {
        return <Patient 
          key={schedule} 
          schedule={schedule}
          handleSave={handleSave} 
        />
      }
  
      if (status === 'Medicado') {
        return <ViewRecord 
          key={schedule} 
          schedule={schedule}
          handleSave={handleSave} 
        />
      }
    })
  );
}

export default Patients;
