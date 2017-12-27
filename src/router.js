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
    name:'用户列表'
  });
  const EditUser = dynamic({
    app,
    component: () => import(/* webpackChunkName: "Users" */'./routes/system/users/EditUser'),
    name:'编辑用户'
  });
  /*const Home = ({ match }) => (  
	  <div>  
	     <Route path={`${match.url}/list`} component={Users}/>    
	     <Route path={`${match.url}/editUser`} component={EditUser}/>
	 </div>)   */
  return (
    <Router history={history}>
      <Switch>
        <Route breadName="我的车辆" path="/" exact component={IndexPage} />
        <Route breadName="我的车辆" path="/home" component={IndexPage} />
        <Route breadName="用户列表" path="/users" exact component={Users} />
         <Route breadName="编辑用户" path="/users/editUser" component={EditUser} />
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