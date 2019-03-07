import types from "../constants";

export const liked = (state = [], action) => {
  switch (action.type) {
    case types.LIKE_FRIEND:
      return [...state, action.payload.id ];
    default:
      return state;
  }
};
