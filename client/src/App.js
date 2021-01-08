import './App.css';
import { useState } from 'react';
import enums from './enum.js';

function App() {
  const [patientId, setPatientId] = useState('');
  const [patientData, setPatientData] = useState([]);
  const [patientTreatment, setPatientTreatment] = useState({ display: false });
  const [showLoader, setShowLoader] = useState(false);

  const handleSubmit = async (event, id) => {
    event.preventDefault();
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

  const generateTreatment = (entry) => {
    setPatientTreatment({ display: true });
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
        <div>
          <PatientResult data={patientData} loader={showLoader} toggleLoader={() => setShowLoader(false)} openFile={generateTreatment} />
        </div>
        <div>
          <PatientTreatment show={patientTreatment} onClick={() => setPatientTreatment({ display: false })} />
        </div>
      </main>
    </ div>
  );
}

function InputId(props) {
  const validateInput = event => {
    var reg = /\d+/;
    if (!reg.test(event.key) && event.keyCode !== 8 && event.keyCode !== 13) event.preventDefault();
  }
  return (
    <form onSubmit={event => props.onSubmit(event, props.id)}>
      <input type="text" value={props.id} onChange={props.onChange} onKeyDown={validateInput} placeholder="Insert ID..." />
      <button type="submit" className="search">{props.id ? 'Search by ID' : 'Search all records'}</button>
    </form>
  );
}

function PatientTreatment(props) {
  console.log(props.show)
  return (
    <>
      {props.show.display ?
        <div id="modal" className={props.show.display === true ? "modal active" : "modal inactive"}>
          <div className="modal-content">
            <span className="close" onClick={props.onClick}>&times;</span>
            <p>Some text in the Modal..</p>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
        : null}
    </>
  )
}

function PatientResult(props) {
  const getSymptomsSum = (entry) => {
    return Object.values(entry).splice(3).reduce((a, b) => a + b);
  }
  const getEntryTimeStamp = (entry) => {
    const symptomsSum = getSymptomsSum(entry);
    switch (true) {
      case symptomsSum <= 3:
        return "72 ore"
      case symptomsSum <= 5:
        return "48 ore"
      default: return "24 ore"
    }
  }
  const generateDocument = (entry) => {
    props.openFile(entry);
  }
  return (
    <>
      { props.data && props.data.length > 0 ?
        <div>
          <table className="data-table" id="patient-records">
            <thead>
              <tr>
                {enums.symptoms.map((simptom, index) => {
                  return <th key={index}>{simptom}</th>
                })}
              </tr>
            </thead>
            <tbody className="data-table-body">
              {props.data.map((entry, index) => {
                return (
                  <tr key={entry.id} title={"Open " + entry.id} onClick={(event) => generateDocument(entry)}>
                    <td>{entry.id}</td>
                    <td>{entry.name}</td>
                    <td>{getEntryTimeStamp(entry)}</td>
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
        : <Loader loader={props.loader} />
      }
    </>
  );
}

function Loader(props) {
  console.log(props.loader)
  return (
    props.loader ? <div className="loader"></div> : null
  );
}

export default App;
