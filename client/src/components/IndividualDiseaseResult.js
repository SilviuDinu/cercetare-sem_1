import Legend from "./Legend";
import enums from '../enum.js';

export default function IndividualDiseaseResult(props) {

    const mapSymptoms = (elem) => {
        console.log(elem)
        const aux = elem.disease_symptoms.map((symptom, index) => {
            return <td className={elem.matched_symptoms.includes(symptom) ? "detected analysis" : "safe analysis"} key={index}>{enums.mappedSymptoms[symptom]} </td>
        })
        return aux;
    }
    return (
        <>
            <div className="results"><p className="disease-title"><strong>{props.diseaseTitle}</strong> (șanse de infectare: {props.percent}%)</p>
                <div className="results-table">
                    <table className="results-table-wrap">
                        <tbody>
                            <tr>
                                {mapSymptoms(props.elem)}
                            </tr>
                        </tbody>
                    </table>
                </div><Legend /></div>
        </>
    )
}