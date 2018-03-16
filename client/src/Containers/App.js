import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import Navbar from '../Components/NavbarComponents/Navbar/Navbar';
import Sidebar from '../Components/SidebarComponents/Sidebar/Sidebar';
import AuthComponent from '../Components/AuthComponent/AuthComponent';
import { connect } from 'react-redux';
import * as actionTypes from '../Stores/actions';
const styles = {
	appContainer:{
		margin:0,
		height:"100%",
	},
};
class App extends Component {
  	render() {
        return (
            <div className={classes.App} style={styles.appContainer}>
                <header>
                    <Navbar
						navbarItems={this.props.navbarItems}
					/>
                    <AuthComponent/>
				</header>
				<main>
					<sidebar>
						<Sidebar
							searchFieldValue = {this.props.sidebar.searchFieldValue}
							searchFieldInput = {this.props.onSearchInput}
							sidebarItems ={this.props.sidebar.sidebarItems}
						/>
					</sidebar>
				</main>
			</div>);
    }
}

const mapStateToProps = (state) => {
	return {
		persons: state.persons.persons,
		showPersons: state.showPersons.showPersons,
		navbarItems: state.navbar.navbarItems,
		sidebar: state.sidebar
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onNameChange: (personId, val) => dispatch({type: actionTypes.UPDATE_NAMES, value: val, id: personId}),
		onDeletePerson: (personId) => dispatch({type: actionTypes.DELETE_PERSON, personIndex: personId}),
		onPersonToggle: () => dispatch({type: actionTypes.TOGGLE_PERSON}),
		onSearchInput: (value) => dispatch({type:actionTypes.HANDLE_INPUT, value: value})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
