import React, { Component } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { showErrorMessage } from '../../helper/BaseHelper';
import { login } from '../../services/AuthService';
import Loader from '../../components/Loader';

class Layout extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: false,
			data_input : {}
		}
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	componentDidMount() {
		document.title = 'Login - Redelivery App';
	}
	
	handleValidation(input) {
        let message = {};
        let status = true;
        
        //username
        if (!input.username) {
        	message['username'] = 'Username is required';
        } else if (!input.username.match(/^[a-zA-Z]+$/)) {
        	message['username'] = 'No special characters allowed';
        } else if (input.username.length > 30) {
        	message['username'] = 'Maximum 30 characters';
        }
        
        //password
        if (!input.password) {
        	message['password'] = 'Password is required';
        } else if (input.password.length > 30) {
        	message['password'] = 'Maximum 30 characters';
        }
        
        if (Object.getOwnPropertyNames(message).length > 0) {
            status = false;
        }
        
        showErrorMessage(message);
        
        return status;
    }
	
	handleChange(e) {
		let dataInput = this.state.data_input;
		dataInput[e.target.name] = e.target.value;
		this.setState({data_input : dataInput});
    }
    
    handleSubmit(e) {
    	e.preventDefault();
    	
    	//start loader
        this.setState({ loading: true });
    	
        if (this.handleValidation(this.state.data_input)) {
    		login(this.state.data_input);
    	} else {
    		//stop loader
        	this.setState({ loading: false });
    	}
    }
	
	render() {
		const { loading } = this.state;
		return (
				<div className="layout-wrapper layout-static layout-static-sidebar-inactive">
					<div className="layout-main">
						<div className="p-grid p-fluid">
							<div className="p-col-12 p-lg-6 p-lg-offset-3">
								<form className="position-relative" onSubmit={ this.handleSubmit } autoComplete="false">
									<Loader value={loading} />
									<div className="card card-w-title">
										<h1>Please sign in</h1>
										<div className="p-grid">
											<div className="p-col-12 p-md-8 p-md-offset-2">
												<InputText type="text" id="username" name="username" placeholder="Username" maxLength="30" onChange={this.handleChange} />
											</div>
											<div className="p-col-12 p-md-8 p-md-offset-2">
												<InputText type="password" id="password" name="password" placeholder="Password" maxLength="30" onChange={this.handleChange} />
											</div>
											<div className="p-col-12 p-md-8 p-md-offset-2">
												<Button label="Sign in" />
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
        )
	}
}

export default Layout;