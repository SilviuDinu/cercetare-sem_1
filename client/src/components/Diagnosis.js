export default function Diagnosis(props) {
    console.log(props.data)
    return (
        <>
            <table className="data-table" id="patient-records">
                <thead>
                    <tr>
                        {props.data.map(elem => {
                            return <th>{elem.disease}</th>
                        })}
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(elem => {
                        return (

                            elem.disease_symptoms.map(symptom => {
                                return <tr>{symptom}</tr>
                            })

                        )
                    })}
                </tbody>
            </table>
        </>
    )
}


