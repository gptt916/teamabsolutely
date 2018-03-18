import * as actionTypes from '../actions';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

const initialState = {
    access_token: null,
    isLoggedIn: false
}

function setLoggedIn(state, access_token) {
    return {
        ...state,
        access_token: access_token,
        isLoggedIn: true
    }
}

function setLoggedOut(state) {
    return {
        ...state,
        access_token: null,
        isLoggedIn: false
    }
}

const reducer = (state = initialState, action) => {
    if (state.access_token === null && cookies.get('access_token')) {
        return {
            ...state,
            access_token: cookies.get('access_token'),
            isLoggedIn: true
        }
    }
    switch (action.type) {
        case actionTypes.SET_LOGGED_IN:
            return setLoggedIn(state, action.token);
        case actionTypes.SET_LOGGED_OUT:
            return setLoggedOut(state);
        default:
            return state;
    }
}

export default reducer;