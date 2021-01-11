
import SymptomsTitles from "./SymptomsTitles";
import IndividualPatientData from "./IndividualPatientData";
import Diagnosis from './Diagnosis';

export default function PatientTreatmentModal(props) {
    return (
        <>
            {props.show.display ?
                <div id="modal" className={props.show.display === true ? "modal active" : "modal inactive"}>
                    <div className="modal-content">
                        <span className="close" onClick={props.onClick}>&times;</span>
                        <p className="modal-title">{props.show.modalTitle}</p>
                        <div className="symptoms-wrapper">
                            <p className="symptoms">{props.show.modalBodyHeaderMessage}</p>
                            <div className="patient-results-wrapper">
                                <div className="symptoms-title">
                                    <SymptomsTitles tag="p" display="flex" />
                                </div>
                                <IndividualPatientData wrapper="div" children="p" data={props.show.data} diagnosis={props.show.diagnosis} getEntryTimeStamp={props.show.timeStamp} display="symptoms-value" showPatientIdentification={false} />
                            </div>
                            <div className="actions">
                                <button onClick={event => props.generateDiagnosis(props.show.data)}>Generează diagnostic</button>
                                <button className="delete" onClick={(event) => props.deleteFromDB(props.show.data.id)}>Șterge din baza de date</button>
                            </div>
                        </div>
                        {props.show.diagnosis ?
                            <div className="diagnosis">
                                <Diagnosis data={props.show.diagnosis} />
                            </div>
                            : null}

                    </div>
                </div>

                : null}
        </>
    )
}