'use strict'

import React from 'react';
import { Link } from 'react-router';

class Activities extends React.Component {
    render() {
        return (
            <div className='site-wrap'>
                 <div className='activities'>
                    <ul>
                        <Activity />
                        <Activity />
                        <Activity />
                        <Activity />
                        <Activity />
                        <Activity />
                    </ul>
                 </div>
            </div>
        )
    }
}

class Activity extends React.Component {
    render() {
        return (
            <li>
                <div className='userprofile'>
                    <span className='left'><img src='images/zac.jpg' /></span>
                </div>
                <div className='userfeeds'>
                    <p>Activity data</p>
                </div>
                <div className='userstory'>
                    <span className='right'><img src='images/dummy06.jpg' /></span>
                </div>
            </li>
        )
    }
}

module.exports = Activities;
