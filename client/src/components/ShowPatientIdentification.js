import React from 'react';

export default class ShowPatientIdentification extends React.Component {
    render() {
        return (
            <>
                <this.props.elements>{this.props.data.id}</this.props.elements>
                <this.props.elements>{this.props.data.name}</this.props.elements>
                <this.props.elements>{this.props.data.age}</this.props.elements>
                <this.props.elements>{this.props.data.getEntryTimeStamp}</this.props.elements>
            </>
        )
    }
}