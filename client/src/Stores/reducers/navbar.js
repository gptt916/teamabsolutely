import * as actionTypes from '../actions/actions';

const initialState = {
    navbarItems: [
        {dest: "#", text: "New Item"}
    ],
    showOverlay: true
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
        default:
            return state;
    }
}



export default reducer;
