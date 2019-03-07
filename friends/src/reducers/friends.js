import types from "../constants";

const defaultState = {
  friends: [],
  loading: true
};

export const friends = (state = defaultState, action) => {
  switch (action.type) {
    case types.LOADING:
      return { loading: true };
    case types.GET_FRIENDS:
      return { friends: action.payload };
    default:
      return state;
  }
};
