import React, { Component } from 'react';
import { connect } from 'react-redux';

import Cockpit from '../CockpitComponents/Cockpit/Cockpit';
import StatsCockpit from '../CockpitComponents/StatsCockpit/StatsCockpit';
import Sidebar from '../SidebarComponents/Sidebar/Sidebar';
import { withRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import * as actionTypes from '../../Stores/actions/actions';
import './MainComponent.css';


const styles = {
    sideBar:{
		width: '255px',
		backgroundColor:'whitesmoke',
		height:'100%',
	},
	cockPit:{
        backgroundColor:'#29303B'
	},
    main:{
        backgroundColor:'#29303B'
    },
    privacy: {
        color: 'white'
    }
}

class MainComponent extends Component {
    render() {
        let cockpit = null;
        if (this.props.showStats) {
            cockpit = <StatsCockpit
            setShowStats={this.props.setShowStats}
            item={this.props.items[this.props.activeIndex]}/>
        }
        else {
            cockpit = <Cockpit
            items={this.props.items}
            votes={this.props.votes}
            activeIndex={this.props.activeIndex}
            getAllItems={this.props.getAllItems}
            setActiveIndex={this.props.setActiveIndex}
            castVote={this.props.castVote}
            getVotes={this.props.getVotes}
            showStats={this.props.showStats}
            setShowStats={this.props.setShowStats}
            />
        }

        let privacy = <p style={styles.privacy}>At YayOrNay Inc. we consider the privacy of our visitors to be extremely important. This privacy policy document describes in detail the types of personal information is collected and recorded by YayOrNay and how we use it.
        Log Files
        Like many other Web sites, YayOrNay makes use of log files. These files merely logs visitors to the site - usually a standard procedure for hosting companies and a part of hosting services's analytics. The information inside the log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and possibly the number of clicks. This information is used to analyze trends, administer the site, track user's movement around the site, and gather demographic information. IP addresses, and other such information are not linked to any information that is personally identifiable.
        Cookies and Web Beacons
        YayOrNay uses cookies to store information about visitors' preferences, to record user-specific information on which pages the site visitor accesses or visits, and to personalize or customize our web page content based upon visitors' browser type or other information that the visitor sends via their browser.
        DoubleClick DART Cookie
        → Google, as a third party vendor, uses cookies to serve ads on YayOrNay.
        → Google's use of the DART cookie enables it to serve ads to our site's visitors based upon their visit to YayOrNay and other sites on the Internet. 
        → Users may opt out of the use of the DART cookie by visiting the Google ad and content network privacy policy at the following URL - http://www.google.com/privacy_ads.html
        Our Advertising Partners
        Some of our advertising partners may use cookies and web beacons on our site. Our advertising partners include ....... 
            - Google
        While each of these advertising partners has their own Privacy Policy for their site, an updated and hyperlinked resource is maintained here: Privacy Policies.
        You may consult this listing to find the privacy policy for each of the advertising partners of YayOrNay.
        These third-party ad servers or ad networks use technology in their respective advertisements and links that appear on YayOrNay and which are sent directly to your browser. They automatically receive your IP address when this occurs. Other technologies (such as cookies, JavaScript, or Web Beacons) may also be used by our site's third-party ad networks to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on the site.
        YayOrNay has no access to or control over these cookies that are used by third-party advertisers.
        Third Party Privacy Policies
        You should consult the respective privacy policies of these third-party ad servers for more detailed information on their practices as well as for instructions about how to opt-out of certain practices. YayOrNay's privacy policy does not apply to, and we cannot control the activities of, such other advertisers or web sites. You may find a comprehensive listing of these privacy policies and their links here: Privacy Policy Links.
        If you wish to disable cookies, you may do so through your individual browser options. More detailed information about cookie management with specific web browsers can be found at the browsers' respective websites. What Are Cookies?
        Children's Information
        We believe it is important to provide added protection for children online. We encourage parents and guardians to spend time online with their children to observe, participate in and/or monitor and guide their online activity. YayOrNay does not knowingly collect any personally identifiable information from children under the age of 13. If a parent or guardian believes that YayOrNay has in its database the personally-identifiable information of a child under the age of 13, please contact us immediately (using the contact in the first paragraph) and we will use our best efforts to promptly remove such information from our records.
        Online Privacy Policy Only
        This privacy policy applies only to our online activities and is valid for visitors to our website and regarding information shared and/or collected there. This policy does not apply to any information collected offline or via channels other than this website.
        Consent
        By using our website, you hereby consent to our privacy policy and agree to its terms.
        Privacy Policy Online Approved Site
        Update
        This Privacy Policy was last updated on: Tuesday, November 28th, 2017.
        Should we update, amend or make any changes to our privacy policy, those changes will be posted here.</p>;

    let tos = (<div><h2 style={styles.privacy}>TERMS AND CONDITIONS</h2><ol style={styles.privacy}><li style={styles.privacy}><strong>Introduction</strong></li></ol><p style={styles.privacy}>These Website Standard Terms and Conditions written on this webpage shall manage your use of this website. These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.</p><p style={styles.privacy}>Minors or people below 18 years old are not allowed to use this Website.</p><ol start="2"><li style={styles.privacy}><strong>Intellectual Property Rights</strong></li></ol><p style={styles.privacy}>Other than the content you own, under these Terms, YayOrNay and/or its licensors own all the intellectual property rights and materials contained in this Website.</p><p>You are granted limited license only for purposes of viewing the material contained on this Website.</p><ol start="3"><li><strong>Restrictions</strong></li></ol><p style={styles.privacy}>You are specifically restricted from all of the following</p><ul><li style={styles.privacy}>publishing any Website material in any other media;</li><li style={styles.privacy}>selling, sublicensing and/or otherwise commercializing any Website material;</li><li>publicly performing and/or showing any Website material;</li><li>using this Website in any way that is or may be damaging to this Website;</li><li>using this Website in any way that impacts user access to this Website;</li><li>using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;</li><li>engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;</li><li>using this Website to engage in any advertising or marketing.</li></ul><p>Certain areas of this Website are restricted from being access by you and YayOrNay may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.</p><ol start="4"><li><strong>Your Content</strong></li></ol><p>In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant YayOrNay a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.</p><p>Your Content must be your own and must not be invading any third-party’s rights. YayOrNay reserves the right to remove any of Your Content from this Website at any time without notice.</p><ol start="5"><li><strong>No warranties</strong></li></ol><p>This Website is provided “as is,” with all faults, and YayOrNay express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.</p><ol start="6"><li><strong>Limitation of liability</strong></li></ol><p>In no event shall YayOrNay, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. &nbsp;YayOrNay, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.</p><ol start="7"><li><strong>Indemnification</strong></li></ol><p>You hereby indemnify to the fullest extent YayOrNay from and against any and/or all liabilities, costs, demands, causes of action, damages and expenses arising in any way related to your breach of any of the provisions of these Terms.</p><ol start="8"><li><strong>Severability</strong></li></ol><p>If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.</p><ol start="9"><li><strong>Variation of Terms</strong></li></ol><p>YayOrNay is permitted to revise these Terms at any time as it sees fit, and by using this Website you are expected to review these Terms on a regular basis.</p><ol start="10"><li><strong>Assignment</strong></li></ol><p>The YayOrNay is allowed to assign, transfer, and subcontract its rights and/or obligations under these Terms without any notification. However, you are not allowed to assign, transfer, or subcontract any of your rights and/or obligations under these Terms.</p><ol start="11"><li><strong>Entire Agreement</strong></li></ol><p>These Terms constitute the entire agreement between YayOrNay and you in relation to your use of this Website, and supersede all prior agreements and understandings.</p><ol start="12"><li><strong>Governing Law &amp; Jurisdiction</strong></li></ol><p>These Terms will be governed by and interpreted in accordance with the laws of the State of Ontario, and you submit to the non-exclusive jurisdiction of the state and federal courts located in Ontario for the resolution of any disputes.</p><p>These terms and conditions have been generated at <a href="https://termsandcondiitionssample.com/" target="_blank">Terms And Conditions Sample.com</a>.</p></div>);

        return (
        <main style={styles.main}>
            <div style={styles.sideBar}>
                <Sidebar
                trendingItems={this.props.trendingItems}
                getTrendingItems={this.props.getTrendingItems}
                onSearchInput={this.props.onSearchInput}
                handleSubmit={this.props.searchForItem}
                searchQueryValue={this.props.searchQuery}
                getAllItems={this.props.getAllItems}
                />
            </div>
            <div style={styles.cockPit}>
            <Switch>
                <Route exact path='/privacy' render={() => privacy}/>
                <Route exact path='/tos' render={() => tos}/>
                <Route exact path='/' render={() => cockpit}/>
                <Route exact path='/:id' render={() => cockpit}/>
            </Switch>
            </div>
        </main>
        )}
}

const mapStateToProps = state => {
    return {
        items: state.main.items,
        trendingItems: state.main.trendingItems,
        votes: state.main.votes,
        activeIndex: state.main.activeIndex,
        searchQuery: state.main.searchFieldValue,
        showStats: state.main.showStats
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getAllItems: () => dispatch(actionTypes.fetchItems()),
        getTrendingItems: () => dispatch(actionTypes.fetchTrendingItems()),
        setActiveIndex: (newIndex) => dispatch({type: actionTypes.SET_ACTIVE_INDEX, newIndex: newIndex}),
        getVotes: () => dispatch(actionTypes.fetchVotes()),
        castVote: (val, itemId) => dispatch(actionTypes.postVote(val, itemId)),
        updateActiveIndex: (itemId) => dispatch({type: actionTypes.UPDATE_ACTIVE_INDEX, itemId: itemId}),
        searchForItem: (query) => dispatch(actionTypes.fetchQueryItems(query)),
        onSearchInput: (value) => dispatch({type: actionTypes.HANDLE_INPUT, newValue: value}),
        setShowStats: (value) => dispatch({type: actionTypes.SET_SHOW_STATS, flag: value})
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));
