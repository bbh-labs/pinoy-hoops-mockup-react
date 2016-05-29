'use strict'

import React from 'react';
import { Link } from 'react-router';

class Story extends React.Component {
    render() {
        return (
            <div className='site-wrap'>
                 <div className='hoopstory'>
                    <div className='heroimage'>
                        <img src='images/dummy06.jpg' />
                        <h2>La Concordia</h2>
                    </div>
                    <div className='hoop-info'>
                        <div className='userprofile'>
                            <img src='images/matteo.jpg' />
                            <h6>Matteo</h6>
                        </div>
                        <div className='icons'>
                            <p>40 likes</p>
                            <img src='images/icon_love.png' />
                            <img src='images/icon_share.png' />
                        </div>
                        <div className='description'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec enim dolor, facilisis id interdum id, gravida eget lacus. Nam congue urna massa, sit amet rutrum ipsum pellentesque eu. Praesent et </p>
                        </div>
                    </div>
                    <hr/>
                    <div className='usercomment'>
                        <p>User Name and User Comment 01</p>
                        <p>User Name and User Comment 02</p>
                    </div>	
                    <div className='comment'>
                        <input placeholder='add a comment' type='text' /><button>Send</button>
                    </div> 	
                 </div>
            </div>
        )
    }
}

module.exports = Story;
