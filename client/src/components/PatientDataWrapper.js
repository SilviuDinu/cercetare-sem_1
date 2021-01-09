import React from 'react';
import PatientResult from './PatientResult';
import PatientTreatment from './PatientTreatment';


export default class PatientDataWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            patientFile: {
                display: false,
                data: null,
                modalTitle: null,
                timeStamp: null,
                modalBodyHeaderMessage: null
            }
        }
    }
    generateTreatment = (entry) => {
        this.setState(
            {
                patientFile:
                {
                    display: true,
                    data: entry,
                    modalTitle: <span>Fișa pacientului <b>{entry.name}</b> (ID: {entry.id})</span>,
                    timeStamp: this.getEntryTimeStamp(entry),
                    modalBodyHeaderMessage: 'Simptome actuale (actualizat: ' + this.getEntryTimeStamp(entry) + ')'
                }
            }
        )
    }
    getSymptomsSum = (entry) => {
        return Object.values(entry).splice(3).reduce((a, b) => a + b);
    }
    getEntryTimeStamp = (entry) => {
        const symptomsSum = this.getSymptomsSum(entry);
        switch (true) {
            case symptomsSum <= 3:
                return "72 ore"
            case symptomsSum <= 5:
                return "48 ore"
            default: return "24 ore"
        }
    }

    render() {
        return (
            <>
                <div>
                    <PatientResult
                        data={this.props.patientData}
                        loader={this.props.showLoader}
                        toggleLoader={this.props.setShowLoader(false)}
                        openFile={this.generateTreatment}
                        getEntryTimeStamp={this.getEntryTimeStamp} />
                </div>
                <div>
                    <PatientTreatment show={this.state.patientFile}
                        onClick={() => this.setState({ patientFile: { display: false, data: null } })} />
                </div>
            </>
        )
    }
}