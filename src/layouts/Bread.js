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
		console.log(this.props.breadCrumb)
		const bread = data => data.map((item,index) => {
  		return <Breadcrumb.Item key={index}>{item.name}</Breadcrumb.Item>;
    });
		return(
			<Header className={styles.bread} >
	        <Breadcrumb>
	        	<Breadcrumb.Item key='home'>首页</Breadcrumb.Item>
				    {bread(this.props.breadCrumb)}
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
		breadCrumb : state.app.breadCrumb
	};
}

export default connect(mapStateToProps)(Bread);