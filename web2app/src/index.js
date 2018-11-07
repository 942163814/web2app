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
import ListDemo from './template/listdemo.js';
import View from './template/view.js'; //详情
require('./css/mui.css');
require('./css/app.css');
require('./css/icons-extra.css');

//首页
ReactDOM.render(
	<div>
		<Router>
			<div>
				<Route exact path='/risdz/view/build/index.html' component={Home} />
				<Route exact path='/list' component={ListDemo} />
				<Route exact path='/view' component={View} />
			</div>
		</Router>
	</div>
	, document.getElementById('root')
);
