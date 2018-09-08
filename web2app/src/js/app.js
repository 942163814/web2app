import $ from 'jquery';

const app = {
	domain: 'http://localhost:8088',

	ajax: function(param) {

		const url = param.url.indexOf('?') < 0 ? param.url + '?temianl=app' : param.url + '&temianl=app';

		$.ajax({
			url: url,
			dataType: 'json',
			data: '',
			timeout: '30000',
			success: (data) => {
				param.success(data);
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
		return app.encodeURIComponent(window.location.pathname);
	},

	getup: function() {
		return app.decodeURIComponent(app.getQueryString('up'));
	}

}

export default app;