import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Redirect } from 'react-router';
import Home from './frame/index-home.js'; //首页
import List from './template/list.js'; //列表
<<<<<<< HEAD
import ListDemo from './template/listdemo.js';
=======
import View from './template/view.js'; //详情
>>>>>>> 0180cab7c35c0d25465ccd66ec7c45d948745533
require('./css/mui.css');
require('./css/app.css');
require('./css/icons-extra.css');

//首页
ReactDOM.render(
	<div>
		<Router>
			<div>
				<Route exact path='/risdz/view/build/index.html' component={Home} />
<<<<<<< HEAD
				<Route exact path='/list' component={ListDemo} />
=======
				<Route exact path='/list' component={List} />
				<Route exact path='/view' component={View} />
>>>>>>> 0180cab7c35c0d25465ccd66ec7c45d948745533
			</div>
		</Router>
	</div>
	, document.getElementById('root')
);
