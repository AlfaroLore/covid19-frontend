import axios from 'axios';
import { GET_COUNTRY, COUNTRY_ERROR } from './types';

// Get current users profile
export const getInfoByCountry = (countryName) => async (dispatch) => {
  try {
    const res = await axios.get(`/country?name=${countryName}`);

    dispatch({
      type: GET_COUNTRY,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: COUNTRY_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
