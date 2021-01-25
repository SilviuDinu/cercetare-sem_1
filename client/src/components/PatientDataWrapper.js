import React from 'react';
import PatientResult from './PatientResult';
import PatientTreatmentModal from './PatientTreatmentModal';
import utils from '../utils.js'

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
                    modalTitle: <span>Fișa pacientului <b>{entry.name}</b>, {entry.age} ani (ID: {entry.id})</span>,
                    timeStamp: this.getEntryTimeStamp(entry),
                    modalBodyHeaderMessage: 'Simptome actuale (actualizat: ' + this.getEntryTimeStamp(entry) + ')',
                    diagnosis: null
                }
            }
        )
    }
    getSymptomsSum = (entry) => {
        return Object.values(entry).splice(4).reduce((a, b) => a + b);
    }
    getEntryTimeStamp = (entry) => {
        const symptomsSum = this.getSymptomsSum(entry);
        switch (true) {
            case symptomsSum <= 6:
                return "72 ore"
            case symptomsSum <= 9:
                return "48 ore"
            default: return "24 ore"
        }
    }
    deleteFromDB = (entry) => {
        this.setState(
            {
                patientFile: {
                    display: false,
                    data: null,
                    modalTitle: null,
                    timeStamp: null,
                    modalBodyHeaderMessage: null,
                    diagnosis: null
                }
            }
        )
        this.props.deleteFromDB(entry);
        this.props.setPatientData();
    }
    closeModal = () => {
        let state = Object.assign({}, this.state);
        state.patientFile.display = false;
        this.setState(state);
    }

    generateDiagnosis = (entry) => {
        const scoreArray = utils.generateDiagnosis(entry);
        let state = Object.assign({}, this.state);
        state.patientFile.diagnosis = scoreArray;
        this.setState(state)
        return scoreArray;
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
                    <PatientTreatmentModal show={this.state.patientFile}
                        onClick={() => this.closeModal()}
                        deleteFromDB={this.deleteFromDB}
                        generateDiagnosis={this.generateDiagnosis} />
                </div>
            </>
        )
    }
}