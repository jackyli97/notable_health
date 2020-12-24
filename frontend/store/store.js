import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import entitiesReducer from "../reducers/entities_reducer"

let middlewares = [thunk]

if (process.env.NODE_ENV !== "production") {

    const { logger } = require("redux-logger");
    middlewares.push(logger);
}


const configureStore = (preloadedState = {}) =>
    createStore(entitiesReducer, preloadedState, applyMiddleware(...middlewares));

export default configureStore;