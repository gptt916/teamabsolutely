import React from 'react';
import classes from './TrendingItem.css';
import { Link } from 'react-router-dom';

const trendingItem = (props) => {
    let newText = props.text;

    if (newText.length > 15) {
        newText = newText.substring(0, 12) + '...';
    }
    
    return (
            <li>
                <Link to={"/" + props.itemId}>
                    <div className={classes.container}>
                        <p className={classes.text}>{newText}</p>
                    </div>
                </Link>
            </li>
    );
};

export default trendingItem;
