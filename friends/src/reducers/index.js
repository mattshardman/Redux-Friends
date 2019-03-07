import { combineReducers } from 'redux';
import { friends } from './friends';
import { liked } from './liked';
import { loading } from './loading';
import { addedFriend } from './addedFriend';

export default combineReducers({
    friends,
    liked,
    loading,
    addedFriend
});