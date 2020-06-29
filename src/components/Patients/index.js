import React from 'react';
import Patient from '../Patient'
import ViewRecord from '../ViewRecord';

const Patients = ({ patients, handleSave, status }) => {
  const filteredPatients = patients.filter((schedule) => schedule.status === status);

  if (filteredPatients.length === 0) {
    return <div style={{ height: '100vh',  display: 'flex', alignItems: 'center', justifyContent:'center'}}>
      <img 
        src={require('../../assets/search.png')} 
        alt="" 
        width="150"/>
      <h5>Não encontramos pacientes com status de <strong>{status}</strong></h5>
    </div>
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

      else return null;
    })
  );
}

export default Patients;
