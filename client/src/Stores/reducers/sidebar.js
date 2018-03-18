import * as actionTypes from '../actions';

const initialState = {
    trendingItems: [
        {dest: "#", text: "first post"},
        {dest: "#", text: "second post"},
        {dest: "#", text: "third post"}
    ],
    searchFieldValue: [
        {value: ''}
    ],
    showOverlay: false
}

// Sets searchFieldValue state on every input
function onSearchInput(state, action) {
    return {
        ...state,
        searchFieldValue: {value: action.value}
    }
}

// Toggles the new entry overlay
function toggleOverlay(state, action){
    let overlay = state.showOverlay;
    return{
        ...state,
        showOverlay: !overlay
    }
}
// Handles search submit click
function handleSubmit(state, action) {
    alert('A name was submitted: ' + state.searchFieldValue.value);
    action.preventDefault();
    return state;
}

const reducer = (state = initialState, action) => {
    // return state;
    switch (action.type) {
        case actionTypes.HANDLE_INPUT:
            return onSearchInput(state, action);
        case actionTypes.TOGGLE_OVERLAY:
            return toggleOverlay(state, action);
        case actionTypes.HANDLE_SEARCH_SUBMIT:
            return handleSubmit(state, action);
        default:
            return state;
    }
}

export default reducer;