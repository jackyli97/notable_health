import { combineReducers } from "redux";
import patientsReducer from "./patients_reducer"
import physiciansReducer from "./physicians_reducer"

const entitiesReducer = combineReducers({
    physicians: physiciansReducer,
    patients: patientsReducer
});

export default entitiesReducer;