import React, {Component} from 'react';
import { connect } from 'dva';
import { Menu, Icon,Layout } from 'antd';
import {Link} from 'react-router-dom';
const {Sider } = Layout;
const SubMenu = Menu.SubMenu;
import styles from './sider.less';

class MySider extends React.Component {
	render() {
    return (
    	<Sider
    		width={256}
    		breakpoint="md"
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
        style={{minHeight: '100vh'}}
    	>
        <div className={styles.logo} >
        	<img src="https://gw.alipayobjects.com/zos/rmsportal/iwWyPinUoseUxIAeElSx.svg" alt="logo" />
          {this.props.collapsed?'':<h1>Ant Design Pro</h1>}
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']} style={{ margin: '16px 0'}}>
        	<SubMenu key="system" title={<span><Icon type="setting" /><span>系统管理</span></span>}>
            <Menu.Item key="home"><Link to="/home">首页</Link></Menu.Item>
            <Menu.Item key="users"><Link to="/users">用户管理</Link></Menu.Item>
        	</SubMenu>
        </Menu>
    	</Sider>
    )
  }
}

function mapStateToProps(state) {
	return { 
		collapsed:state.app.collapsed
	};
}

export default connect(mapStateToProps)(MySider);
