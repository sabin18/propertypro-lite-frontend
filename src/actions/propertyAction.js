import React from 'react';
import { GET_ALL_PROPERTIES_SUCCESS, GET_ALL_PROPERTIES_FAILURE} from './types';
import axios from 'axios';

  export const getAllProperties = () => (dispatch) => axios.get(`https://propertypro-lite19.herokuapp.com/api/v1/properties/`)
    .then((res) => dispatch(
      
      { 
      type: GET_ALL_PROPERTIES_SUCCESS,
       payload: res.data,

       type: GET_ALL_PROPERTIES_FAILURE,
       payload: res.data,
    
    }));
