import ShowPatientIdentification from './ShowPatientIdentification';

export default function IndividualPatientData(props) {
    return (
        <props.wrapper title={props.wrapper === "tr" ? "Open " + props.data.id : null} onClick={(event) => props.openFile(props.data)} className={props.display ? props.display : null}>

            {props.showPatientIdentification ? <ShowPatientIdentification elements={props.children} data={{ id: props.data.id, name: props.data.name, getEntryTimeStamp: props.getEntryTimeStamp }} /> : null}

            <props.children className={props.data.cough === 1 ? "positive" : "negative"}>{props.data.cough === 1 ? "Da" : "Nu"}</props.children>
            <props.children className={props.data.diziness === 1 ? "positive" : "negative"}>{props.data.diziness === 1 ? "Da" : "Nu"}</props.children>
            <props.children className={props.data.fever === 1 ? "positive" : "negative"}>{props.data.fever === 1 ? "Da" : "Nu"}</props.children>
            <props.children className={props.data.lack_of_smell === 1 ? "positive" : "negative"}>{props.data.lack_of_smell === 1 ? "Da" : "Nu"}</props.children>
            <props.children className={props.data.lack_of_tase === 1 ? "positive" : "negative"}>{props.data.lack_of_tase === 1 ? "Da" : "Nu"}</props.children>
            <props.children className={props.data.nausea === 1 ? "positive" : "negative"}>{props.data.nausea === 1 ? "Da" : "Nu"}</props.children>
            <props.children className={props.data.runny_nose === 1 ? "positive" : "negative"}>{props.data.runny_nose === 1 ? "Da" : "Nu"}</props.children>
            <props.children className={props.data.shortness_of_breath === 1 ? "positive" : "negative"}>{props.data.shortness_of_breath === 1 ? "Da" : "Nu"}</props.children>
            <props.children className={props.data.sore_throat === 1 ? "positive" : "negative"}>{props.data.sore_throat === 1 ? "Da" : "Nu"}</props.children>
        </props.wrapper>
    )
}