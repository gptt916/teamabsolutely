import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../Components/CockpitComponents/Cockpit/Cockpit';
import Navbar from '../Components/NavbarComponents/Navbar/Navbar';
import AuthComponent from '../Components/AuthComponent/AuthComponent';
import { connect } from 'react-redux';
import * as actionTypes from '../Stores/actions';

class App extends Component {
  	render() {
        return (
            <div className={classes.mainApp}>
                <header>
                    <Navbar
						navbarItems={this.props.navbarItems}
					/>
                    <AuthComponent
					access_token={this.props.access_token}
					isLoggedIn={this.props.isLoggedIn}
					setLoggedIn={this.props.setLoggedIn}/>
				</header>
				<Cockpit/>
			</div>);
    }
}

const mapStateToProps = (state) => {
	return {
		persons: state.persons.persons,
		showPersons: state.showPersons.showPersons,
		navbarItems: state.navbar.navbarItems,
		isLoggedIn: state.auth.isLoggedIn,
		access_token: state.auth.access_token
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onNameChange: (personId, val) => dispatch({type: actionTypes.UPDATE_NAMES, value: val, id: personId}),
		onDeletePerson: (personId) => dispatch({type: actionTypes.DELETE_PERSON, personIndex: personId}),
		onPersonToggle: () => dispatch({type: actionTypes.TOGGLE_PERSON}),
		setLoggedIn: (access_token) => dispatch({type: actionTypes.SET_LOGGED_IN, token: access_token}),
		setLoggedOut: () => dispatch({type: actionTypes.SET_LOGGED_OUT})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
