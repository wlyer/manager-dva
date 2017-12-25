import React,{Component} from 'react';
import { connect } from 'dva';
import { Form, Input } from 'antd';
const FormItem = Form.Item;
import styles from './Users.css';
import App from '../../../layouts/App';
import TableTemplate from '../../../components/TableTemplate';
class EditUser extends Component {
	constructor(props){
		super(props);
		this.state={
		};
	}
	componentDidMount(){
		/*const pageSize = 10;
		const pageNum = 1;
		this.props.dispatch({
      type: 'users/fetch',
      payload: { pageSize, pageNum },
    });*/
	}
  editHandler(id, values) {
    dispatch({
      type: 'users/patch',
      payload: { id, values },
    });
  }
	render(){
		return (
	  	<App>
		    <Form onSubmit={this.handleSubmit}>
	        <FormItem
	          {...formItemLayout}
	          label="账号"
	          hasFeedback
	        >
	          {getFieldDecorator('email', {
	            rules: [{
	              type: 'email', message: 'The input is not valid E-mail!',
	            }, {
	              required: true, message: 'Please input your E-mail!',
	            }],
	          })(
	            <Input />
	          )}
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
