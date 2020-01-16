
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './types';

const loginType = (type, payload) => ({
  type,
  payload,
});

export const login = (password,
  email) => (dispatch) => axios.post('https://propertypro-lite19.herokuapp.com/api/v1/auth/signin', {
  password,
  email,
}).then((response) => {
  localStorage.setItem('token', response.data.token);
  dispatch(loginType(LOGIN_SUCCESS, response.data));
  toast.success(res.data.message);
}).catch((error) => {
  dispatch(loginType(LOGIN_FAILURE, error.response));
  toast.error(error.response.data.error);
});
