export default function PatientSymptomsData(props) {
    const renderElement = (props) => {
        for (var symptom in props.data) {
            return props.tag === "input" ? <props.tag value={props.data[symptom]} readOnly>{props.data[symptom] === 1 ? "Da" : "Nu"}</props.tag> : <props.tag className={props.data[symptom] === 1 ? "positive" : "negative"}>{props.data[symptom] === 1 ? "Da" : "Nu"}</props.tag>
        }
    }
    return (
        <>{props.tag === "input" ?
            <>
                <props.tag value={props.data.cough === 1 ? "Da" : "Nu"} readOnly={props.tag === "input"}></props.tag>
                <props.tag value={props.data.diziness === 1 ? "Da" : "Nu"} readOnly={props.tag === "input"}></props.tag>
                <props.tag value={props.data.fever === 1 ? "Da" : "Nu"} readOnly={props.tag === "input"}></props.tag>
                <props.tag value={props.data.lack_of_smell === 1 ? "Da" : "Nu"} readOnly={props.tag === "input"}></props.tag>
                <props.tag value={props.data.lack_of_tase === 1 ? "Da" : "Nu"} readOnly={props.tag === "input"}></props.tag>
                <props.tag value={props.data.nausea === 1 ? "Da" : "Nu"} readOnly={props.tag === "input"}></props.tag>
                <props.tag value={props.data.runny_nose === 1 ? "Da" : "Nu"} readOnly={props.tag === "input"}></props.tag>
                <props.tag value={props.data.shortness_of_breath === 1 ? "Da" : "Nu"} readOnly={props.tag === "input"}></props.tag>
                <props.tag value={props.data.sore_throat === 1 ? "Da" : "Nu"} readOnly={props.tag === "input"}></props.tag>
            </> :
            <>
                <props.tag className={props.data.cough === 1 ? "positive" : "negative"}>{props.data.cough === 1 ? "Da" : "Nu"}</props.tag>
                <props.tag className={props.data.diziness === 1 ? "positive" : "negative"}>{props.data.diziness === 1 ? "Da" : "Nu"}</props.tag>
                <props.tag className={props.data.fever === 1 ? "positive" : "negative"}>{props.data.fever === 1 ? "Da" : "Nu"}</props.tag>
                <props.tag className={props.data.lack_of_smell === 1 ? "positive" : "negative"}>{props.data.lack_of_smell === 1 ? "Da" : "Nu"}</props.tag>
                <props.tag className={props.data.lack_of_tase === 1 ? "positive" : "negative"}>{props.data.lack_of_tase === 1 ? "Da" : "Nu"}</props.tag>
                <props.tag className={props.data.nausea === 1 ? "positive" : "negative"}>{props.data.nausea === 1 ? "Da" : "Nu"}</props.tag>
                <props.tag className={props.data.runny_nose === 1 ? "positive" : "negative"}>{props.data.runny_nose === 1 ? "Da" : "Nu"}</props.tag>
                <props.tag className={props.data.shortness_of_breath === 1 ? "positive" : "negative"}>{props.data.shortness_of_breath === 1 ? "Da" : "Nu"}</props.tag>
                <props.tag className={props.data.sore_throat === 1 ? "positive" : "negative"}>{props.data.sore_throat === 1 ? "Da" : "Nu"}</props.tag>
            </>
        }
        </>
    )
}


