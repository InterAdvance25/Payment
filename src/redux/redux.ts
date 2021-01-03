import { rootReducer } from './rootReducer';
import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
let store = createStore(rootReducer,applyMiddleware(thunkMiddleware));

export default store;