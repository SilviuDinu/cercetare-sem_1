import React from 'react';
import enums from '../enum.js';

export default class SymptomsTitles extends React.Component {

    render() {
        return (
            this.props.tag !== "th" ?
                enums.symptoms.map((simptom, index) => {
                    return <this.props.tag key={index}>{simptom}</this.props.tag>
                }) : <this.props.tag>Starea pacientului</this.props.tag>
        )
    }
}