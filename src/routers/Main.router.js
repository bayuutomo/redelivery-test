import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/home/Index';
import Routers from "./Routers";

class Router extends Component {
	render() {
		return (
				<Switch>
				{/*<Route exact path='/' component={Home}/>*/}
				<Route
				  exact path='/'
				  render={(props) => <Home {...props} onBreadcrumbChange={this.props.onBreadcrumbChange} />}
				/>
				
				{/*Excluded routes*/}

		        {/*Default route when not defined here*/}
				{/*<Route component={Routers}/>*/}
				<Route
				  render={(props) => <Routers {...props} onBreadcrumbChange={this.props.onBreadcrumbChange} />}
				/>
			</Switch>
		)
	}
}
	
export default Router;