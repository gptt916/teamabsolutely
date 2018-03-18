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
        <side>
            <ul>
                {items}
            </ul>
        </side>
    );
};

export default trendingItems;