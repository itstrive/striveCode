import React from 'react'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import './App.css'

import Home from './Home/'
import About from './About/'
import List from './List/'

/*const BasicExample = () => (
	<Router>
		<div>
	      	<Route exact path="/" component={Home}/>
	      	<Route path="/about" component={About}/>
	      	<Route path="/list" component={List}/>
     	</div>
  	</Router>
)*/
const Change = ({
	match: {
		params
	}
}) => {
	if (params.h === 'about') {
		return (
			<div>
				<About />
			</div>
		)
	} else if (params.h === 'list') {
		return (
			<div>
				<List />
			</div>
		)
	} else {
		return (
			<div>
				<Home />
			</div>
		)
	}

}

class BasicExample extends React.Component {
	render() {
		return (
			<Router>
				<Route render={({location})=>{
					return (<div>
				      	<Route exact path="/" component={Home}/>
				      	<div>
							<ReactCSSTransitionGroup
								transitionName="fade"
					            transitionEnterTimeout={500}
					            transitionLeaveTimeout={1000}
					          >
					        	<Route
					              location={location}
					              key={location.key}
					              path="/:h"
					          component={Change}
					            />
					        </ReactCSSTransitionGroup>
				      	</div>
			     	</div>)
				}} />
		  	</Router>
		)
	}
}

export default BasicExample