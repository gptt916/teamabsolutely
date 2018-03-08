import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    return (
        props.persons.map((person, index) => {
            return (
              <Person 
              clicked={() => props.clicked(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => props.changed(person.id, event)}
              />
            )
        })
    )
}

export default persons;