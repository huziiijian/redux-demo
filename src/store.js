import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState = {};
// thunk作用是异步执行action
const middleware = [thunk];

const store = createStore(rootReducer, initialState, applyMiddleware(...middleware))//实例化store

export default store;














