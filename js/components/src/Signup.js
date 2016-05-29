'use strict'

import React from 'react';
import { Link } from 'react-router';

class Signup extends React.Component {
    render() {
        return (
            <div className='site-wrap'>
                 <div className='signup'>
                    <div className='logo'>
                        <Link to='/'><img src='images/logo_light.png' /></Link>
                        <p>The home of all things basketball</p>
                    </div>
                    <div className='signup-content'>
                        <form>
                            <label>First name: </label><input type='text' name='fname' /><br/>
                            <label>Last name: </label><input type='text' name='lname' /><br/>
                            <label>Email: </label><input type='text' name='email' /><br/>
                            <label>Age: </label><input type='text' name='age' /><br/>
                            <label>Gender: </label><input type='text' name='gender' /><br/>
                            <label>Upload picture: </label><button>Select file</button><br/>
                        </form>
                        <p>Already have an account? <Link to='/login'><span style={{ color: '#fff' }}>Login here</span></Link></p>
                    </div>
                 </div>
            </div>
        )
    }
}

module.exports = Signup;
