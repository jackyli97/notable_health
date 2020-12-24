import {
    RECEIVE_ALL_PATIENTS
} from '../actions/patients_actions'

const defaultState = {}

const patientsReducer = (oldState = defaultState, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_PATIENTS:
            return action.patients.patients
        default:
            return oldState
    }
}

export default patientsReducer;