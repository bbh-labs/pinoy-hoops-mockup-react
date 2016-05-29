'use strict'

import React from 'react';
import { Link } from 'react-router';

class Profile extends React.Component {
    render() {
        return (
            <div className='site-wrap'>
                 <div className='profile'>
                    <div className='picture'>
                        <img src='images/zac.jpg' />
                    </div>
                    <div className='info'>
                        <h3>Zac Ong</h3>
                        <p>24, Male</p>
                        <button>Edit Profile</button>
                    </div>

                    <div className='myhoops'>
                        <div className='filter'>
                            <p style={{ color: '#ff6b00' }}>My hoops</p>
                            <p>Other hoops</p>
                        </div>
                        <div className='gallery'>
                            <img src='images/dummy01.jpg' />
                            <img src='images/dummy02.jpg' />
                            <img src='images/dummy03.jpg' />
                            <img src='images/dummy04.jpg' />
                            <img src='images/dummy05.jpg' />
                            <img src='images/dummy06.jpg' />
                            <img src='images/dummy07.jpg' />
                            <img src='images/dummy08.jpg' />
                            <img src='images/dummy09.jpg' />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Profile;
