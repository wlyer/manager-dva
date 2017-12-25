import React, { Component } from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types';
import {Layout } from 'antd';
const { Header} = Layout;
import { Breadcrumb } from 'antd';
import styles from './bread.less';
class Bread extends Component{
	constructor(props){
		super(props);
	}
	render(){
		console.log(location)
		const breadData = ['首页','用户管理'];
		const bread = data => data.map((item,index) => {
  		return <Breadcrumb.Item key={index}>{item}</Breadcrumb.Item>;
    });
		return(
			<Header className={styles.bread} >
	        <Breadcrumb>
				    <Breadcrumb.Item key={1}>首页</Breadcrumb.Item>
				    <Breadcrumb.Item key={2}>用户管理</Breadcrumb.Item>
				  </Breadcrumb>
      </Header>
		)
	}
}

Bread.propTypes = {
  location: PropTypes.object,
}

function mapStateToProps(state) {
	return { 
	};
}

export default connect(mapStateToProps)(Bread);