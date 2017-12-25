import React from 'react';
//import PropTypes from 'prop-types';
import { Router, Route, Switch } from 'dva/router';
//import IndexPage from './routes/IndexPage';
//import Users from "./routes/system/users/Users.js";
//import Layout from "./layouts/index.js";
import dynamic from 'dva/dynamic';
function RouterConfig({ history,app }) {
//	console.log(dynamic)
	const IndexPage = dynamic({
    app,
    /*models: () => [
      import('./carDistribute/models/myCar/myCar')
  	],*/
    component: () => import(/* webpackChunkName: "IndexPage" */'./routes/IndexPage'),
    name:'首页'
  });
  const Users = dynamic({
    app,
    models: () => [import('./models/system/users')],
    component: () => import(/* webpackChunkName: "Users" */'./routes/system/users/Users'),
    name:'用户'
  });
  const EditUser = dynamic({
    app,
    component: () => import(/* webpackChunkName: "Users" */'./routes/system/users/EditUser'),
    name:'编辑用户'
  });
  return (
    <Router history={history}>
      <Switch>
        <Route breadName="我的车辆" path="/" exact component={IndexPage} />
        <Route breadName="我的车辆" path="/home" component={IndexPage} />
        <Route breadName="用户" path="/users" component={Users} />
        <Route breadName="编辑用户" path="/users/editUser" exact component={EditUser} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;


/*function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/',
      name: 'IndexPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/IndexPage'));
        });
      },
    },
    {
      path: '/users',
      name: 'UsersPage',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./routes/system/users/Users'));
        });
      },
    },
  ];

  return <Router history={history} routes={routes} />;
}

export default RouterConfig;*/