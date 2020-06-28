import React, { useState } from 'react';
import './App.css';
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
        {token}    
        <Modal
          isOpen={token !== ''}
        >
          <button onClick={() => setToken('')}>Logout</button>
          <Patients patients={['Paciente 1', 'Paciente 2', 'Paciente 3']} handleSave={setEdit}/>
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
