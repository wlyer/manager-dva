import React, {Component} from 'react';
import { connect } from 'dva';
import {Icon,Layout } from 'antd';
const { Header} = Layout;
import styles from './header.less';
import Bread from './Bread';

class MyHeader extends Component {
  state = {
  };
  componentDidMount() {
  }
  toggle = () => {
  	this.props.dispatch({type:'app/switchSider'});
  }
	render() {
    return (
    	<div>
	    	<Header className={styles.header} >
	        <Icon
	          className={styles.trigger}
	          type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'}
	          onClick={this.toggle}
	        />
	      </Header>
    	</div>
    )
  }
}
function mapStateToProps(state) {
	return { 
		collapsed:state.app.collapsed
	};
}

export default connect(mapStateToProps)(MyHeader);
