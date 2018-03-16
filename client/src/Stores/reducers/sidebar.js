import * as actionTypes from '../actions';

const initialState = {
    sidebarItems: [
        {dest: "#", text: "Search"},
        {dest: "#", text: "Trending Items"},
        {dest: "#", text: "New Item Submission"}
    ],
    searchFieldValue: [
        {value: ''}
    ]
}
  
function handleChange(state, action) {
    console.log(action.value);
    return {
        ...state,
        searchFieldValue: action.value
    }
}
  
// function handleSubmit(state, action) {
//     alert('A name was submitted: ' + action.value);
//     action.preventDefault();
//     return state;
// }

const reducer = (state = initialState, action) => {
    // return state;
    switch (action.type) {
        case actionTypes.HANDLE_INPUT:
            return handleChange(state, action);
        default:
            return state;
    }
}

export default reducer;