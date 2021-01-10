import ShowPatientIdentification from './ShowPatientIdentification';
import PatientSymptomsData from './PatientSymptomsData';

export default function IndividualPatientData(props) {
    return (
        <props.wrapper title={props.wrapper === "tr" ? "Open " + props.data.id : null} className={props.display ? props.display : null}>

            {props.showPatientIdentification ? <ShowPatientIdentification elements={props.children} data={{ id: props.data.id, name: props.data.name, getEntryTimeStamp: props.getEntryTimeStamp, age: props.data.age }} /> : null}

            <PatientSymptomsData data={props.data} tag={props.children} diagnosis={props.diagnosis} onClick={props.openFile ? (event) => props.openFile(props.data) : null} />

        </props.wrapper>
    )
}