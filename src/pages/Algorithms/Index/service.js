import request from 'umi-request';

export async function queryFakeList(params) {
  return request('/api/fake_algorithms_index_data', {
    params,
  });
}
