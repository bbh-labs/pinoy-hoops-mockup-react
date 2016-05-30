'use strict'

import React from 'react'
import { Link, hashHistory } from 'react-router'

import API from './API'
import Dispatcher from './Dispatcher'

class Login extends React.Component {
    render() {
        return (
            <div className='site-wrap'>
                 <div className='login'>
                    <div className='logo'>
                        <Link to='/'><img src='images/logo_light.png' /></Link>
                    </div>
                    <form className='login-email'>
                        <h4>Login with email</h4>
                        <input type='email' placeholder='Email' name='email' /><br/>
                        <input type='password' placeholder='Password' name='password' /><br/>

                        <form method='POST' onSubmit={ this.submit }>
                            <label>Email: </label><input type='email' name='email' /><br/>
                            <label>Password: </label><input type='password' name='password' /><br/>
                            <button type='submit'>Login</button>
                        </form>
                        <p>Don&#39;t have an account? <Link to='/signup'><span style={{ color: '#fff' }}>Sign up here</span></Link></p>
                    </form>
                 </div>
            </div>
        )
    }
    submit(event) {
        event.preventDefault();

        API.login(new FormData(event.target), () => {
            alert('Successfully logged in!');
            Dispatcher.dispatch({ type: 'refresh-user', goto: '/map' });
        }, (response) => {
            alert(response.statusText + ': failed to log in!');
        });
    }
}

module.exports = Login;
