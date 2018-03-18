import React from 'react';
import classes from './TrendingItem.css';

const trendingItem = (props) => {
    return (
            <li><a href={props.destination}>{props.text}</a></li>
    );
};

export default trendingItem;
