import types from "../constants";

export const friends = (state = [], action) => {
  switch (action.type) {
    case types.GET_FRIENDS:
    case types.ADD_FRIENDS:
      return action.payload;
    case types.DELETE_FRIENDS:
      return state.filter(friend => friend.id !== action.payload.id);
    default:
      return state;
  }
};
