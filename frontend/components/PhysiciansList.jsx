import React from 'react';
import { Link } from 'react-router-dom'


class PhysiciansList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {currentPhysician: null}
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchPhysicians();
        // this.props.fetchPatients(this.props.physician);
    }

    handleClick(physician) {
        this.setState({currentPhysician: physician.id});
    }

    render() {
        if (!this.props.physicians) return null;
        let physicians = Object.values(this.props.physicians).map((physician, idx)=>{
            return <li key={idx} onClick={()=>this.handleClick}>
                {physician.name}
            </li>
        })

        let patients = this.state.currentPhysician ? getPatients() : <div></div>

        return (
            <div className="main-container">
                <div className="patients-container">
                    <ul>
                        {physicians}
                    </ul>
                </div>
                <div>{patients}</div>
            </div>
        )
    }
}

export default PhysiciansList;