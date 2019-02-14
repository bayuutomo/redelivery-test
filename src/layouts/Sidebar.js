import React, { Component } from 'react';
import {ScrollPanel} from 'primereact/components/scrollpanel/ScrollPanel';
import logo from '../assets/img/logo.png';
import MenuList from '../config/MenuList';
import { Menu } from './Menu';

class Layout extends Component {
	render() {
		return (
			<div ref={(el) => this.sidebar = el} className="layout-sidebar layout-sidebar-dark" onClick={this.props.onSidebarClick}>
				<ScrollPanel style={{height:'100%'}}>
					<div className="layout-sidebar-scroll-content" >
						<div className="layout-logo">
							<img alt="Logo" src={logo} height="50"/>
						</div>
						{/*<AppInlineProfile />*/}
						<Menu model={ MenuList } onMenuItemClick={this.props.onMenuItemClick} />
					</div>
				</ScrollPanel>
			</div>
		)
	}
}

export default Layout;