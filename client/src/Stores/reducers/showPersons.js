import * as actionTypes from '../actions/actions';

const initialState = {
    showPersons: false
}

function togglePerson(state) {
    return {
        ...state,
        showPersons: !state.showPersons
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.TOGGLE_PERSON:
            return togglePerson(state)
        default:
            return state;
    }
}

export default reducer;