import request from 'umi-request';
import * as urls from '@/utils/urls';

// react official demo
// export async function getWelcomeList(params) {
//   return request('/api/get_welcome_list', {
//     params,
//   });
// }

// bb demo
export async function getWelcomeList(params) {
	let url = urls.getWelcomeDataUrl(params);
	return request(url);
}