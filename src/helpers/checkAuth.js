/* eslint-disable import/no-cycle */

export const storeToken = (token) => localStorage.setItem('token', token);

export const getToken = () => localStorage.getItem('token');

export default {
  storeToken, getToken
};
