import { getWelcomeList } from './service';

const Model = {
  namespace: 'welcome',
  state: {
    list: [],
  },
  effects: {
    *fetch({ payload }, { call, put }) {
      console.log("model fetch, payload=" + JSON.stringify(payload))
      const response = yield call(getWelcomeList, payload);
      yield put({
        type: 'queryList',
        payload: Array.isArray(response) ? response : [],
      });
    },
  },
  reducers: {
    queryList(state, action) {
      return { ...state, list: action.payload };
    },
  },
};
export default Model;
