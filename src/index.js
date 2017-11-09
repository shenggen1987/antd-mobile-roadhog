import dva from 'dva';
// import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading';
import { Toast } from 'antd-mobile';
import './index.css';

const ERROR_MSG_DURATION = 3; // 3 秒

// 1. Initialize
const app = dva({
  // history: createHistory(),
  onError(e) {
    Toast.fail(e.message, ERROR_MSG_DURATION);
  },
});

// 2. Plugins
app.use(createLoading());

// 3. Model
// Moved to router.js

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
