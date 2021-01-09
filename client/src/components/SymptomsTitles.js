import React from 'react';
import enums from '../enum.js';

export default class SymptomsTitles extends React.Component {
    render() {
        return (
            enums.symptoms.map((simptom, index) => {
                return <this.props.tag key={index}>{simptom}</this.props.tag>
            })
        )
    }
}