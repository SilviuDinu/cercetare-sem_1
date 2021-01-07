import './App.css';
import { useState } from 'react';
import enums from './enum.js';

function App() {
  const [patientId, setPatientId] = useState('');
  const [patientData, setPatientData] = useState([]);
  const [patientTreatment, setPatientTreatment] = useState('');

  const handleSubmit = async (event, id) => {
    event.preventDefault();
    setPatientData([]);
    var response = await fetch(`/v1/patients/records/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    response = await response.json();
    setPatientData(await response.data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Medical database</h2>
      </header>
      <main className="App-main">
        <div>
          <InputId id={patientId} onChange={event => setPatientId(event.target.value)} onSubmit={handleSubmit} />
        </div>
        <div>
          <PatientResult data={patientData} />
        </div>
        <div>
          <PatientTreatment data={patientTreatment} />
        </div>
      </main>
    </div>
  );
}

function InputId(props) {
  const validateInput = event => {
    var reg = /\d+/;
    if (!reg.test(event.key) && event.keyCode !== 8) event.preventDefault();
  }
  return (
    <form onSubmit={event => props.onSubmit(event, props.id)}>
      <input type="text" value={props.id} onChange={props.onChange} onKeyDown={validateInput} placeholder="Insert ID..." />
      <button type="submit" className="search">Search</button>
    </form>
  );
}

function PatientTreatment(props) {
  return (
    <>
      {props.data ? <p className="treatment">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
      took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
      but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s
      with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
      software like Aldus PageMaker including versions of Lorem Ipsum.
    </p> : null}

    </>
  )
}

function PatientResult(props) {
  console.log(props.data)
  return (
    <>
      { props.data && props.data.length > 0 ?
        <div>
          <table className="data-table" id="patient-records">
            <thead>
              <tr>
                {enums.simptoms.map((simptom, index) => {
                  return <th key={index}>{simptom}</th>
                })}
              </tr>
            </thead>
            <tbody className="data-table-body">
              {props.data.map((entry, index) => {
                return (
                  <tr key={index}>
                    <td>{entry.id}</td>
                    <td className={entry.cough === 1 ? "positive" : "negative"}>{entry.cough === 1 ? "Da" : "Nu"}</td>
                    <td className={entry.diziness === 1 ? "positive" : "negative"}>{entry.diziness === 1 ? "Da" : "Nu"}</td>
                    <td className={entry.fever === 1 ? "positive" : "negative"}>{entry.fever === 1 ? "Da" : "Nu"}</td>
                    <td className={entry.lack_of_smell === 1 ? "positive" : "negative"}>{entry.lack_of_smell === 1 ? "Da" : "Nu"}</td>
                    <td className={entry.lack_of_tase === 1 ? "positive" : "negative"}>{entry.lack_of_tase === 1 ? "Da" : "Nu"}</td>
                    <td className={entry.nausea === 1 ? "positive" : "negative"}>{entry.nausea === 1 ? "Da" : "Nu"}</td>
                    <td className={entry.runny_nose === 1 ? "positive" : "negative"}>{entry.runny_nose === 1 ? "Da" : "Nu"}</td>
                    <td className={entry.shortness_of_breath === 1 ? "positive" : "negative"}>{entry.shortness_of_breath === 1 ? "Da" : "Nu"}</td>
                    <td className={entry.sore_throat === 1 ? "positive" : "negative"}>{entry.sore_throat === 1 ? "Da" : "Nu"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        : null
      }
    </>
  );
}

export default App;
