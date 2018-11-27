import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import { Redirect } from 'react-router';
import Home from './frame/index-home.js'; //首页
import Login from './frame/user-login.js'; //首页
import List from './template/list.js'; //列表
import ListDemo from './template/listdemo.js';
import View from './template/view.js'; //详情
require('./css/mui.css');
require('./css/app.css');
require('./css/icons-extra.css');
require('./css/alert.css');

//首页
ReactDOM.render(
	<div>
		<Router>
			<div>
				<Route exact path='/' component={Home} />
				<Route exact path='/listDemo' component={ListDemo} />
				<Route exact path='/list' component={List} />
				<Route exact path='/view' component={View} />
				<Route exact path='/login' component={Login} />
			</div>
		</Router>
	</div>
	, document.getElementById('root')
);
