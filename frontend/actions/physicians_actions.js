import * as PhysicianApiUtil from '../util/physicians_api_util'

export const RECEIVE_ALL_PHYSICIANS = "RECEIVE_ALL_PHYSICIANS"

const receiveAllPhysicians = (physicians) => {
    return {
        type: RECEIVE_ALL_PHYSICIANS,
        physicians
    }
}

export const fetchPhysicians = () => {
    return (dispatch) => {
        return PhysicianApiUtil.fetchPhysicians().then((physicians) => {
            dispatch(receiveAllPhysicians(physicians))
        })
    }
}