import React from 'react';
import Person from './Person/Person';
import Radium from 'radium';
import { StyleRoot } from 'radium/lib';

const persons = (props) => {
    return (
        props.persons.map((person, index) => {
            return (
                <StyleRoot>
              <Person 
              clicked={() => props.clicked(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => props.changed(person.id, event)}
              />
              </StyleRoot>
            )
        })
    )
}

export default Radium(persons);