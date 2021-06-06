import { SET_SEARCH } from "../actionTypes";
import axios from "axios";
import { addError, removeError } from "./error";

export const addCountries = (countries) => {
  return {
    type: SET_SEARCH,
    payload: countries,
  };
};

export const searchResult = (search) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `https://restcountries.eu/rest/v2/name/${search}`
      );
      dispatch(addCountries(response.data));
      dispatch(removeError());
    } catch (err) {
      const error = err.response.data;
      dispatch(addError(error.message));
    }
  };
};
