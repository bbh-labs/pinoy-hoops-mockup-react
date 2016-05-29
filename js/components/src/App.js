'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import About from './About'
import Activities from './Activities'
import AddHoop from './AddHoop'
import Home from './Home'
import Hoop from './Hoop'
import Login from './Login'
import Map from './Map'
import Navigation from './Navigation'
import Profile from './Profile'
import Signup from './Signup'
import Story from './Story'

class App extends React.Component {
    render() {
        return (
            <div id='app'>
                <Navigation />
                <input type='checkbox' id='nav-trigger' className='nav-trigger' />
                <label htmlFor='nav-trigger'></label>
                { this.props.children }
            </div>
        )
    }
}

ReactDOM.render((
    <Router history={ hashHistory }>
        <Route path='/' component={ App }>
            <IndexRoute component={ Home } />
            <Route path='/about' component={ About } />
            <Route path='/activities' component={ Activities } />
            <Route path='/add-hoop' component={ AddHoop } />
            <Route path='/hoop' component={ Hoop } />
            <Route path='/login' component={ Login } />
            <Route path='/map' component={ Map } />
            <Route path='/profile' component={ Profile } />
            <Route path='/signup' component={ Signup } />
            <Route path='/story' component={ Story } />
        </Route>
    </Router>
), document.getElementById('root'));
