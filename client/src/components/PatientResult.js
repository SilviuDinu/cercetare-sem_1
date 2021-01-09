import IndividualPatientData from './IndividualPatientData';
import SymptomsTitles from "./SymptomsTitles";
import Loader from './Loader';
import enums from '../enum.js';

export default function PatientResult(props) {
    return (
        <>
            { props.data && props.data.length > 0 ?
                <div>
                    <table className="data-table" id="patient-records">
                        <thead>
                            <tr>
                                {enums.tableHead.map((head, index) => {
                                    return <th key={index}>{head}</th>
                                })}
                                <SymptomsTitles tag="th" />
                            </tr>
                        </thead>
                        <tbody className="data-table-body">
                            {props.data.map((entry, index) => {
                                return (
                                    <IndividualPatientData wrapper="tr" children="td" data={entry} key={entry.id} openFile={props.openFile}
                                        getEntryTimeStamp={props.getEntryTimeStamp(entry)}
                                        showPatientIdentification={true} />
                                );
                            })}
                        </tbody>
                    </table>
                </div>
                : <Loader loader={props.loader} />
            }
        </>
    );
}