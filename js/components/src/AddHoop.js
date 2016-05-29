'use strict'

import React from 'react';
import { Link } from 'react-router';

import MapView from './MapView'

class AddHoop extends React.Component {
    render() {
        return (
            <div className='site-wrap'>
                 <div className='addhoop'>
                    <MapView />
                    <div className='content'>
                        <h3>Double tap on the map to add a hoop</h3>
                        <form>
                            <label>Hoop name: </label><input type='text' name='hname' /><br/>
                            <label>Hoop description: </label><textarea rows='6' cols='20' /><br/>
                            <label>Upload picture: </label><button>Select file</button><br/>
                        </form>
                    </div>
                    <div className='submit'>
                        <button>Cancel</button>
                        <button style={{ backgroundColor: '#ff6b00' }}>Save</button>
                    </div>
                 </div>
            </div>
        )
    }
}

module.exports = AddHoop;
