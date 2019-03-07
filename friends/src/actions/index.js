import { axiosWithHeader } from './axiosWithHeader';
import types from '../constants';

export const getFriends = payload => dispatch => {
  dispatch({ type: types.LOADING });
  axiosWithHeader.then(r => {
    dispatch({
        type: types.GET_FRIENDS,
        payload: r.data
      });
  });
};
