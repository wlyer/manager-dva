/*import dva from 'dva';
import { browserHistory } from 'dva/router';
import createLoading from 'dva-loading';
import { message } from 'antd';
import './index.css';
const ERROR_MSG_DURATION = 3; // 3 秒
// 1. Initialize
const app = dva({
	history: browserHistory,
	onError(e) {
    message.error(e.message, ERROR_MSG_DURATION);
  },
});

// 2. Plugins
app.use(createLoading());
// app.use({});

// 3. Model

//app.model(require('./models/system/users'));
// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
*/

import dva from 'dva';
import './index.css';
import browserHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
// 1. Initialize
const app = dva({
	history:browserHistory()
});


// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
// app.model(require('./models/example'));
app.model(require('./models/app'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
