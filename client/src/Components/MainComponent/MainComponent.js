import React, { Component } from 'react';
import { connect } from 'react-redux';

import Cockpit from '../CockpitComponents/Cockpit/Cockpit';
import StatsCockpit from '../CockpitComponents/StatsCockpit/StatsCockpit';
import Sidebar from '../SidebarComponents/Sidebar/Sidebar';
import { withRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import * as actionTypes from '../../Stores/actions/actions';


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
        let cockpit = null;
        if (this.props.showStats) {
            cockpit = <StatsCockpit
            setShowStats={this.props.setShowStats}
            item={this.props.items[this.props.activeIndex]}/>
        }
        else {
            cockpit = <Cockpit 
            items={this.props.items}
            votes={this.props.votes}
            activeIndex={this.props.activeIndex}
            getAllItems={this.props.getAllItems}
            setActiveIndex={this.props.setActiveIndex}
            castVote={this.props.castVote}
            getVotes={this.props.getVotes}
            showStats={this.props.showStats}
            setShowStats={this.props.setShowStats}
            />
        }
        return (
        <main>
            <div style={styles.sideBar}>
                <Sidebar
                trendingItems={this.props.trendingItems}
                getTrendingItems={this.props.getTrendingItems}
                onSearchInput={this.props.onSearchInput}
                handleSubmit={this.props.searchForItem}
                searchQueryValue={this.props.searchQuery}
                getAllItems={this.props.getAllItems}
                />
            </div>
            <div style={styles.cockPit}>
                <Route exact path='/' render={() => cockpit}/>
                <Route path='/:id' render={() => cockpit}/>
            </div>
        </main>
        )}
}

const mapStateToProps = state => {
    return {
        items: state.main.items,
        trendingItems: state.main.trendingItems,
        votes: state.main.votes,
        activeIndex: state.main.activeIndex,
        searchQuery: state.main.searchFieldValue,
        showStats: state.main.showStats
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getAllItems: () => dispatch(actionTypes.fetchItems()),
        getTrendingItems: () => dispatch(actionTypes.fetchTrendingItems()),
        setActiveIndex: (newIndex) => dispatch({type: actionTypes.SET_ACTIVE_INDEX, newIndex: newIndex}),
        getVotes: () => dispatch(actionTypes.fetchVotes()),
        castVote: (val, itemId) => dispatch(actionTypes.postVote(val, itemId)),
        updateActiveIndex: (itemId) => dispatch({type: actionTypes.UPDATE_ACTIVE_INDEX, itemId: itemId}),
        searchForItem: (query) => dispatch(actionTypes.fetchQueryItems(query)),
        onSearchInput: (value) => dispatch({type: actionTypes.HANDLE_INPUT, newValue: value}),
        setShowStats: (value) => dispatch({type: actionTypes.SET_SHOW_STATS, flag: value})
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));
