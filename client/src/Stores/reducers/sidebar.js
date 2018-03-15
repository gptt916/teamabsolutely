import * as actionTypes from '../actions';

const initialState = {
    sidebarItems: [
        {dest: "#", text: "Home"},
        {dest: "#", text: "About"}
    ]
}

const reducer = (state = initialState, action) => {
    return state;
}

export default reducer;