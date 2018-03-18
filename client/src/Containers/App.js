import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/CockpitComponents/Cockpit/Cockpit';
import Navbar from '../Components/NavbarComponents/Navbar/Navbar';
import Sidebar from '../Components/SidebarComponents/Sidebar/Sidebar';
import AuthComponent from '../Components/AuthComponent/AuthComponent';
import { connect } from 'react-redux';
import * as actionTypes from '../Stores/actions';
import { Progress } from 'reactstrap';

const styles = {
	appContainer:{
		margin:0,
		height:"100%",
	},
	sideBar:{
		width: '18%',
		backgroundColor:'aquamarine',
		height:'100%',
	},
	cockPit:{
		width:'82%'
	}
};
class App extends Component {
  	render() {
        return (
            <div className={classes.mainApp} style={styles.appContainer}>
                <header>
                    <Navbar
						navbarItems={this.props.navbarItems}
					/>
                    <AuthComponent
					access_token={this.props.access_token}
					isLoggedIn={this.props.isLoggedIn}
					setLoggedIn={this.props.setLoggedIn}/>
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
					<div style={styles.cockPit}>
						<Cockpit
							items={this.props.cockpitItems}
							activeIndex={this.props.activeIndex}
							onExiting={this.props.onExiting}
							onExited={this.props.onExited}
							cockpitNext={this.props.cockpitNext}
							cockpitPrev={this.props.cockpitPrev}
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
		cockpitItems: state.cockpit.items,
		activeIndex: state.cockpit.activeIndex,
		isLoggedIn: state.auth.isLoggedIn,
		access_token: state.auth.access_token,
		sidebar: state.sidebar,
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
		cockpitPrev: () => dispatch({type: actionTypes.COCKPIT_PREV}),
		setLoggedIn: (access_token) => dispatch({type: actionTypes.SET_LOGGED_IN, token: access_token}),
		setLoggedOut: () => dispatch({type: actionTypes.SET_LOGGED_OUT}),
		onSearchInput: (value) => dispatch({type:actionTypes.HANDLE_INPUT, value: value}),
		toggleOverlay: () => dispatch({type:actionTypes.TOGGLE_OVERLAY}),
		onSearchSubmit: () => dispatch({type:actionTypes.HANDLE_SEARCH_SUBMIT})
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
