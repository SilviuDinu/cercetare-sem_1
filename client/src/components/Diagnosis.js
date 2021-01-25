import IndividualDiseaseResult from './IndividualDiseaseResult.js';
import { useState } from 'react';
import enums from '../enum.js';

export default function Diagnosis(props) {
    const [dominantDisease, setDominantDisease] = useState({ perc: 0, name: "" });
    const mapResults = (elem, index) => {
        if (parseFloat(elem.percent) > dominantDisease.perc) {
            setDominantDisease({ perc: parseFloat(elem.percent), name: enums.mappedDiseases[elem.disease] })
        }
        return <IndividualDiseaseResult key={index} diseaseTitle={enums.mappedDiseases[elem.disease]} dominant={dominantDisease} percent={elem.percent} elem={elem} />
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


