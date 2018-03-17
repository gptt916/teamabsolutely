import * as actionTypes from '../actions';

const initialState = {
    isAnimating: false,
    activeIndex: 0,
    items: [
        {
            src: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/1514895590.jpg",
            altText: "Slide 1",
            caption: "Slide 1",
            yayPercentage: 20,
            title: "Donald"
        },
        {
            src: "https://qph.fs.quoracdn.net/main-qimg-29f4871a37c9cf3bdfd1d25d3196f4ff-c",
            altText: "Slide 2",
            caption: "Slide 2",
            yayPercentage: 60,
            title: "Tarun"
        },
        {
            src: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/1514895590.jpg",
            altText: "Slide 3",
            caption: "Slide 3",
            yayPercentage: 40,
            title: "Donald 2"
        },
    ]
}

function onExiting(state) {
    return {
        ...state,
        isAnimating: true
    }
}

function onExited(state) {
    return {
        ...state,
        isAnimating: true
    }
}

function next(state) {
    const nextIndex = state.activeIndex === state.items.length - 1 ? 0 : state.activeIndex + 1;
    return {
        ...state,
        activeIndex: nextIndex
    }
}

function previous(state) {
    const nextIndex = state.activeIndex === 0 ? state.items.length - 1 : state.activeIndex - 1;
    return {
        ...state,
        activeIndex: nextIndex
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.COCKPIT_ON_EXITING:
            return onExiting(state);
        case actionTypes.COCKPIT_ON_EXITED:
            return onExited(state);
        case actionTypes.COCKPIT_NEXT:
            return next(state);
        case actionTypes.COCKPIT_PREV:
            return previous(state);
        default:
            return state;
    }
}

export default reducer;