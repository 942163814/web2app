import React from 'react';
import ReactDOM from 'react-dom';
import jqueryAlert from '../js/alert.min.js';

class Login extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			loginButton : '登录',
			username: '',
			password: ''
		}
	}

	Login(){
		if (this.state.username === '') {
			const dialog = jqueryAlert({
				'content': '请输入用户名',
				'modal': true,
				'buttons': {
					'确定': function() {
						dialog.close();
					}
				}
			})
		}
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