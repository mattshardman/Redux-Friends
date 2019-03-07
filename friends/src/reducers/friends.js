import axios from 'axios';

export const friends = (state = [], action) => {
    switch (action.type) {
        case 'LOADING': 
            return { loading: true };
        default:
            return state;
    }
}