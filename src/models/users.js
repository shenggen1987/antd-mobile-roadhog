import queryString from 'query-string';
import * as usersService from '../services/users';
import { PREFIX } from '../constants';

export default {
  namespace: 'users',
  state: {
    list: [],
    total: null,
    page: null,
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put, select }) {
      const list = yield select(state => state.users.list);
      const { data } = yield call(usersService.fetch, { page });
      yield put({
        type: 'save',
        payload: {
          data: list ? data.concat(list) : data,
          page,
        },
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, search }) => {
        const query = queryString.parse(search);
        if (pathname === `/${PREFIX}/users`) {
          dispatch({ type: 'fetch', payload: query });
        }
      });
    },
  },
};
