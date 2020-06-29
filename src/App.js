import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Login from './components/Login';
import Modal from 'react-modal';
import Patients from './components/Patients'
import EditPatient from './components/EditPatient'
import ViewRecordDetails from './components/ViewRecordDetails'
import axios from 'axios';

import './global.css'

function App() {
  const [token, setToken] = useState('');
  const [edit, setEdit] = useState('');
  const [view, setView] = useState('');
  const [me, setMe] = useState({});
  const [patients, setPatients] = useState([]);
  const [route, setRoute] = useState('agendamentos');

    useEffect(() => {
    const url = 'https://ey7li2szf0.execute-api.us-east-1.amazonaws.com/dev/auth/jwt/me';
    axios.get(url, {
      headers: {
        'x-access-token': token
      }
    })
      .then(({ data }) => {
        setMe(data);
      });
  }, [token]);

  useEffect(() => {
    const url = `https://ey7li2szf0.execute-api.us-east-1.amazonaws.com/dev/api/screcord/showSchedullingsByMedicName/${me.name}`; 
    axios.get(url)
      .then(({ data }) => {
        setPatients(data.schedules);
      });
  }, [me]);

  useEffect(() => {
    const url = `https://ey7li2szf0.execute-api.us-east-1.amazonaws.com/dev/api/screcord/showSchedullingsByMedicName/${me.name}`; 
    axios.get(url)
      .then(({ data }) => {
        setPatients(data.schedules);
      });
  }, [edit, me.name]);

  return (
    <div className="App">      
       {token !== '' && <Header handleRoute={setRoute} handleLogout={setToken}/>}
       <Modal
          isOpen={token === ''}
          style={
            { overlay: { }, content: {
              position: 'initial',
              top: '0px',
              left: '0px',
              right: '0px',
              bottom: '0px',
              border: '0px solid',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '0px',
              outline: '0',
              padding: '0px'
            } }
          }
        >
          <Login handleToken={setToken}/>
        </Modal>
        {
          token !== '' && route === 'agendamentos' && (
            <>
              <Patients 
                className="patients"
                patients={patients} 
                handleSave={setEdit}
                loggedUser={me}
                status="Agendado"
              />
            </>
          )
        }
        {
          token !== '' && route === 'prontuarios' &&  
          <Patients 
            className="patients"
            patients={patients} 
            handleSave={setView}
            loggedUser={me}
            status="Medicado"
          />
        }
        <Modal
          isOpen={edit !== ''}
          onRequestClose={() => setEdit('')}
        >
          <EditPatient scheduleInfos={edit} handleSave={setEdit} />
        </Modal>
        <Modal
          isOpen={view !== ''}
          onRequestClose={() => setView('')}
        >
          <ViewRecordDetails scheduleInfos={view} handleSave={setView} />
        </Modal>
    </div>
  );
}

export default App;
