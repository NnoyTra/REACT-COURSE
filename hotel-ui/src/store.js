import {creteStore, applyMiddleware, compose} from "redux"
import thunk from "redux-thunk"
import rootReducer from "./reducers"

const initialState = {}
const middleware = [thunk]

let store;

f(window.navigator.userAgent.includes("Chrome"){
	store = createStore(rotReducer, initialState, compose(applyMiddleware(...middleware), <COPY-LINK>));
}else{
	store = createStore(rotReducer, initialState, compose(applyMiddleware(...middleware)));
}

export default store;