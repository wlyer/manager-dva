import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'dva';
import { Button } from 'antd';
import styles from './Users.css';
import App from '../../../layouts/App';
import TableTemplate from '../../../components/TableTemplate';
const bread = [{
	key  : 'users',
	name : '用户列表'
}]
class Users extends Component {
	constructor(props){
		super(props);
		this.state={
			selectedRowKeys:[],
			pageSize:2,
		};
	}
	componentDidMount(){
		console.log(bread)
		this.props.dispatch({
      type: 'app/breadCrumb',
      payload:  bread ,
    });
		/*const pageSize = 10;
		const pageNum = 1;
		this.props.dispatch({
      type: 'users/fetch',
      payload: { pageSize, pageNum },
    });*/
	}
	deleteHandle(id) {
    dispatch({
      type: 'users/delete',
      payload: id,
    });
	}
  createHandler = (values) => {
  	this.context.router.history.push('/users/editUser');
    /*dispatch({
      type: 'users/create',
      payload: values,
    });*/
  }
  editHandler(id, values) {
    dispatch({
      type: 'users/patch',
      payload: { id, values },
    });
  }
  pageChangeHandler(pageNum,pageSize){
  	const keyWord = '';
  	this.props.dispatch({
      type: 'users/fetch',
      payload: { pageSize, pageNum,keyWord },
    });
    this.setState({
			pageSize
		})
  }
	/*onClick(current, pageSize){
		console.log(current);
	}*/
	render(){
		const columns = [{
		  title: 'id',
		  dataIndex: 'id',
		  render: text => <a href="#">{text}</a>,
		}, {
		  title: 'name',
		  dataIndex: 'name',
		}, {
		  title: 'Address',
		  dataIndex: 'address',
		}];
		const rowSelection = {
				selectedRowKeys:this.state.selectedRowKeys,
				onChange(selectedRowKeys, selectedRows) {
					that.setState({
						selectedRowKeys
					})
				}
		};
		
		let pagination = {
	    total: this.props.dataList.total,
	    defaultCurrent: this.props.dataList.current,
	    pageSize: this.state.pageSize,
	    showSizeChanger: true,
	    onShowSizeChange: (current, pageSize) => {
	        this.pageChangeHandler(current, pageSize)
	    },
	    onChange:(current, pageSize) => {
	        this.pageChangeHandler(current, pageSize)
	    },
	}
		return (
	  	<App>
		    <div className={styles.normal}>
		    	<div style={{ marginBottom: 16 }}>
          <Button type="primary" onClick={this.createHandler} >新增</Button>{this.state.selectedRowKeys.length}
          <Button type="primary" onClick={this.deleteHandle} disabled={this.state.selectedRowKeys.length==0?true:false} >删除</Button>
        </div>
		     	<TableTemplate rowKey="id" columns={columns} dataList={this.props.dataList.list} pagination={pagination} />
		    </div>
		  </App>
	  );
	}
}
  
Users.contextTypes = {  
  router:PropTypes.object.isRequired  
} 
function mapStateToProps(state) {
	const { dataList} = state.users;
  return {
  	loading: state.loading.models.users,
  	dataList
  };
}

export default connect(mapStateToProps)(Users);
