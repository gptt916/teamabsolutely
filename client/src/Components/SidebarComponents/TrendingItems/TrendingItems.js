import React, { Component } from 'react';
import classes from './TrendingItems.css';
import TrendingItem from './TrendingItem/TrendingItem';
import axios from 'axios';
import { withRouter} from 'react-router-dom';

class TrendingItems extends Component {
    state = {
        items: []
    };

    componentDidMount () {
        axios.get('items/getTrending')
            .then(response => {
                this.setState({items: response.data});
            })
            .catch(error => {
                console.log(error);
            });
    }

    render() {
        const items = this.state.items.map((item, index) => {
            return(
                <TrendingItem
                destination={item.dest}
                text={item.name}
                key={item._id}
                itemId={item._id}
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
                <h1 style={styles.menu}>Menu</h1>
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
