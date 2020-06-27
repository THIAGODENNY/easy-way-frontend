import React, { useState } from 'react';
import './App.css';
import Login from './components/Login/Login';
import Modal from 'react-modal';

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
          <ul>
            <li onClick={() => setEdit('Paciente 1')}>Paciente 1</li>
            <li onClick={() => setEdit('Paciente 2')}>Paciente 2</li>
            <li onClick={() => setEdit('Paciente 3')}>Paciente 3</li>
          </ul>
        </Modal>
        <Modal
          isOpen={edit !== ''}
        >
          <h1>Editando paciente {edit}</h1>
          <button onClick={() => setEdit('')}>Save</button>
        </Modal>
    </div>
  );
}

export default App;
