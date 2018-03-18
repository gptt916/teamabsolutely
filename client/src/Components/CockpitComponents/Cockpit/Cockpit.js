import React, { Component } from 'react';
import classes from './Cockpit.css';
import thumbsDown from '../../../assets/thumbs_down.png';
import thumbsUp from '../../../assets/thumbs_up.png';
import { Progress } from 'reactstrap';
import axios from 'axios';

class Cockpit extends Component {
    state = {
        activeIndex: 0,
        items: [],
        votes: []
    }

    componentDidMount () {
        axios.get('items/getAll')
            .then(response => {
                console.log(response);
                const items = response.data.map(item => {
                    if (item.countNAY === 0 && item.countYAY === 0) {
                        item.yayPercent = 50;
                    }
                    else {
                        item.yayPercent = Math.round(((item.countYAY) / (item.countNAY + item.countYAY)) * 100)
                    }
                    return item;
                });
                this.setState({items: items});
            })
            .catch(error => {
                console.log(error);
            });
        
        axios.get('user/getAllUserVotes')
            .then(response => {
                console.log(response);
                this.setState({votes: response.data.votes});
            })
            .catch(error => {
                console.log(error);
            });
    }

    vote (val) {
        let vote = this.state.votes.find(vote => vote.itemId === this.state.items[this.state.activeIndex]._id);
        if (vote) {
            if (vote.voteYAY === val) {
                return;
            }
        }

        axios.post('items/rateItem', {voteYAY: val, itemId: this.state.items[this.state.activeIndex]._id})
            .then(response => {
                let items = [...this.state.items];
                let item = response.data;
                item.yayPercent = Math.round(((item.countYAY) / (item.countNAY + item.countYAY)) * 100)
                items[this.state.activeIndex] = item;
                let votes = [...this.state.votes];
                vote = votes.find(vote => vote.itemId === this.state.items[this.state.activeIndex]._id);
                vote.voteYAY = val;
                this.setState({items: items, votes: votes});
            })
            .catch(err => {
                window.alert("YOU MUST SIGN IN TO VOTE!");
            });
    }

    render () {
        let res = <h1 style={{color: 'white'}}>No images</h1>;
        if (this.state.items.length > 0) {
            
            var greyYAY = classes.notVoted;
            var greyNAY = classes.notVoted;

            if (this.state.votes.length > 0) {
                const vote = this.state.votes.find(vote => vote.itemId === this.state.items[this.state.activeIndex]._id);
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
                <h3 className={classes.imageTitle}>{this.state.items[this.state.activeIndex].title}</h3>
                <div className={classes.container}>
                    <img onClick={() => this.vote(false)} alt="thumbsDown" className={[classes.rateImg, greyNAY].join(' ')} src={thumbsDown}/>
                    <img alt="main" className={classes.mainImg} src={this.state.items[this.state.activeIndex].src}/>
                    <img onClick={() => this.vote(true)} alt="thumbsUp" className={[classes.rateImg, greyYAY].join(' ')} src={thumbsUp}/>
                </div>
                <Progress className={classes.progressBarContainer} multi>
                    <Progress className={[classes.progressBar, classes.progressBarText].join(' ')} bar color="danger" value={100 - this.state.items[this.state.activeIndex].yayPercent} max={100}>{100 - this.state.items[this.state.activeIndex].yayPercent}%</Progress>
                    <Progress className={[classes.progressBar, classes.progressBarText].join(' ')} bar value={this.state.items[this.state.activeIndex].yayPercent} max={100}>{this.state.items[this.state.activeIndex].yayPercent}%</Progress>
                </Progress>
                <div className={classes.navButtons}>
                    <button onClick={this.state.cockpitPrev}className={classes.prevButton}>Prev</button>
                    <button onClick={this.state.cockpitNext}className={classes.nextButton}>Next</button>
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

export default Cockpit;
