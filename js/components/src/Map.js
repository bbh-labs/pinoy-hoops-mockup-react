'use strict'

import React from 'react'
import { Link } from 'react-router'

import MapView from './MapView'

class Map extends React.Component {
    render() {
        return (
            <div className='site-wrap'>
                <MapView />
                 <div className='map-btn'>
                    <div className='bottom-left'>
                        <img src='images/search.jpg' />
                    </div>
                    <div className='bottom-right'>
                        <img src='images/location.jpg' />
                    </div>
                </div>
            </div>
        )
    }
}

module.exports = Map;
