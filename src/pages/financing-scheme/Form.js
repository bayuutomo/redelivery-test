import React, { Component } from 'react';

class Layout extends Component {
	constructor() {
        super();
        this.state = {
            breadcrumdItems: [
            	{label:'Master Data'},
                {label:'Financing Scheme', url: '/financing-scheme'},
                {label:'Form', url: '/financing-scheme/form'}
            ]
        };
    }
	
	componentDidMount() {
		document.title = 'Financing Scheme > Form - Redelivery App';
		this.props.onBreadcrumbChange(this.state.breadcrumdItems);
	}
	
	render() {
		return(
			<div className="p-grid">
                <div className="p-col-12">
                    <div className="card">
                        <h1>Financing Scheme Form Page</h1>
                        <p>Lorem ipsum dolor sit amet, aliquip aperiam omittam vim at. Ne prompta apeirian adolescens vim, sea nobis vivendo patrioque ne, mea eirmod partiendo salutandi an. Erat dictas tacimates ne usu. Eleifend qualisque percipitur ut duo, ne choro homero ius, solum placerat pertinacia ius id. Ut vis sale molestiae, eu eam case persequeris efficiantur. An natum labore tacimates eam, velit nemore disputando mei ut, tractatos accusamus deseruisse mei eu.</p>
                        <p>Suscipit principes torquatos et per, probo impetus nominati vim no. Pro ei tantas petentium disputando, pro an diceret incorrupte, est officiis iracundia adipiscing id. Brute aliquid persecuti ex nec. Dicta lucilius efficiendi an sed. Cum ne congue partem moderatius, amet illum eum ea, no veri exerci ponderum vim. Mazim democritum eu per.</p>
                    </div>
                </div>
            </div>
        )
	}
}

export default Layout;