
import SymptomsTitles from "./SymptomsTitles";
import IndividualPatientData from "./IndividualPatientData";

export default function PatientTreatment(props) {
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
                                <IndividualPatientData wrapper="div" children="p" data={props.show.data} getEntryTimeStamp={props.show.timeStamp} display="symptoms-value" showPatientIdentification={false} />
                            </div>
                        </div>
                    </div>
                </div>
                : null}
        </>
    )
}