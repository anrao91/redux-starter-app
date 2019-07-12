import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import counterReducer from "./store/Reducers/counter";
import resultReducer from "./store/Reducers/result";

const rootReducer = combineReducers({
    ctr: counterReducer, //Use this ctr name after global "state" variable, to access the state variables data. Eg: state.ctr.counter
    res: resultReducer
});
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
registerServiceWorker();
