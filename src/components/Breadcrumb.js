import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Breadcrumb extends Component {
    render() {
    	let path = (this.props.path) ? this.props.path : [];
        return (
    		<div className="p-grid">
    			<div className="p-col-12">
		    		<div className="p-breadcrumb p-component">
						<ul>
							<li className="p-breadcrumb-home"><Link to={ '/' } className="p-menuitem-link"><span className="pi pi-home"></span></Link></li>
							{
								path.map((val, key) => <React.Fragment key={ 'fragment'+key }>
												<li key={ 'label'+key } className="p-breadcrumb-chevron pi pi-chevron-right"></li>
												<li key={ key } role="menuitem" className="">
												{
													(val.url) ? 
															<Link to={ val.url } className="p-menuitem-link"><span className="p-menuitem-text">{ val.label }</span></Link> :
															<span className="p-menuitem-text">{ val.label }</span>
												}
												</li>
											</React.Fragment>	
			        			)
							}
						</ul>
					</div>
				</div>
			</div>
        );
    }
}

export default Breadcrumb;