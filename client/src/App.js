import './App.css';
import { useState } from 'react';
import InputId from './components/InputId';
import PatientDataWrapper from './components/PatientDataWrapper';

function App() {
  const [patientId, setPatientId] = useState('');
  const [patientData, setPatientData] = useState([]);
  const [showLoader, setShowLoader] = useState(false);

  const handleSubmit = async (event, id) => {
    if (event) event.preventDefault();
    setShowLoader(true);
    setPatientData([]);
    var response = await fetch(`/v1/patients/records/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    response = await response.json();
    if (response.data && response.data.length > 0 && response.data[0]) {
      setPatientData(response.data.sort((a, b) => a.id - b.id));
    }
    setShowLoader(false);
  }

  const deleteFromDB = async (id) => {
    var response = await fetch(`/v1/patients/records/delete/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    response = await response.json();
    if (response.data) {
      handleSubmit(null, '');
    }
  }

  return (
    <div className="App"  >
      <header className="App-header">
        <h2>Medical database</h2>
      </header>
      <main className="App-main">
        <div>
          <InputId id={patientId} onChange={event => setPatientId(event.target.value)} onSubmit={handleSubmit} />
        </div>
        <PatientDataWrapper patientData={patientData} showLoader={showLoader} setPatientData={() => setPatientData([])} setShowLoader={() => setShowLoader} deleteFromDB={deleteFromDB} />
      </main>
    </ div>
  );
}

export default App;
