import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import Navbar from '../Components/NavbarComponents/Navbar/Navbar';
import AuthComponent from '../Components/AuthComponent/AuthComponent';
import { connect } from 'react-redux';
import * as actionTypes from '../Stores/actions';

class App extends Component {
  	render() {
        return (
            <div className={classes.App}>
                <header>
                    <Navbar
						navbarItems={this.props.navbarItems}
					/>
                    <AuthComponent/>
				</header>
			</div>);
    }
}

const mapStateToProps = (state) => {
	return {
		persons: state.persons.persons,
		showPersons: state.showPersons.showPersons,
		navbarItems: state.navbar.navbarItems
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onNameChange: (personId, val) => dispatch({type: actionTypes.UPDATE_NAMES, value: val, id: personId}),
		onDeletePerson: (personId) => dispatch({type: actionTypes.DELETE_PERSON, personIndex: personId}),
		onPersonToggle: () => dispatch({type: actionTypes.TOGGLE_PERSON})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
