
export default function PatientSymptomsData(props) {
    const renderElement = (obj) => {
        const uselessProps = ["_id", "id", "name", "age"]
        const arr = [];
        var i = 0;
        for (var symptom in obj.data) {
            if (!uselessProps.includes(symptom)) {
                arr.push(<obj.tag key={i} className={obj.data[symptom] === 1 ? "positive" : "negative"}>{obj.data[symptom] === 1 ? "Da" : "Nu"}</obj.tag>);
                i++;
            }
        }
        return arr;
    }
    return (
        <>
            {props.tag !== "td" ? renderElement(props) : <props.tag><span className="open-file" onClick={event => props.onClick()}>Deschide fișa pacientului</span></props.tag>}
        </>
    )
}


