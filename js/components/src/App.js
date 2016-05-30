'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import Dispatcher from './Dispatcher';
import API from './API';

import About from './About'
import Activities from './Activities'
import AddHoop from './AddHoop'
import Home from './Home'
import Hoop from './Hoop'
import Login from './Login'
import Map from './Map'
import Navigation from './Navigation'
import Profile from './Profile'
import Share from './Share'
import Signup from './Signup'
import SocialLogin from './SocialLogin'
import Story from './Story'

class App extends React.Component {
    render() {
        let showNavigation = true;

        if (this.props.location.pathname == '/') {
            showNavigation = false;
        }

        return (
            <div id='app'>
                { showNavigation ? <Navigation { ...this.state } /> : null }
                { showNavigation ? <input type='checkbox' id='nav-trigger' className='nav-trigger' /> : null }
                { showNavigation ? <label htmlFor='nav-trigger'></label> : null }
                { this.props.children && React.cloneElement(this.props.children, this.state) }
            </div>
        )
    }
    state = {
        user: null,
    }
    componentDidMount() {
        this.checkLoggedIn();

        this.dispatcherID = Dispatcher.register((payload) => {
            switch (payload.type) {
            case 'refresh-user':
                this.checkLoggedIn();

                if (payload.goto)
                    hashHistory.replace(payload.goto);

                break;
            }
        });
    }
    checkLoggedIn() {
        API.isLoggedIn((user) => {
            this.setState({ user: user });
        }, () => {
            this.setState({ user: null });
        });
    }
}

ReactDOM.render((
    <Router history={ hashHistory }>
        <Route path='/' component={ App }>
            <IndexRoute component={ Home } />
            <Route path='/about' component={ About } />
            <Route path='/activities' component={ Activities } />
            <Route path='/add-hoop' component={ AddHoop } />
            <Route path='/hoop/:hoopID' component={ Hoop } />
            <Route path='/social-login' component={ SocialLogin } />
            <Route path='/login' component={ Login } />
            <Route path='/map' component={ Map } />
            <Route path='/profile' component={ Profile } />
            <Route path='/signup' component={ Signup } />
            <Route path='/story/:storyID' component={ Story } />
            <Route path='/story/:storyID/share' component={ Share } />
        </Route>
    </Router>
), document.getElementById('root'));
