import * as PatientsApiUtil from '../util/patients_api_util'

export const RECEIVE_ALL_PATIENTS = "RECEIVE_ALL_PATIENTS"

const receiveAllPatients = (patients) => {
    return {
        type: RECEIVE_ALL_PATIENTS,
        patients
    }
}

export const fetchPatients = (physician_id) => {
    return (dispatch) => {
        return PatientsApiUtil.fetchPatients(physician_id).then((patients) => {
            dispatch(receiveAllPatients(patients))
        })
    }
}