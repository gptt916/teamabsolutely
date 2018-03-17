import React from 'react';
import classes from './Cockpit.css';
import thumbsDown from '../../../assets/thumbs_down.png';
import thumbsUp from '../../../assets/thumbs_up.png';
import { Progress } from 'reactstrap';
import Carousel from 'nuka-carousel';

const navbar = (props) => {
    return (
        <div>
            <h3 className={classes.imageTitle}>{props.items[props.activeIndex].title}</h3>
            <div className={classes.container}>
                <img className={classes.rateImg} src={thumbsDown}/>
                <img className={classes.mainImg} src={props.items[props.activeIndex].src}/>
                <img className={classes.rateImg} src={thumbsUp}/>
            </div>
            <Progress className={classes.progressBarContainer} multi>
                <Progress className={[classes.progressBar, classes.progressBarText].join(' ')} bar color="danger" value={100 - props.items[props.activeIndex].yayPercentage} max={100}>{100 - props.items[props.activeIndex].yayPercentage}%</Progress>
                <Progress className={[classes.progressBar, classes.progressBarText].join(' ')} bar value={props.items[props.activeIndex].yayPercentage} max={100}>{props.items[props.activeIndex].yayPercentage}%</Progress>
            </Progress>
            <div className={classes.navButtons}>
                <button onClick={props.cockpitPrev}className={classes.prevButton}>Prev</button>
                <button onClick={props.cockpitNext}className={classes.nextButton}>Next</button>
            </div>
        </div>
    );
};

export default navbar;
