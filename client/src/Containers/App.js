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
	sideBar:{
		width: '18%',
		backgroundColor:'aquamarine'
	}
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
					<div style={styles.sideBar}>
						<Sidebar
							searchFieldValue = {this.props.sidebar.searchFieldValue}
							onSearchSubmit = {this.props.onSearchSubmit}
							onSearchInput = {this.props.onSearchInput}
							trendingItems ={this.props.sidebar.trendingItems}
							toggleOverlay={this.props.toggleOverlay}
							showOverlay={this.props.sidebar.showOverlay}
						/>
					</div>
				</main>
			</div>);
    }
}

const mapStateToProps = (state) => {
	return {
		persons: state.persons.persons,
		showPersons: state.showPersons.showPersons,
		navbarItems: state.navbar.navbarItems,
		sidebar: state.sidebar,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onNameChange: (personId, val) => dispatch({type: actionTypes.UPDATE_NAMES, value: val, id: personId}),
		onDeletePerson: (personId) => dispatch({type: actionTypes.DELETE_PERSON, personIndex: personId}),
		onPersonToggle: () => dispatch({type: actionTypes.TOGGLE_PERSON}),
		onSearchInput: (value) => dispatch({type:actionTypes.HANDLE_INPUT, value: value}),
		toggleOverlay: () => dispatch({type:actionTypes.TOGGLE_OVERLAY}),
		onSearchSubmit: () => dispatch({type:actionTypes.HANDLE_SEARCH_SUBMIT})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
