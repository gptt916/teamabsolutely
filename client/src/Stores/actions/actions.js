import axios from 'axios';

export const UPDATE_NAMES = 'UPDATE_NAMES';
export const DELETE_PERSON = 'DELETE_PERSON';
export const TOGGLE_PERSON = 'TOGGLE_PERSON';
export const COCKPIT_ON_EXITING = 'COCKPIT_ON_EXITING';
export const COCKPIT_ON_EXITED = 'COCKPIT_ON_EXITED';
export const COCKPIT_NEXT = 'COCKPIT_NEXT';
export const COCKPIT_PREV = 'COCKPIT_PREV';
export const SET_LOGGED_OUT = 'SET_LOGGED_OUT';
export const SET_LOGGED_IN = 'SET_LOGGED_IN';
export const HANDLE_INPUT = 'HANDLE_INPUT';
export const TOGGLE_OVERLAY = 'TOGGLE_OVERLAY';
export const HANDLE_SEARCH_SUBMIT = 'HANDLE_SEARCH_SUBMIT';
export const SET_ACTIVE_INDEX = 'SET_ACTIVE_INDEX';
export const GET_VOTES = 'GET_VOTES';
export const GET_ALL_ITEMS = 'GET_ALL_ITEMS';
export const GET_TRENDING_ITEMS = 'GET_TRENDING_ITEMS';
export const CAST_VOTE = 'CAST_VOTE';
export const UPDATE_ACTIVE_INDEX = 'UPDATE_ACTIVE_INDEX';
export const SEARCH_ITEM = 'SEARCH_ITEM';




export const getAllItems = (data, currId) => {
    return {
        type: GET_ALL_ITEMS,
        data: data,
        currId: currId
    }
}

export const fetchItems = (currId) => {
    return dispatch => {
        axios.get('items/getAll')
        .then(response => {
            dispatch(getAllItems(response.data, currId));
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const getVotes = (data) => {
    return {
        type: GET_VOTES,
        data: data
    }
}

export const fetchVotes = () => {
    return dispatch => {
        axios.get('user/getAllUserVotes')
        .then(response => {
            dispatch(getVotes(response.data));
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const getTrendingItems = (data) => {
    return {
        type: GET_TRENDING_ITEMS,
        data: data
    }
}

export const fetchTrendingItems = () => {
    return dispatch => {
        axios.get('items/getTrending')
        .then(response => {
            dispatch(getTrendingItems(response.data))
        })
        .catch(error => {
            console.log(error);
        });
    }
}

export const sendVote = (val, data) => {
    return {
        type: CAST_VOTE,
        data: data,
        val: val
    }
}

export const postVote = (val, itemId) => {
    return dispatch => {
        axios.post('items/rateItem', {voteYAY: val, itemId: itemId})
        .then(response => {
            dispatch(sendVote(val, response.data));
        })
        .catch(err => {
            console.log(err);
            window.alert("YOU MUST SIGN IN TO VOTE!");
        });
    }
}

export const searchItems = (data) => {
    return {
        type: SEARCH_ITEM,
        data: data
    }
}

export const fetchQueryItems = (query) => {
    return dispatch => {
        axios.get('items/search/' + query)
        .then(response => {
            dispatch(searchItems(response.data))
        })
        .catch(err => {
            console.log(err);
        });
    }
}