import * as usersService from '../../services/system/users';
export default {
  namespace: 'users',
  state: {
  	dataList: [],
  },
  reducers: {
  	 save(state, { payload: { data: dataList } }) {
      return { ...state, dataList/*, total*/ };
    },
  },
  effects: {
  	*fetch({ payload: { pageSize,pageNum,keyWord } }, { call, put }) {
      const { data } = yield call(usersService.fetch, { pageSize,pageNum,keyWord });
      yield put({ type: 'save', payload: { dd } });
    },
  },
  subscriptions: {
  	setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
        	const params = {
        		pageSize : 2,
        		pageNum  : 1,
        		keyWord  :''
        	};
          dispatch({ type: 'fetch', payload: params });
        }
      });
    },
  },
};
