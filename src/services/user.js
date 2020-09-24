import request from '@/utils/request';
import * as urls from '@/utils/urls';


export async function query() {
  return request('/api/users');
}
export async function queryCurrent() {
  return request('/api/currentUser');
}
export async function queryNotices() {
  return request('/api/notices');
}


// 导航栏右上角user信息
export async function getTopRightUserInfo(params) {
	let url = urls.getTopRightUserInfoUrl(params);
	return request(url);
}