import React, { Component } from 'react';
import Cockpit from '../CockpitComponents/Cockpit/Cockpit';
import Sidebar from '../SidebarComponents/Sidebar/Sidebar';
import { Route } from 'react-router-dom';
const styles = {
    sideBar:{
		width: '255px',
		backgroundColor:'whitesmoke',
		height:'100%',
	},
	cockPit:{
        backgroundColor:'#29303B'
	}
}

class MainComponent extends Component {
    render() {
        return (
        <main>
            <div style={styles.sideBar}>
                <Sidebar/>
            </div>
            <div style={styles.cockPit}>
                <Route exact path='/' component={Cockpit}/>
                <Route path='/:id' component={Cockpit}/>
            </div>
        </main>
        )}
}

export default MainComponent;
