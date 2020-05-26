import React, {Component} from 'react';

import Person from './Person/Person';

class Persons extends Component {
static getDerivedStateFromProps(props, state){
  console.log("[persons.js] getDerivedStateFromProps");
  return state;
}
//nextProps => the upcoming props which will have effect right after the update
//nextState => the upcoming state
shouldComponentUpdate(nextProps, nextState){
  //we should return either true or false
  //true => if react should continue updating
  //fasle => if it should not
  //should not directly return true /false thiough
  console.log("[persons.js] shouldComponentUpdate");
  return true;
}

getSnapshotBeforeUpdate(prevProps, prevState){
  console.log("[persons.js] getSnapshotBeforeUpdate");
}

componentDidUpdate(){
  console.log("[persons.js] componentDidUpdate");
}

  render(){
  console.log('[Persons.js] rendering...');
  return this.props.persons.map((person, index) => {
    return (
      <Person
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age}
        key={person.id}
        changed={event => this.props.changed(event, person.id)}
      />
    );
  });
}
};

export default  Persons;
