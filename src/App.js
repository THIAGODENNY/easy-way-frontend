import React, { useState } from 'react';
import Login from './components/Login';
import Modal from 'react-modal';
import Patients from './components/Patients'
import EditPatient from './components/EditPatient'

function App() {
  const [token, setToken] = useState('');
  const [edit, setEdit] = useState('');

  return (
    <div className="App">
       <Modal
          isOpen={token === ''}
        >
          <Login handleToken={setToken}/>
        </Modal>

        <Modal
          isOpen={token !== ''}
        >
          <button className="btn-logout" onClick={() => setToken('')}>Logout</button>
          <Patients 
          className="patients"
          patients={['Paciente 1', 'Paciente 2', 'Paciente 3']} 
          handleSave={setEdit}/>

        </Modal>
        <Modal
          isOpen={edit !== ''}
        >
          <EditPatient patient={edit} handleSave={setEdit} />
        </Modal>
    </div>
  );
}

export default App;
