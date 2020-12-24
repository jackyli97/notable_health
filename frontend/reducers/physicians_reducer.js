import { RECEIVE_ALL_PATIENTS } from '../actions/patients_actions';
import {
    RECEIVE_ALL_PHYSICIANS
} from '../actions/physicians_actions'

const defaultState = {}

const physiciansReducer = (oldState = defaultState, action) => {
    Object.freeze(oldState);
    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_PHYSICIANS:
            return action.physicians.physicians
        default:
            return oldState
    }
}

export default physiciansReducer;