import React, { Component } from 'react';
import classes from './App.css';
import Navbar from '../Components/NavbarComponents/Navbar/Navbar';
import AuthComponent from '../Components/AuthComponent/AuthComponent';
import MainComponent from '../Components/MainComponent/MainComponent';
import { connect } from 'react-redux';
import * as actionTypes from '../Stores/actions/actions';

const styles = {
	appContainer:{
		margin:0,
		height:"100%",
	}
};
class App extends Component {
	
  	render() {
        return (
            <div className={classes.mainApp} style={styles.appContainer}>
                <header>
                    <Navbar
						navbarItems={this.props.navbarItems}
						showOverlay={this.props.showOverlay}
						toggleOverlay={this.props.toggleOverlay}
						nameText={this.props.nameText}
						urlText={this.props.urlText}
						onNameInput={this.props.onNameInput}
						onURLInput={this.props.onURLInput}
						onNewItemSubmit={this.props.onNewItemSubmit}
					/>
                    <AuthComponent
					access_token={this.props.access_token}
					isLoggedIn={this.props.isLoggedIn}
					setLoggedIn={this.props.setLoggedIn}/>
				</header>
				<MainComponent/>
			</div>
		);
    }
}

const mapStateToProps = (state) => {
	return {
		persons: state.persons.persons,
		showPersons: state.showPersons.showPersons,
		navbarItems: state.navbar.navbarItems,
		showOverlay: state.navbar.showOverlay,
		isLoggedIn: state.auth.isLoggedIn,
		access_token: state.auth.access_token,
		sidebar: state.sidebar,
		nameText: state.navbar.nameText,
		urlText: state.navbar.urlText
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		onNameChange: (personId, val) => dispatch({type: actionTypes.UPDATE_NAMES, value: val, id: personId}),
		onDeletePerson: (personId) => dispatch({type: actionTypes.DELETE_PERSON, personIndex: personId}),
		onPersonToggle: () => dispatch({type: actionTypes.TOGGLE_PERSON}),
		setLoggedIn: (access_token) => dispatch({type: actionTypes.SET_LOGGED_IN, token: access_token}),
		setLoggedOut: () => dispatch({type: actionTypes.SET_LOGGED_OUT}),
		onSearchInput: (value) => dispatch({type:actionTypes.HANDLE_INPUT, value: value}),
		toggleOverlay: () => dispatch({type:actionTypes.TOGGLE_OVERLAY}),
		onSearchSubmit: () => dispatch({type:actionTypes.HANDLE_SEARCH_SUBMIT}),
		onNameInput: (value) => dispatch({type: actionTypes.ON_NEW_NAME, newName: value}),
		onURLInput: (value) => dispatch({type: actionTypes.ON_NEW_URL, newURL: value}),
		onNewItemSubmit: (name, url) => dispatch(actionTypes.submitNewItem(name, url))
	};
};

export default connect(mapStateToProps, mapDispatchToProps, null, {pure: false})(App);
