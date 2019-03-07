import types from "../constants";

export const loading = (state = true, action) => {
  switch (action.type) {
    case types.LOADING:
      return true;
    default:
      return state;
  }
};
