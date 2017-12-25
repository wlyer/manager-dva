import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import QueueAnim from 'rc-queue-anim';
import classnames from 'classnames';
import { Layout} from 'antd';
import styles from './layouts.less';
import Sider from './Sider';
import Header from './Header';
import Bread from './Bread';
import getRouter from '../router';
const {Content } = Layout;


function App({ children, location,breadName }) {
	console.log(breadName)
	return (
	  <Layout className={styles.main}>
        <Sider />
        <Layout>
          <Header/>
          <Bread location={location}/>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', height: '100%' }}>
            {children}
          </Content>
        </Layout>
      </Layout>
  );
}

App.propTypes = {
  children: PropTypes.element,
  location: PropTypes.object,
  breadName:PropTypes.object
}

export default App;