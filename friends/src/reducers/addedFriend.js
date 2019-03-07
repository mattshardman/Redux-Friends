import types from "../constants";

export const addedFriend = (state = false, action) => {
  switch (action.type) {
    case types.ADD_FRIENDS:
      return true;
    case types.GET_FRIENDS:
      return false;
    default:
      return state;
  }
};
