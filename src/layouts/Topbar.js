import React, {Component} from 'react';
import { logout } from '../services/AuthService';
import PropTypes from 'prop-types';

class Layout extends Component {

    static defaultProps = {
        onToggleMenu: null
    }

    static propTypes = {
        onToggleMenu: PropTypes.func.isRequired
    }

	render() {
		return (
			<div className="layout-topbar clearfix">
                <a className="layout-menu-button" onClick={this.props.onToggleMenu} href="/#">
                    <span className="pi pi-bars"/>
                </a>
                <div className="layout-topbar-icons">
                	<a href="/#" onClick={(e) => {e.preventDefault(); if (window.confirm('Are you sure want to sign out?')) logout();}} title="Logout">
				        <span className="layout-topbar-item-text">Sign Out</span>
                        <span className="layout-topbar-icon pi pi-sign-out"/>
                    </a>
                </div>
            </div>
        )
	}
}

export default Layout;