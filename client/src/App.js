import './App.css';
import { useState } from 'react';
import InputId from './components/InputId';
import PatientDataWrapper from './components/PatientDataWrapper';
import Error from './components/Error';
import StatisticsWrapper from './components/StatisticsWrapper'

function App() {
  const [patientId, setPatientId] = useState('');
  const [patientData, setPatientData] = useState([]);
  const [statisticData, setStatisticData] = useState([]);
  // const [showPatientData, setShowPatientData] = useState(true);
  // const [showStatisticData, setShowStatisticData] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [error, setError] = useState(null)

  const handleSubmit = async (event, id) => {
    // setShowPatientData(true);
    // setShowStatisticData(false);
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
      setError(null);
    } else {
      setError(`Nu am putut găsi niciun pacient cu ID-ul ${id}`);
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

  const generateStatistics = async () => {
    // setShowStatisticData(true);
    // setShowPatientData(false);
    setShowLoader(true);
    if (!statisticData || statisticData.length === 0) {
      var response = await fetch(`/v1/patients/records/`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      response = await response.json();

      if (response.data && response.data.length > 0 && response.data[0]) {
        setStatisticData(response.data.sort((a, b) => a.id - b.id));
        setError(null);
      } else {
        setError(`Nu s-a putut genera nicio statistică`);
      }
    }
    setShowLoader(false);
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
        <StatisticsWrapper statisticData={statisticData} onClick={generateStatistics} />
        <PatientDataWrapper patientData={patientData} showLoader={showLoader} setPatientData={() => setPatientData([])} setShowLoader={() => setShowLoader} deleteFromDB={deleteFromDB} />
        <Error message={error} />
      </main>
    </ div>
  );
}

export default App;
