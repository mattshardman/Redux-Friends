import { axiosGetWithHeader, axiosPostWithHeader} from './axiosWithHeader';
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
  console.log(friend)
  dispatch({ type: types.LOADING });
  axiosPostWithHeader('friends', friend).then(r => {
    console.log(r)
    dispatch({
        type: types.GET_FRIENDS,
        payload: r.data
      });
  });
}


