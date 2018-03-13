import * as actionTypes from '../actions';

const initialState = {
    persons: [
        { id: 'avdfg', name: "Trevor", age: 22},
        { id: 'bvdfg', name: "Trebis", age: 12},
        { id: 'cvdfg', name: "Travis", age: 34}
    ]
}

function updateNames(state, action) {
    const personIndex = state.persons.findIndex(p => {
        return p.id === action.id;
      });
  
      const person = {...state.persons[personIndex]}
  
      person.name = action.value;
  
      const persons = [...state.persons]
      persons[personIndex] = person

      return {
          ...state,
          persons: persons
      }
}

function deletePerson(state, action) {
    const persons = [...state.persons];
    persons.splice(action.personIndex, 1);
    
    return {
        ...state,
        persons: persons
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_NAMES:
            return updateNames(state, action);
        case actionTypes.DELETE_PERSON:
            return deletePerson(state, action)
        default:
            return state;
    }
}

export default reducer;