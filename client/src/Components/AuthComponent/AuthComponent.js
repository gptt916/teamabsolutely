import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import classes from './AuthComponent.css';

const cookies = new Cookies();

export default class AuthComponent extends Component {

    componentDidMount(){
        window.fbAsyncInit = function() {
            window.FB.init({
                appId   : '201716760590344',
                cookie  : true,
                xfbml   : true,
                version : 'v2.1'
            });

            window.FB.Event.subscribe('auth.statusChange', (response) => {
                if (response.authResponse) {
                    // TODO
                    console.log(response);
                    this.updateLoggedInState(response.authResponse.accessToken);
                } else {
                    // TODO
                    this.updateLoggedOutState()
                }
            });
        }.bind(this);

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);

        }(document, 'script', 'facebook-jssdk'));
    }

    updateLoggedInState(fbToken) {
        axios.post('auth/facebook', {"access_token": fbToken})
            .then(response => {
                console.log(response);
                cookies.set('access_token', response.data.token, { path: '/'});
                this.props.setLoggedIn(response.data.token)
            })
            .catch(err => {
                console.log(err);
            }
        );
    }

    render() {
        let header = <h5>Logged in</h5>;

        if (!this.props.isLoggedIn) {
            header = <div className="fb-login-button" scope="public_profile, email, user_hometown, user_location" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>;
        }
        return <div className={classes.authComponent}>{header}</div>;
    }
}
