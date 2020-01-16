import { SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions/types';

const initialState = {
  data: [],
  dataError: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };

    case SIGNUP_FAILURE:
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
