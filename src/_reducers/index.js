import {combineReducers} from 'redux';
import modalReducer from './modalReducer';
import themeReducer from './themeReducer';
import chatReducer from './chatReducer';
import authReducer from './authReducer';
import {AudioReducer} from './audio'
export default combineReducers({
  modalReducer,
  themeReducer,
  chatReducer,
  authReducer,
  AudioReducer
  
});
