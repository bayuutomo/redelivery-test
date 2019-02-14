import React, { Component } from 'react';
import { isLoggedIn } from './services/AuthService';
import Login from './routers/Login.router';
import MainLayout from './layouts/MainLayout';

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './assets/css/layout.css';
import './assets/css/custom.css';
import './App.css';

class App extends Component {
  render() {
    return (
	    <React.Fragment>
			{
	            isLoggedIn() ? <MainLayout/> : <Login/>
	        }
		</React.Fragment>
    );
  }
}

export default App;