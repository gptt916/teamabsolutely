import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/CockpitComponents/Cockpit/Cockpit';
import Navbar from '../Components/NavbarComponents/Navbar/Navbar';
import AuthComponent from '../Components/AuthComponent/AuthComponent';
import { connect } from 'react-redux';
import * as actionTypes from '../Stores/actions';
import { Progress } from 'reactstrap';

class App extends Component {
  	render() {
        return (
            <div className={classes.mainApp}>
                <header>
                    <Navbar
						navbarItems={this.props.navbarItems}
					/>
                    <AuthComponent/>
				</header>
				<Cockpit
					items={this.props.cockpitItems}
					activeIndex={this.props.activeIndex}
					onExiting={this.props.onExiting}
					onExited={this.props.onExited}
					cockpitNext={this.props.cockpitNext}
					cockpitPrev={this.props.cockpitPrev}
				/>
			</div>);
    }
}

const mapStateToProps = (state) => {
	return {
		persons: state.persons.persons,
		showPersons: state.showPersons.showPersons,
		navbarItems: state.navbar.navbarItems,
		cockpitItems: state.cockpit.items,
		activeIndex: state.cockpit.activeIndex
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onNameChange: (personId, val) => dispatch({type: actionTypes.UPDATE_NAMES, value: val, id: personId}),
		onDeletePerson: (personId) => dispatch({type: actionTypes.DELETE_PERSON, personIndex: personId}),
		onPersonToggle: () => dispatch({type: actionTypes.TOGGLE_PERSON}),
		onExiting: () => dispatch({type: actionTypes.COCKPIT_ON_EXITING}),
		onExited: () => dispatch({type: actionTypes.COCKPIT_ON_EXITED}),
		cockpitNext: () => dispatch({type: actionTypes.COCKPIT_NEXT}),
		cockpitPrev: () => dispatch({type: actionTypes.COCKPIT_PREV})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
