import * as actionTypes from '../actions/actions';

const initialState = {
    navbarItems: [
        {dest: "#", text: "New Item"}
    ],
    showOverlay: false,
    nameText: '',
    urlText: ''
}

function onNameInput(state, newText) {
    return {
        ...state,
        nameText: newText
    }
}

function onURLInput(state, newURL) {
    return {
        ...state,
        urlText: newURL
    }
}

function toggleOverlay(state){
    let overlay = state.showOverlay;
    return {
        ...state,
        showOverlay: !overlay
    }
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_OVERLAY:
            return toggleOverlay(state);
        case actionTypes.ON_NEW_NAME:
            return onNameInput(state, action.newName);
        case actionTypes.ON_NEW_URL:
            return onURLInput(state, action.newURL);
        default:
            return state;
    }
}



export default reducer;
