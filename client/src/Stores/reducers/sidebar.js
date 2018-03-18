import * as actionTypes from '../actions';

const initialState = {
    trendingItems: [
        {dest: "#", text: "first post"},
        {dest: "#", text: "second post"},
        {dest: "#", text: "third post"}
    ],
    searchFieldValue: [
        {value: ''}
    ]
}

// Sets searchFieldValue state on every input
function onSearchInput(state, action) {
    console.log(action.value);
    return {
        ...state,
        searchFieldValue: action.value
    }
}


// Handles search submit click
function handleSubmit(state, action) {
    alert('A name was submitted: ' + action.value);
    action.preventDefault();
    return state;
}

function handleNewEntry(state, action){
    console.log("CLICKED!");
    return state;
}

const reducer = (state = initialState, action) => {
    // return state;
    switch (action.type) {
        case actionTypes.HANDLE_INPUT:
            return onSearchInput(state, action);
        case actionTypes.NEW_ENTRY_CLICK:
            return handleNewEntry(state, action);
        default:
            return state;
    }
}

export default reducer;