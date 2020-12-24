import { connect } from 'react-redux';
import PhysicansList from './PhysiciansList';
import { fetchPatients } from '../actions/patients_actions'
import { fetchPhysicians } from '../actions/physicians_actions'
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        physicians: state.physicians,
        patients: state.patients,
    };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchProject: (physician_id) => dispatch(fetchPatients(physician_id)),
        fetchPhysicians: () => dispatch(fetchPhysicians())
    };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PhysicansList))