import React, { Component } from 'react';
import classes from './TrendingItems.css';
import TrendingItem from './TrendingItem/TrendingItem';
import axios from 'axios';
import { withRouter} from 'react-router-dom';

class TrendingItems extends Component {
    componentDidMount () {
        this.props.getTrendingItems();
    }

    render() {
        const items = this.props.trendingItems.map((item, index) => {
            return(
                <TrendingItem
                destination={item.dest}
                text={item.name}
                key={item._id}
                itemId={item._id}
                getAllItems={this.props.getAllItems}
                />
            )
        });
        const styles= {
            menu:{
                color:'#494949', 
                backgroundColor:'lightgrey',
                width:'255px',
                borderBottom:'1px solid black'
            }
        }
        return (
            <div>
                <h1 style={styles.menu}>Trending</h1>
                <div className = {classes.TrendingItemList}>
                    <ul>
                        {items}
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(TrendingItems);
