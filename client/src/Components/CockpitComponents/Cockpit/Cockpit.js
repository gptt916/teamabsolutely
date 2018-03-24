import React, { Component } from 'react';
import classes from './Cockpit.css';
import thumbsDown from '../../../assets/thumbs_down.png';
import thumbsUp from '../../../assets/thumbs_up.png';
import { Progress } from 'reactstrap';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Cockpit extends Component {
    componentDidMount () {
        this.props.getAllItems();
        this.props.getVotes();
    }

    componentWillReceiveProps() {
        var currIndex = 0;

        console.log(window.location.pathname);
        if (this.props.history && window.location.pathname) {
            currIndex = this.props.items.map((item) => item._id).indexOf(window.location.pathname.substring(1));
            console.log(currIndex);
        }

        this.props.setActiveIndex(currIndex < 0 ? 0 : currIndex);
    }

    onNextClick() {
        const newIndex = this.props.activeIndex === this.props.items.length - 1 ? 0 : this.props.activeIndex + 1;
        this.props.history.push('/' + this.props.items[newIndex]._id);
        this.props.setActiveIndex(newIndex);
    }

    onPrevClick() {
        const newIndex = this.props.activeIndex === 0 ? this.props.items.length - 1 : this.props.activeIndex - 1;
        this.props.history.push('/' + this.props.items[newIndex]._id);
        this.props.setActiveIndex(newIndex);
    }

    vote (val) {
        let vote = this.props.votes.find(vote => vote.itemId === this.props.items[this.props.activeIndex]._id);
        console.log(vote);
        if (vote && vote.voteYAY === val) {
                return;
        }
        this.props.castVote(val, this.props.items[this.props.activeIndex]._id);
    }

    render () {
        let res = <h1 style={{color: 'white'}}>No images</h1>;
        if (this.props.items.length > 0 && this.props.activeIndex >= 0) {
            
            var greyYAY = classes.notVoted;
            var greyNAY = classes.notVoted;
            let currIndex = this.props.activeIndex;
            if (this.props.votes.length > 0) {

                if (this.props.activeIndex >= this.props.items.length) {
                    currIndex = 0;
                }
                const vote = this.props.votes.find(vote => vote.itemId === this.props.items[currIndex]._id);
                if (vote) {
                    if (vote.voteYAY) {
                        greyYAY = '';
                    }
                    else if (vote.voteYAY === false) {
                        greyNAY = '';
                    }
                }
            }
            res = (
            <div>
                <h3 className={classes.imageTitle}>{this.props.items[currIndex].name}</h3>
                <div className={classes.container}>
                    <img onClick={() => this.vote(false)} alt="thumbsDown" className={[classes.rateImg, greyNAY].join(' ')} src={thumbsDown}/>
                    <img alt="main" className={classes.mainImg} src={this.props.items[currIndex].src}/>
                    <img onClick={() => this.vote(true)} alt="thumbsUp" className={[classes.rateImg, greyYAY].join(' ')} src={thumbsUp}/>
                </div>
                <Progress className={classes.progressBarContainer} multi>
                    <Progress className={[classes.progressBar, classes.progressBarText].join(' ')} bar color="danger" value={100 - this.props.items[currIndex].yayPercent} max={100}>{100 - this.props.items[currIndex].yayPercent}%</Progress>
                    <Progress className={[classes.progressBar, classes.progressBarText].join(' ')} bar value={this.props.items[currIndex].yayPercent} max={100}>{this.props.items[currIndex].yayPercent}%</Progress>
                </Progress>
                <div className={classes.navButtons}>
                    <button onClick={() => this.onPrevClick()}className={classes.prevButton}>Prev</button>
                    <button onClick={() => this.props.setShowStats(!this.props.showStats)}>{this.props.showStats ? 'Hide Stats' : 'Show Stats'}</button>
                    <button onClick={() => this.onNextClick()} className={classes.nextButton}>Next</button>
                </div>
            </div>
            );
        }
        return(
        <div>
            {res}
        </div>
        );
    }
};

export default withRouter(Cockpit);
