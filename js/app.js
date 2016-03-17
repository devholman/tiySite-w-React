// es5, 6, and 7 polyfills, powered by babel
import polyfill from "babel-polyfill"

//
// fetch method, returns es6 promises
// if you uncomment 'universal-utils' below, you can comment out this line
import fetch from "isomorphic-fetch"

// universal utils: cache, fetch, store, resource, fetcher, router, vdom, etc
// import * as u from 'universal-utils'

// the following line, if uncommented, will enable browserify to push
// a changed fn to you, with source maps (reverse map from compiled
// code line # to source code line #), in realtime via websockets
// -- browserify-hmr having install issues right now
// if (module.hot) {
//     module.hot.accept()
//     module.hot.dispose(() => {
//         app()
//     })
// }

import DOM from 'react-dom'
import React, {Component} from 'react'

function app() {
	var AppView = React.createClass({
		render: function(){
			return(
				<div className= "pageContainer">
					<HeaderNLogo/>
					<TiyStamp/>
					<div className="content-container">
						<Updates/>
						<BlogInfo/>
					</div>
					<FixedBox/>
				</div>
			)
		}
	})

	var HeaderNLogo = React.createClass({
		render: function(){
			return(
				<div className="headerContainer">
					<img src="http://magentanova.github.io/html-intro-1/images/houston.jpg"/>
				</div>
			)
		}
	})

	var Updates = React.createClass({
		render: function(){
			return(
				<div className="left-col-container">
					<div className="happenings-title">
						<h4>The Iron Yard | Houston</h4>
						<h5> Happenings and updates from the Iron Yard Houston, TX </h5>
					</div>
					<div className="search-div">
						<h4>SEARCH</h4>
						<input className="searchbox" placeholder="search keywords"/>

					</div>
				</div>
			)
		}
	})

	var BlogInfo = React.createClass({
		render: function(){
			return(
				<div className="right-col-container">
					<div className="blog-title">
						<h4>September 22 starts a new Class of the Iron Yard Houston Students</h4>
						<h5>by Brian Dorton</h5>
					</div>
					<div className="blog-img">
						<img src="http://magentanova.github.io/html-intro-1/images/classroom.jpg"/>
					</div>
					<div className="blog-description">
						<p>    unicorn experimental human-centered design entrepreneur etc...Horned humans have a rich background in myth. Also, from the horns of Alexander to the horns of Moses many important figures have been purported to possess horns. While in these cases the horns were a matter of misinterpretation or illusion, many notable naturalists and medical scholars have recorded occurrences of genuine horned humans. While technically not horns, human beings have been known to sprout horn-like outgrowths and many of these outgrowths have been located on the head. The earliest reliable account can be found in the report of German surgeon Fabricius Hildanus. In the late 1500’s he encountered a man with horns protruding from his forehead. Several other cases have been well documented by noted naturalists and medical experts. In his book Anatomicae Institutiones Corporis Humani Dutch naturalist Bartholinus mentions a patient with a horn measuring 12 inches and in 1696 there was a well know case involving an old woman in France who had her amputated 12 inch horn presented to the King.</p>
					</div>
				</div>
			)
		}
	})

	var FixedBox = React.createClass({
		render: function(){
			return(
				<div className="tiy-houston-box">
				
					<div className="fixed-title">
						<p>Never Miss a Post!</p>
					</div>

					<div className="logo-follow">

						<img src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"/>
						

						<div className="fixed-name">
							<h6>tiyhouston</h6>
							<p>The Iron Yard | Houston</p>
						</div>
						<button>+ Follow</button>
					</div>
				</div>
			)
		}
	})

	var TiyStamp = React.createClass({
		render: function(){
			return(
				<img id="tiyStamp" src="http://magentanova.github.io/html-intro-1/images/ironyardlogo.png"/>
			)
		}
	})
    // start app
    // new Router()
    DOM.render(<AppView/>, document.querySelector('.container'))
}

app()
