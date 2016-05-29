'use strict'

import React from 'react';
import { Link } from 'react-router';

class Login extends React.Component {
    render() {
        return (
            <div className='site-wrap'>
                 <div className='login'>
                    <div className='logo'>
                        <Link to='/'><img src='images/logo_light.png' /></Link>
                        <p>The home of all things basketball</p>
                    </div>
                    <div className='login-content'>
                        <Link to='/hoop'><button style={{ backgroundColor: '#3c5a99' }}>Login with Facebook</button></Link>
                        <a href='#'><button style={{ backgroundColor: '#00abf1' }}>Login with Twitter</button></a>
                        <a href='#'><button style={{ backgroundColor: '#ff6b00' }}>Login with Email</button></a>
                        <p>Don&#39;t have an account? <Link to='/signup'><span style={{ color: '#fff' }}>Sign up here</span></Link></p>
                    </div>
                 </div>
            </div>
        )
    }
}

module.exports = Login;
