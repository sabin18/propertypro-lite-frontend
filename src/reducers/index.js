import { combineReducers } from 'redux';
import properties from './getpropertiesReducer';
import signup from './signupReducer';
import signin from './LoginReducer';
export default combineReducers({
  property: properties,
  register: signup,
  login: signin,
});
