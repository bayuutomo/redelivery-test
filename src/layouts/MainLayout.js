import React, { Component } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import classNames from 'classnames';
import MainRouter from '../routers/Main.router';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

class Layout extends Component {
	constructor() {
        super();
        this.state = {
            layoutMode: 'static',
            staticMenuInactive: false,
            overlayMenuActive: false,
            mobileMenuActive: false,
            breadcrumdItems: []
        };
        this.onWrapperClick = this.onWrapperClick.bind(this);
        this.onToggleMenu = this.onToggleMenu.bind(this);
        this.onSidebarClick = this.onSidebarClick.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.onBreadcrumbChange = this.onBreadcrumbChange.bind(this);
    }
	
	onWrapperClick(event) {
        if (!this.menuClick) {
            this.setState({
                overlayMenuActive: false,
                mobileMenuActive: false
            });
        }

        this.menuClick = false;
    }
	
	onToggleMenu(event) {
        this.menuClick = true;

        if (this.isDesktop()) {
            if (this.state.layoutMode === 'overlay') {
                this.setState({
                    overlayMenuActive: !this.state.overlayMenuActive
                });
            }
            else if (this.state.layoutMode === 'static') {
                this.setState({
                    staticMenuInactive: !this.state.staticMenuInactive
                });
            }
        }
        else {
            const mobileMenuActive = this.state.mobileMenuActive;
            this.setState({
                mobileMenuActive: !mobileMenuActive
            });
        }
       
        event.preventDefault();
    }
	
	onSidebarClick(event) {
        this.menuClick = true;
    }
	
	onMenuItemClick(event) {
        if(!event.item.items) {
            this.setState({
                overlayMenuActive: false,
                mobileMenuActive: false
            })
        }
    }
	
	addClass(element, className) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }

    removeClass(element, className) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
    
	isDesktop() {
        return window.innerWidth > 1024;
    }
	
	onBreadcrumbChange(datas) {
        this.setState({
        	breadcrumdItems: datas
        });
    }
	
	componentDidUpdate() {
        if (this.state.mobileMenuActive)
            this.addClass(document.body, 'body-overflow-hidden');
        else
            this.removeClass(document.body, 'body-overflow-hidden');
    }
	
	render() {
		let wrapperClass = classNames('layout-wrapper', {
            'layout-overlay': this.state.layoutMode === 'overlay',
            'layout-static': this.state.layoutMode === 'static',
            'layout-static-sidebar-inactive': this.state.staticMenuInactive && this.state.layoutMode === 'static',
            'layout-overlay-sidebar-active': this.state.overlayMenuActive && this.state.layoutMode === 'overlay',
            'layout-mobile-sidebar-active': this.state.mobileMenuActive
        });
		
		return(
			<div className={wrapperClass} onClick={this.onWrapperClick}>
				
				<Topbar onToggleMenu={this.onToggleMenu}/>
				
				<Sidebar onSidebarClick={this.onSidebarClick} onMenuItemClick={this.onMenuItemClick}/>
				
				<div className="layout-main">
            		
    				<Breadcrumb path={this.state.breadcrumdItems} />
                	
    				<MainRouter onBreadcrumbChange={this.onBreadcrumbChange}/>
				
    			</div>
				
				<Footer/>
				
				<div className="layout-mask"></div>
			</div>
        )
	}
}

export default Layout;