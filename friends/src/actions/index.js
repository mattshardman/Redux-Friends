import { axiosGetWithHeader, axiosPostWithHeader, axiosDeleteWithHeader } from './axiosWithHeader';
import types from '../constants';

export const getFriends = () => dispatch => {
  dispatch({ type: types.LOADING });
  axiosGetWithHeader('friends').then(r => {
    dispatch({
        type: types.GET_FRIENDS,
        payload: r.data
      });
  });
};

export const addFriend = friend => dispatch => {
  axiosPostWithHeader('friends', friend).then(r => {
    dispatch({
        type: types.ADD_FRIENDS,
        payload: r.data
      });
  });
}

export const deleteFriend = id => dispatch => {
  dispatch({ type: types.DELETE_FRIENDS, payload: { id } });
  axiosDeleteWithHeader(`friends/${id}`);
}

export const likeFriend = id => {
  return {
    type: types.LIKE_FRIEND,
    payload: { id }
  }
}
