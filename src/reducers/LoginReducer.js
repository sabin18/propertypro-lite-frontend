import { LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/types';

const initialState = {
  data: [],
  dataError: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        dataError: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};
