import { GET_COUNTRY, COUNTRY_ERROR } from '../actions/types';

const initialState = {
  country: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COUNTRY:
      return {
        ...state,
        country: payload,
        loading: false,
      };
    case COUNTRY_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        country: null,
      };
    default:
      return state;
  }
}
