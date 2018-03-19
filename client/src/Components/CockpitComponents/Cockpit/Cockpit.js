import React, { Component } from 'react';
import classes from './Cockpit.css';
import thumbsDown from '../../../assets/thumbs_down.png';
import thumbsUp from '../../../assets/thumbs_up.png';
import { Progress } from 'reactstrap';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class Cockpit extends Component {
    state = {
        activeIndex: 0,
        items: [],
        votes: []
    }


    componentDidMount () {
        axios.get('items/getAll')
            .then(response => {
                const items = response.data.map(item => {
                    if (item.countNAY === 0 && item.countYAY === 0) {
                        item.yayPercent = 50;
                    }
                    else {
                        item.yayPercent = Math.round(((item.countYAY) / (item.countNAY + item.countYAY)) * 100)
                    }
                    return item;
                });

                var currIndex = 0;
                if (this.props.match && this.props.match.params.id) {
                    currIndex = items.map((item) => item._id).indexOf(this.props.match.params.id);
                }
                this.setState({items: items, activeIndex: currIndex >= 0 ? currIndex : 0});
            })
            .catch(error => {
                console.log(error);
            });
        
        axios.get('user/getAllUserVotes')
            .then(response => {
                this.setState({votes: response.data.votes});
            })
            .catch(error => {
                console.log(error);
            });
    }

    componentWillReceiveProps() {
        var currIndex = 0;
        if (this.props.history && this.props.history.location.pathname) {
            currIndex = this.state.items.map((item) => item._id).indexOf(this.props.history.location.pathname.substring(1));
        }
        this.setState({activeIndex: currIndex >= 0 ? currIndex : 0});
    }

    componentDidUpdate() {
        //console.log(this.props);
    }

    onNextClick() {
        const newIndex = this.state.activeIndex === this.state.items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.props.history.push('/' + this.state.items[newIndex]._id);
        this.setState({activeIndex: newIndex});
    }

    onPrevClick() {
        const newIndex = this.state.activeIndex === 0 ? this.state.items.length - 1 : this.state.activeIndex - 1;
        this.props.history.push('/' + this.state.items[newIndex]._id);
        this.setState({activeIndex: newIndex});
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
                if (item.countNAY === 0 && item.countYAY === 0) {
                    item.yayPercent = 50;
                }
                else {
                    item.yayPercent = Math.round(((item.countYAY) / (item.countNAY + item.countYAY)) * 100)
                }

                items[this.state.activeIndex] = item;
                let votes = [...this.state.votes];
                vote = votes.find(vote => vote.itemId === this.state.items[this.state.activeIndex]._id);
                if (!vote) {
                    vote = {itemId: this.state.items[this.state.activeIndex]._id, voteYAY: val};
                    votes.push(vote);
                }
                else {
                    vote.voteYAY = val;
                }
                this.setState({items: items, votes: votes});
            })
            .catch(err => {
                console.log(err);
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
                <h3 className={classes.imageTitle}>{this.state.items[this.state.activeIndex].name}</h3>
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
                    <button onClick={() => this.onPrevClick()}className={classes.prevButton}>Prev</button>
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
