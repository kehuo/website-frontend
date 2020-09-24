import request from 'umi-request';
import * as urls from '@/utils/urls';

// export async function queryCurrent() {
//   return request('/api/currentUser');
// }
export async function queryProvince() {
  return request('/api/geographic/province');
}
export async function queryCity(province) {
  return request(`/api/geographic/city/${province}`);
}
export async function query() {
  return request('/api/users');
}


// bb demo
export async function getCurrentUser(params) {
	let url = urls.getCurrentUserUrl(params);
	return request(url);
}