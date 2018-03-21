import React from 'react';
import classes from './TrendingItem.css';
import { Link } from 'react-router-dom';

const trendingItem = (props) => {
    let newText = props.text;

    if (newText.length > 15) {
        newText = newText.substring(0, 12) + '...';
    }

    return (
        <Link to={"/" + props.itemId} onClick={props.getAllItems}>
            <li className={classes.w3BarItem + ' ' + classes.w3Button}>
                    <div className={classes.container}>
                        <p className={classes.text}>{newText}</p>
                    </div>
            </li>
        </Link>
    );
};

export default trendingItem;
