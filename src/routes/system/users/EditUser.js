import React,{Component} from 'react';
import { connect } from 'dva';
import { Form, Input,Button } from 'antd';
const FormItem = Form.Item;
import styles from './Users.css';
import App from '../../../layouts/App';
import TableTemplate from '../../../components/TableTemplate';
const bread = [{
	key  : 'users',
	name : '用户列表'
},{
	key  : 'editUser',
	name : '编辑用户'
}]
class EditUser extends Component {
	constructor(props){
		super(props);
		this.state={
		};
	}
	componentDidMount(){
		this.props.dispatch({
      type: 'app/breadCrumb',
      payload:  bread ,
    });
	}
  editHandler(id, values) {
    dispatch({
      type: 'users/patch',
      payload: { id, values },
    });
  }
	render(){
	  const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };
		return (
	  	<App>
		    <Form onSubmit={this.handleSubmit}>
	        <FormItem
	          {...formItemLayout}
	          label="账号"
	          hasFeedback
	        >
	          {getFieldDecorator('id', {
	            rules: [{
	              required: true, message: 'Please input your id!',
	            }],
	          })(
	            <Input />
	          )}
	        </FormItem>
	        <FormItem
	          {...formItemLayout}
	          label="名称"
	          hasFeedback
	        >
	          {getFieldDecorator('name', {
	            rules: [{
	              required: true, message: 'Please input your name!',
	            }],
	          })(
	            <Input />
	          )}
	        </FormItem>
	        <FormItem
	          {...formItemLayout}
	          label="地址"
	          hasFeedback
	        >
	          {getFieldDecorator('address', {
	            rules: [{
	              required: true, message: 'Please input your address!',
	            }],
	          })(
	            <Input />
	          )}
	        </FormItem>
	        <FormItem {...tailFormItemLayout}>
	          <Button type="primary" htmlType="submit">Register</Button>
	        </FormItem>
	    	</Form>
		  </App>
	  );
	}
}
  

function mapStateToProps() {
  return {
  };
}
EditUser = Form.create()(EditUser);
export default connect(mapStateToProps)(EditUser);
