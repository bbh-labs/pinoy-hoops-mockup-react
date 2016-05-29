'use strict'

import React from 'react';
import { Link } from 'react-router';

class Hoop extends React.Component {
    render() {
        return (
            <div className='site-wrap'>
                 <div className='hoopstory'>
                    <div className='heroimage'>
                        <img src='images/dummy08.jpg' />
                        <h2>La Concordia</h2>
                    </div>
                    <div className='hoop-info'>
                        <div className='userprofile'>
                            <img src='images/zac.jpg' />
                            <h6>Zac Ong</h6>
                        </div>
                        <div className='icons'>
                            <img src='images/icon_share.png' />
                        </div>
                        <div className='description'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim dolor, facilisis id interdum id, gravida eget lacus. Nam congue urna massa, sit amet rutrum ipsum pellentesque eu. Praesent et </p>
                        </div>
                    </div>
                    <div className='filter'>
                        <p style={{ color: '#ff6b00' }}>Most Recent</p>
                        <p>Most Liked</p>
                    </div>
                    <div className='hoop-gallery'>
                        <li><img src='images/icon_plus.png' /></li>
                        <li><Link to='/story'><img src='images/dummy02.jpg' /></Link></li>
                        <li><img src='images/dummy03.jpg' /></li>	
                        <li><img src='images/dummy04.jpg' /></li>	
                        <li><img src='images/dummy05.jpg' /></li>	
                        <li><img src='images/dummy06.jpg' /></li>	
                        <li><img src='images/dummy07.jpg' /></li>	
                        <li><img src='images/dummy08.jpg' /></li>	
                        <li><img src='images/dummy09.jpg' /></li>	
                    </div> 	
                 </div>
            </div>
        )
    }
}

module.exports = Hoop;
