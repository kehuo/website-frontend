import request from 'umi-request';
import * as urls from '@/utils/urls';


export async function queryCurrent() {
  return request('/api/fake_currentUser');
}
export async function queryFakeList(params) {
  return request('/api/fake_about_me_list', {
    params,
  });
}


// bb demo
export async function getAboutMe(params) {
	let url = urls.getAboutMeUrl(params);
	return request(url);
}
