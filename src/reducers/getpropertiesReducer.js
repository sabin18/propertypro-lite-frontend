import { GET_ALL_PROPERTIES_SUCCESS, GET_ALL_PROPERTIES_FAILURE } from '../actions/types';

const initialState = {
  getAllProperties: [],
  getAllPropertiesError: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROPERTIES_SUCCESS:
      return {
        ...state,
        getAllProperties: action.payload,
      };
    case GET_ALL_PROPERTIES_SUCCESS:
      return {
        ...state,
        getAllProperties: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
