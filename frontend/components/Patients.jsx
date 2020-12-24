import React from 'react';
import { Link } from 'react-router-dom';

class Patients extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        let patients = Object.values(this.props.patients).map((patient, idx) => {
            return <tr key={idx} className={idx % 2 === 0 ? "white-bg" : "grey-bg"}>
                <td>
                    {idx+1}
                </td>
                <td>
                    {patient.name}
                </td>
                <td>
                    {patient.time}
                </td>
                <td>
                    {patient.kind}
                </td>
            </tr>
        })
        patients
        return (
            <>
                <table className="patient-list">
                    <tr>
                        <th className="hash">#</th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Kind</th>
                    </tr>
                    {patients}
                </table>
            </>
        )
    }
}

export default Patients;