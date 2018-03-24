import * as actionTypes from '../actions/actions';
import { stat } from 'fs';

const initialState = {
    trendingItems: [],
    items: [],
    searchFieldValue: '',
    votes: [],
    activeIndex: 0,
    searchItems: [],
    showStats: false
}

function setShowStats(state, flag) {
    return {
        ...state,
        showStats: flag
    }
}

function getTrendingItems(state, data) {
    return {
        ...state,
        trendingItems: data
    }
}

function updateActiveIndex(state, itemId) {
    let newIndex = state.items.find(item => item._id === itemId);
    console.log(newIndex);

    return {
        ...state,
        activeIndex: newIndex >= 0 ? newIndex : 0
    }
}

function getAllItems(state, data, currId=window.location.pathname.substring(1)) {
    const items = data.map(item => {
        if (item.countNAY === 0 && item.countYAY === 0) {
            item.yayPercent = 50;
        }
        else {
            item.yayPercent = Math.round(((item.countYAY) / (item.countNAY + item.countYAY)) * 100)
        }
        return item;
    });

    var currIndex = 0;
    if (currId) {
        currIndex = items.map((item) => item._id).indexOf(currId);
    }

    return {
        ...state,
        items: items,
        activeIndex: currIndex >= 0 ? currIndex : 0
    }
}

function getVotes(state, data) {
    return {
        ...state,
        votes: data.votes
    }
}

function setActiveIndex(state, index) {
    return {
        ...state,
        activeIndex: index
    }
}

function castVote(state, val, data) {
    let items = [...state.items];
    let item = data;
    if (item.countNAY === 0 && item.countYAY === 0) {
        item.yayPercent = 50;
    }
    else {
        item.yayPercent = Math.round(((item.countYAY) / (item.countNAY + item.countYAY)) * 100)
    }

    items[state.activeIndex] = item;
    let votes = [...state.votes];
    let vote = votes.find(vote => vote.itemId === state.items[state.activeIndex]._id);

    if (!vote) {
        vote = {itemId: state.items[state.activeIndex]._id, voteYAY: val};
        votes.push(vote);
    }
    else {
        vote.voteYAY = val;
    }

    return {
        ...state,
        items: items,
        votes: votes
    }
}

function setSearchItems(state, items){
    const newItems = items.map(item => {
        if (item.countNAY === 0 && item.countYAY === 0) {
            item.yayPercent = 50;
        }
        else {
            item.yayPercent = Math.round(((item.countYAY) / (item.countNAY + item.countYAY)) * 100)
        }
        return item;
    });

    return {
        ...state,
        items: newItems,
        activeIndex: 0
    }
}

// Sets searchFieldValue state on every input
function onSearchInput(state, newValue) {
    return {
        ...state,
        searchFieldValue: newValue
    }
}


const reducer = (state = initialState, action) => {
    // return state;
    switch (action.type) {
        case actionTypes.GET_ALL_ITEMS:
            return getAllItems(state, action.data, action.currId);
        case actionTypes.GET_TRENDING_ITEMS:
            return getTrendingItems(state, action.data);
        case actionTypes.SET_ACTIVE_INDEX:
            return setActiveIndex(state, action.newIndex);
        case actionTypes.GET_VOTES:
            return getVotes(state, action.data);
        case actionTypes.CAST_VOTE:
            return castVote(state, action.val, action.data);
        case actionTypes.UPDATE_ACTIVE_INDEX:
            return updateActiveIndex(state, action.itemId);
        case actionTypes.SEARCH_ITEM:
            return setSearchItems(state, action.data);
        case actionTypes.HANDLE_INPUT:
            return onSearchInput(state, action.newValue);
        case actionTypes.SET_SHOW_STATS:
            return setShowStats(state, action.flag);
        default:
            return state;
    }
}

export default reducer;