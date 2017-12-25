import React,{Component} from 'react';
import { Table } from 'antd';

export default class TableTemplate extends Component{
	componentWillMount(){
//		console.log(this.props.dataList);
	}
	render(){
		
		// rowSelection object indicates the need for row selection
		const rowSelection = {
		  onChange: (selectedRowKeys, selectedRows) => {
		    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
		  },
		  getCheckboxProps: record => ({
		    disabled: record.name === 'Disabled User', // Column configuration not to be checked
		  }),
		};

		return(
			<Table rowKey={this.props.rowKey} pagination={this.props.pagination} rowSelection={rowSelection} columns={this.props.columns} dataSource={this.props.dataList} />
		);
	}
	
}
