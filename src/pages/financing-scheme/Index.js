import React, { Component } from 'react';
import { Button } from 'primereact/button';
//import { PostRequest } from '../../services/RequestService';
import Loader from '../../components/Loader';

class Layout extends Component {
	constructor() {
        super();
        this.state = {
        	text_result: [],
        	file_result: [],
    		loading: false,
            breadcrumdItems: [
            	{label:'Master Data'},
                {label:'Financing Scheme', url: '/financing-scheme'}
            ]
        }
    }
	
	componentDidMount() {
		document.title = 'Financing Scheme - Redelivery App';
		this.props.onBreadcrumbChange(this.state.breadcrumdItems);
	}
	
	render() {
		const { loading, text_result, file_result } = this.state;
		
		return(
			<div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                    	<h1>Financing Scheme</h1>
                        <div className="p-datatable p-component p-datatable-responsive">
                        	<div className="p-datatable-tablewrapper">
                        		<table>
                        			<thead className="p-datatable-thead">
                        				<tr>
                        					<th><span className="p-column-title">Code</span></th>
                        					<th><span className="p-column-title">Name</span></th>
                        					<th><span className="p-column-title">Action</span></th>
                        				</tr>
                        			</thead>
                        			<tbody className="p-datatable-tbody">
                        				<tr>
                        					<td><span className="p-column-title">Code</span>OPL</td>
                        					<td><span className="p-column-title">Name</span>Operating Lease</td>
                        					<td><span className="p-column-title">Action</span><Button icon="pi pi-pencil" />&nbsp;<Button icon="pi pi-trash" className="p-button-danger" /></td>
                        				</tr>
                        			</tbody>
                        		</table>
                        	</div>
                        	<div className="p-paginator p-component p-unselectable-text p-paginator-bottom">
                        		<a href="/#" className="p-paginator-first p-paginator-element p-disabled" tabIndex="-1"><span className="p-paginator-icon pi pi-step-backward"></span></a>
                        		<a href="/#" className="p-paginator-prev p-paginator-element p-disabled" tabIndex="-1"><span className="p-paginator-icon pi pi-caret-left"></span></a>
                        		<span className="p-paginator-pages">
                        			<a href="/#" className="p-paginator-page p-paginator-element p-highlight">1</a>
                        			<a href="/#" className="p-paginator-page p-paginator-element">2</a>
                        			<a href="/#" className="p-paginator-page p-paginator-element">3</a>
                        			<a href="/#" className="p-paginator-page p-paginator-element">4</a>
                        		</span>
                        		<a href="/#" className="p-paginator-next p-paginator-element"><span className="p-paginator-icon pi pi-caret-right"></span></a>
                        		<a href="/#" className="p-paginator-last p-paginator-element"><span className="p-paginator-icon pi pi-step-forward"></span></a>
                        	</div>
                        </div>
                    </div>
                </div>
            </div>
        )
	}
}

export default Layout;