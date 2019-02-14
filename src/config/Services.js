import { configuration } from '../config/Config';

const BASE_URL    = configuration.BASE_URL_API;
//console.log(configuration.BASE_URL_API);
export const api = {
	identity: {
		apptxnid  : '',
		reqtxnid  : '',
		reqdate   : '',
		appid     : 'redelivery',
		userid    : '',
		password  : '',
		signature : '',
		seqno     : ''
	},
	url: {
		financing_scheme : {
			list   : BASE_URL + '/rdv/services/financingScheme/list.api',
			detail : BASE_URL + '/rdv/services/financingScheme/retrieveDetail.api',
			insert : BASE_URL + '/rdv/services/financingScheme/insert.api',
			update : BASE_URL + '/rdv/services/financingScheme/update.api',
			delete : BASE_URL + '/rdv/services/financingScheme/delete.api'
		}
	}
}

