import request from 'umi-request';

export async function getWelcomeList(params) {
  return request('/api/get_welcome_list', {
    params,
  });
}
