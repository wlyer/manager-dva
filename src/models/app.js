
export default {

  namespace: 'app',

  state: {
  	collapsed:false,
  	breadCrumb:[],
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *breadCrumb({ payload:  breadCrumb  }, { call, put }) {
      yield put({ type: 'save', payload: { breadCrumb } });
    },
  },

  reducers: {
    save(state, action) {
      return { ...state, ...action.payload };
    },
    switchSider (state) {
      return { ...state,collapsed:!state.collapsed }
    },
    
  },

};
