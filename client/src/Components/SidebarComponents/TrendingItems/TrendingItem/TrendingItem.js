import React from 'react';
import classes from './TrendingItem.css';

const trendingItem = (props) => {
    let newText = props.text;

    if (newText.length > 15) {
        newText = newText.substring(0, 12) + '...';
    }

    return (
            <li>
                <div className={classes.container}>
                    <p className={classes.text}>{newText}</p>
                </div>
            </li>
    );
};

export default trendingItem;
