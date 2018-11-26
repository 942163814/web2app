import $ from 'jquery';

const app = {
	//domain: 'http://192.168.1.172:8081/risdz/api',
	//userMenu: 'http://192.168.1.172:8081/risdz/upload/user_menu',//菜单
	domain: 'http://118.24.175.227:1993',
	userMenu: 'http://118.24.175.227:1993/user/menu',
	ajax: function(param,temp) {

		const url = param.url.indexOf('?') < 0 ? param.url + '?temianl=app' : param.url + '&temianl=app';

		$.ajax({
			url: url,
			dataType: 'json',
			data: '',
			timeout: '30000',
			success: (data) => {
				
				if(data.outOk === -1){
					temp.setState({
						redirect:'/login'
					})
				}
				else if (data.outOk === 1){
					param.success(data);
				}
				
			},
			error: function(XMLHttpRequest, textStatus, errorThrown) {
			}
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


		if(up.indexOf('up=') > -1){
			up = up.split('up=');
			up = up[0] + 'up=' + app.encodeURIComponent(up[1])
		}

		return up
	}

}

export default app;