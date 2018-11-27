import React from 'react';
import ReactDOM from 'react-dom';
import app from '../js/app.js';
import { Redirect } from 'react-router';

class Login extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			loginButton : '登录',
			username: '',
			password: '',
			redirect: ''
		}
	}

	//登录
	Login(){
		//当登录按钮为登录
		if (this.state.loginButton === '登录') {

			//用户名
			const username = this.state.username;
			//密码
			const password = this.state.password;

			if (username === '') {
				app.alert('请输入用户名');
				return false;
			} else if (password === '') {
				app.alert('请输入密码');
				return false;
			} else {
				this.setState({
					loginButton: '登录中...'
				});
				app.ajax({
					url: app.domain + '/login',
					data: 'username=' + username + '&password=' + password,
					success: (data) => {
						this.LoginSuccess(data);
						this.setState({
							redirect:'/'
						});
					},
					error: (data) => {
						//登录失败
						app.alert(data.outMsg);
						this.setState({
							loginButton: '登录'
						});
					}
				});
			}
		}
	}

	//登录成功
	LoginSuccess(data){
		//用户基础信息
		const user = {
			info: {
				sessionId: data.rows1[0].sessionId, //登录的sessionid
				code: data.rows1[0].bm, //用户编码
				ename: data.rows1[0].userName, //用户登录账号
				cname: data.rows1[0].name, //用户名称
				phone: data.rows1[0].phone, //用户手机
				loginDate: data.rows1[0].loginDate, //用户登录时间
				custom: data.rows1[0].custom, //定制版权限

				DWBM: data.rows1[0].unitId, //单位编码
				DWMC: data.rows1[0].unit.dw_name, //单位名称
				DWLX: data.rows1[0].unit.dw_lx, //单位类型编码
				DWLB: data.rows1[0].unit.dw_lb, //单位类别
				DMZ: data.rows1[0].unit.dw_dmz,
				P_DMZ: data.rows1[0].unit.p_dw_dmz,
				P_DWBM: data.rows1[0].districtInfo.p_dw_code, //父单位编码
				P_DWMC: data.rows1[0].districtInfo.p_dw_name, //父单位名称
				P_DWLX: data.rows1[0].districtInfo.p_dw_lx, //父单位类别
				P_DWLB: data.rows1[0].districtInfo.p_dw_lb, //父单位类别

				fazjg: data.rows1[0].unit.fazjg, //当前用户单位车牌所属省市
				sessionStr: data.sessionStr
			}
		};
		
		app.DelCookie("USERINFO");
		app.SetCookie("USERINFO", JSON.stringify(user));
		
	}

	handelChange(e){
		const id = e.target.getAttribute('id');
		if (id === 'value-account'){
			this.setState({
	            username:e.target.value
	        });
		} else {
			this.setState({
	            password:e.target.value
	        });
		}
    }

	render(){

		if (this.state.redirect != '') {
			return (<Redirect to={this.state.redirect} />)
		}

		const contStyle = {
			borderTop:'1px solid #CCCCCC'
		}
		return(
			<div className="mui-content" style={{height:'100vh'}}>
				<div style={{height:'35vh'}}>
					<div className="login-title">
						<img id="logo" className="login-logo" src="http://cqcskj.wicp.net:8088/risdz/view/webapp/images/shield.png" />
						<p style={{color:'#2980B9',fontSize:'18px',fontWeight:'bold'}}>用户登录</p>
					</div>
				</div>
				<div style={{height: '45%', padding: '10px', minHeight: '180px'}}>
					<div className="mui-input-row">
						<a className="login-input-icon"><span className="mui-icon mui-icon-contact"></span></a>
						<input id="value-account" type="text" onChange={this.handelChange.bind(this)} value={this.state.username} className="mui-input-clear login-input"  placeholder="用户名" />
					</div>
					<div className="mui-input-row">
						<a className="login-input-icon"><span className="mui-icon mui-icon-locked"></span></a>
						<input id="value-password" type="password" onChange={this.handelChange.bind(this)} value={this.state.password} className="mui-input-password login-input" placeholder="密码" />
					</div>
					<div className="mui-content-padded" style={{margin:0}}>
						<button id="btn-login" onClick={this.Login.bind(this)} className="mui-btn mui-btn-block mui-btn-primary" style={{borderRadius: '25px',boxShadow: '0px 6px 8px #CCCCCC',padding: '8px 0'}}>
							{this.state.loginButton}
						</button>
					</div>
				</div>

				<div style={{height:'20%',textAlign: 'center',color: '#34495E',fontSize: '12px',paddingTop: '15%'}}>
					<p>重庆川顺科技有限公司 版权所有</p>
				</div>
			</div>
		)
	}
}

export default Login;