import React, { Component } from 'react';
import Cockpit from '../CockpitComponents/Cockpit/Cockpit';
import Sidebar from '../SidebarComponents/Sidebar/Sidebar';
import { Route } from 'react-router-dom';
const styles = {
    sideBar:{
		width: '100%',
		backgroundColor:'lightgrey',
		height:'100%',
	},
	cockPit:{
		width:'100%'
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
                <Route path='/' component={Cockpit}/>
                <Route path='/:id' component={Cockpit}/>
            </div>
        </main>
        )}
}

export default MainComponent;