import * as actionTypes from '../actions';

const initialState = {
    sidebarItems: [
        {dest: "#", text: "Search"},
        {dest: "#", text: "Trending Items"},
        {dest: "#", text: "New Item Submission"}
    ]
}

const reducer = (state = initialState, action) => {
    return state;
}

export default reducer;