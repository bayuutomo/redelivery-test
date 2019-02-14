let BASE_URL_API  = 'http://172.25.230.217:8080';

let MENU_LIST =  [
	    {label: 'Home', icon: 'pi pi-fw pi-home', url: '/'},
	    {
	        label: 'Master Data', icon: 'pi pi-fw pi-align-justify',
	        items: [
	        	{label: 'Financing Scheme', icon: 'pi pi-fw pi-minus', url: '/financing-scheme'}
	        ]
	    }
	];

export const configuration = {
	BASE_URL_API,
	MENU_LIST
}