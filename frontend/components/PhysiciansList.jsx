import React from 'react';
import Patients from './Patients';

class PhysiciansList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {patients: [], physician: ""};
        this.handleClick = this.handleClick.bind(this);
        this.getEmail = this.getEmail.bind(this);
    }

    componentDidMount() {
        this.props.fetchPhysicians();
    }

    handleClick(physician) {
        this.props.fetchPatients(physician.id).then(
            this.setState({patients: this.props.patients, physician: physician.name})
        )
    }

    getEmail(name) {
        let spaceFound = false;
        let email = ""
        for (let i=0; i<name.length; i++){
            if (spaceFound){
                email += name[i];
            }
            else if (name[i] === " ")spaceFound = true;
        }
        return email += "@notablehealth.com"
    }

    render() {
        if (Object.values(this.props.physicians).length === 0) return null;
        let physicians = Object.values(this.props.physicians).map((physician, idx)=>{
            return <li key={idx} onClick={()=>this.handleClick(physician)}>
                {physician.name}
            </li>
        });
        if (this.state.patients.length === 0) {
            this.handleClick(Object.values(this.props.physicians)[0]);
        }
        return (
            <div className="main-physicians-container">
                <div className="physicians-list">
                    <img className="notable" src={window.notable} alt=""/>
                    <h1>Physicians</h1>
                    <ul>
                        {physicians}
                    </ul>
                </div>
                <div className="main-patient-container">
                    <h1>{"Dr. " + this.state.physician}</h1>
                    <p>{this.getEmail(this.state.physician)}</p>
                    <Patients patients={this.props.patients}/>
                </div>
            </div>
        )
    }
}

export default PhysiciansList;