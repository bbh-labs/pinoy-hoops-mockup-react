'use strict'

import $ from 'jquery'
import React from 'react'
import { Link } from 'react-router'

class Home extends React.Component {
    render() {
        return (
			<section className='landingpage'>
				<div id='slideshow'>
				   <div>
				     <img src='images/landingpage/dummy01.jpg' />
				   </div>
				   <div>
				     <img src='images/landingpage/dummy02.jpg' />
				   </div>
				</div>

				<div className='logo'>
					<Link to='/'><img src='images/logo_light.png' className='img-responsive' /></Link>
					<p>The home of all things basketball</p>
					<button>Enter</button>
				</div>
			</section>
        )
    }
    componentDidMount() {
        $("#slideshow > div:gt(0)").hide();

        this.intervalID = setInterval(function() {
            $('#slideshow > div:first')
                .fadeOut(1000)
                .next()
                .fadeIn(1000)
                .end()
                .appendTo('#slideshow');
        }, 5000);
    }
    componentWillUnmount() {
        clearInterval(this.intervalID);
    }
}

module.exports = Home;
