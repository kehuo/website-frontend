import { stringify } from 'qs';
import { buildUrlWithTs } from './utils';

// const { OpApi, DemoApi } = global;
//const OpApi = 'http://localhost:8000/api/v1';
const OpApi = 'http://localhost:5000/api/v1';
const welcomeBase = 'welcome';
const authBase = 'auth';
const miscBase = 'misc';

export function getWelcomeDataUrl(params) {
  let baseUrl = `${OpApi}/${welcomeBase}/get_welcome_data`;
  // console.log("utils. getWelcomeDataUrl, baseUrl = " + JSON.stringify(baseUrl))
  return buildUrlWithTs(baseUrl, params);
}

// /auth/current_user
export function getCurrentUserUrl(params) {
  let baseUrl = `${OpApi}/${authBase}/current_user`;
  return buildUrlWithTs(baseUrl, params);
}

// /misc/about-me
export function getAboutMeUrl(params) {
  let baseUrl = `${OpApi}/${miscBase}/about_me`;
  return buildUrlWithTs(baseUrl, params);
}

// 加载导航栏时，右上角user的信息
// todo 目前全是虚拟数据，所以暂时和 current_user数据一样，之后再单独从后台写个api分离出去.
export function getTopRightUserInfoUrl(params) {
  let baseUrl = `${OpApi}/${authBase}/current_user`;
  return buildUrlWithTs(baseUrl, params);
}
