import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from '../pages/login/Index';

const Router = () => (
	<Switch>
		<Route exact path='/' component={Login}/>
		{/*Default route when not defined here*/}
		<Route component={Login}/>
	</Switch>
);

export default Router;