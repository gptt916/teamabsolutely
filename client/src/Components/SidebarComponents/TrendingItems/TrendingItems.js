import React from 'react';
import classes from './TrendingItems.css';
import TrendingItem from './TrendingItem/TrendingItem';

const trendingItems = (props) => {
    const items = props.trendingItems.map((item, index) => {
        return(
            <TrendingItem
            destination={item.dest}
            text={item.text}
            key={index}
            />
        )
    });

    return ( 
        <div>
            <div>Trending Items</div>
            <div className = {classes.TrendingItemList}>
                <ul>
                    {items}
                </ul>
            </div>
        </div>
    );
};

export default trendingItems;