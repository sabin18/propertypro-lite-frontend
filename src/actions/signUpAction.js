
import axios from 'axios';
import { toast } from 'react-toastify';
import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from './types';


const signUpType = (type, payload) => ({
  type,
  payload,
});

export const signUp = (firstname, lastname, address, phonenumber, password,
  email) => (dispatch) => axios.post('https://propertypro-lite19.herokuapp.com/api/v1/auth/signup', {
  firstname,
  lastname,
  address,
  phonenumber,
  password,
  email,
}).then((response) => {
  dispatch(signUpType(SIGNUP_SUCCESS, response.data));
  toast.success(res.data.message);
}).catch((error) => {
  dispatch(signUpType(SIGNUP_FAILURE, error.response));
  toast.error(error.response.data.message);
});
