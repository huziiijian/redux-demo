import { combineReducers } from 'redux';
import postReducer from './postReducer';

// 合成reducers
export default combineReducers({
  posts: postReducer
})