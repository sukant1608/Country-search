import { SET_SEARCH } from "../actionTypes";

const DEFAULT_STATE = {
  result: [],
};

export default (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        result: action.payload,
      };
    default:
      return state;
  }
};
