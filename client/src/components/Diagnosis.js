import IndividualDiseaseResult from './IndividualDiseaseResult.js';

export default function Diagnosis(props) {

    const mapResults = (elem, index) => {
        switch (elem.disease) {
            case "cold":
                return <IndividualDiseaseResult key={index} diseaseTitle="Răceală" percent={elem.percent} elem={elem} />

            case "food_poisoning":
                return <IndividualDiseaseResult key={index} diseaseTitle="Toxiinfecție alimentară" percent={elem.percent} elem={elem} />

            case "covid_19":
                return <IndividualDiseaseResult key={index} diseaseTitle="Covid 19" percent={elem.percent} elem={elem} />

            case "flu":
                return <IndividualDiseaseResult key={index} diseaseTitle="Gripă" percent={elem.percent} elem={elem} />

            case "allergy":
                return <IndividualDiseaseResult key={index} diseaseTitle="Alergie" percent={elem.percent} elem={elem} />

            default: return <p>Necunoscut</p>
        }
    }
    return (
        <>
            <div className="results-wrapper">
                <hr></hr>
                <p className="modal-title diagnostic">Diagnostic</p>
                {props.data.map((elem, index) => {
                    return elem.matched_symptoms && elem.matched_symptoms.length > 0 ? mapResults(elem, index) : null
                })}
            </div>
        </>
    )
}


