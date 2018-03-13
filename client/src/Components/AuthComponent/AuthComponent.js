import React, { Component } from 'react';

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
                    this.updateLoggedInState(response)
                } else {
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

    render() {
        return (
            <div className="fb-login-button" data-max-rows="1" data-size="large" data-button-type="continue_with" data-show-faces="false" data-auto-logout-link="false" data-use-continue-as="false"></div>
        );
    }
}
