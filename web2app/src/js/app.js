import $ from 'jquery';
import jqueryAlert from '../js/alert.min.js';

const app = {
	//domain: 'http://192.168.1.172:8081/risdz/api',
	//userMenu: 'http://192.168.1.172:8081/risdz/upload/user_menu',//菜单

	//domain: 'http://118.24.175.227:1993',//node中间层地址
	domain: 'http://localhost:1993',//node中间层地址
	userMenu: 'http://118.24.175.227:1993/user/menu',//用户菜单接口
	sourceDomain: 'http://cqcskj.wicp.net:8088/risdz/view/webapp/',//资源地址
	ajax: function(param, temp) {

		const url = param.url.indexOf('?') < 0 ? param.url + '?temianl=app' : param.url + '&temianl=app';

		const postData = param.data || '';
		
		//获取用户session，没有默认为''
		var sessionStr = app.getUserInfo() || {info:{sessionStr:''}};
		
		$.ajax({
			url: url,
			dataType: 'json',
			type: 'post',
			data: postData + '&S=' + sessionStr.info.sessionStr ,
			timeout: '30000',
			success: (data) => {

				if (data.outOk === -1) {
					if (temp) {
						temp.setState({
							redirect: '/login'
						})
					}
				} else if (data.outOk === 1) {
					param.success(data);
				} else {
					if (param.error) {
						param.error(data);
					}
				}

			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {}
		})
	},

	/*
	 * 获取url参数
	 */
	getQueryString: function(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) {
			return app.decodeURIComponent(r[2]);
		} else {
			return "";
		}
	},

	/*
	 * url解码
	 */
	decodeURIComponent: function(strIn) {
		var strvalue = '',
			strRes = '';
		try {
			strvalue = decodeURIComponent(strIn);
		} catch (ex) {
			strvalue = unescape(strIn);
		}
		if (strvalue == null || strvalue == "undefined") {
			strRes = "";
		} else {
			strRes = strvalue;
		}
		return strRes;
	},

	/*
	 * url加码
	 */
	encodeURIComponent: function(strIn) {
		var strvalue = '',
			strRes = '';
		try {
			strvalue = encodeURIComponent(strIn);
		} catch (ex) {
			strvalue = escape(strIn);
		}
		if (strvalue == null || strvalue == "undefined") {
			strRes = "";
		} else {
			strRes = strvalue;
		}
		return strRes;
	},

	/*
	 * 历史url
	 */
	uplink: function() {
		return '&up=' + app.encodeURIComponent(window.location.pathname + window.location.search);
	},

	getup: function() {

		let up = app.decodeURIComponent(app.getQueryString('up'));


		if (up.indexOf('up=') > -1) {
			up = up.split('up=');
			up = up[0] + 'up=' + app.encodeURIComponent(up[1])
		}

		return up
	},

	alert: function(strIn) {
		const dialog = jqueryAlert({
			'content': strIn,
			'modal': true,
			'buttons': {
				'确定': function() {
					dialog.close();
				}
			}
		})
	},
	
	// 20150112 杨小辉
	// 写cookies函数
	// 参数:name键, value值,path路径,domain域
	SetCookie: function(name, value, path, domain, Days) {

		//cookie过期日期
		if (typeof(Days) == 'undefined') {
			Days = 90; //此 cookie 将被保存 90 天
		}
		var exp = new Date(); // new Date("December 31, 9998");
		exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);

		//cookie domain 参数
		if (typeof(domain) == 'undefined') {
			//domain=window.location.host;
			domain = "";
		}
		//cookie path 参数
		if (typeof(path) == 'undefined') {
			path = '/';
		}
		
		var cookiestr = name + "=" + escape(value) + ";domain=" + domain + ";path=" + path + ";expire=" + exp.toGMTString();

		//判断IE浏览器
		//if (window.navigator.userAgent.indexOf("MSIE")>=1) {
		//	value=name + "=" + escape(value) + ";path=/";
		//}
		document.cookie = cookiestr;
	
	},
	
	// 20150112 杨小辉
	// 删除cookie
	// 参数:name键, path路径, domain域
	DelCookie: function(name) {
		var exp = new Date();  
		exp.setTime(exp.getTime() - 1);
		app.SetCookie(encodeURIComponent(name), '','','',-1);
	},

	// 20150112 杨小辉
	// 取cookies函数
	// 参数：cookie名称
	GetCookie: function(name) {
		var cookies = document.cookie.split(';');
		var cookie = '';
		for(var i = 0; i < cookies.length; i++) {
			cookie = cookies[i].split('=');
			if(cookie[0].replace(/^\s+|\s+$/g, '') == name) {
				var value = (cookie.length <= 1) ? "" : unescape(cookie[1].replace(/^\s+|\s+$/g, ''));

				if(value.indexOf(name + "=") == 0) {
					value = app.decodeURIComponent(value.split(";")[0].split("=")[1]);
				} else {
					value = app.decodeURIComponent(value);
				}
				if(value != ''){
					return value;
				}
			}
		}
		return null;
	},

	/*
	 * 获取登录用户信息
	 */
	getUserInfo: function() {
		var UserInfo = null;
		var cook = app.GetCookie("USERINFO");
		if(cook != null && cook != '') {
			var jsonobj = JSON.parse(cook);
			UserInfo = jsonobj;
		}
		return UserInfo;
	}

}

export default app;