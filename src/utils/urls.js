import { stringify } from 'qs';
import { buildUrlWithTs } from './utils';

// const { OpApi, DemoApi } = global;
const OpApi = 'http://localhost:8000/api/v1';
// const OpApi = 'http://172.17.0.1:8050/api/v1';
const welcomeBase = 'welcome';


export function getWelcomeDataUrl(params) {
	let baseUrl = `${OpApi}/${welcomeBase}/get_welcome_data`;
	// console.log("utils. getWelcomeDataUrl, baseUrl = " + JSON.stringify(baseUrl))
	return buildUrlWithTs(baseUrl, params);
}