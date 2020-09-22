import request from 'umi-request';

export async function queryCurrent() {
  return request('/api/fake_currentUser');
}
export async function queryFakeList(params) {
  return request('/api/fake_about_me_list', {
    params,
  });
}
