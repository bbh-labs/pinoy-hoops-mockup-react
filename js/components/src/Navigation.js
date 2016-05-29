'use strict'

import React from 'react';
import { Link } from 'react-router';

class Navigation extends React.Component {
    render() {
        return (
           <ul className='navigation'>
               <li className='nav-item'><Link to='/'><img src='images/logo_light.png' /></Link></li>
               <li className='nav-item'><Link to='/profile'><div className='menuprofile'><img src='images/profile.jpg' />Zac Ong</div></Link></li>
               <li className='nav-item'><Link to='/about'>About</Link></li>
               <li className='nav-item'><Link to='/add-hoop'>Add a hoop</Link></li>
               <li className='nav-item'><Link to='/activities'>Activity feed</Link></li>
           </ul>
        )
    }
}

module.exports = Navigation;
