import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';

/*头部*/
class Header extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			back : ''
		}
	}

	back(e){
		this.setState({
			back : '/'
		})
	}
	
	render(){

		if(this.state.back != ''){
			return (<Redirect to={this.state.back} />)
		}

		let rbut = '',abut = '';
		
		if(this.props.rbut === 'show'){
			rbut = (
				<button id="btn_back" onClick={this.back.bind(this)} className="mui-btn mui-btn-blue mui-btn-link mui-btn-nav mui-pull-left">
					<span className="mui-icon mui-icon-left-nav"></span>
					返回
				</button>
			)
		}

		if(this.props.abut === 'show'){
			abut = (
				<button id="btn_add" className="mui-btn mui-btn-blue mui-btn-link mui-btn-nav mui-pull-right">
					<span className="mui-icon mui-icon-plus" style={{fontWeight:'bold'}}></span>
					添加
				</button>
			)
		}

		return(
			<div id="header" className="mui-bar mui-bar-nav">
				{rbut}
				{abut}
				<h1 id="mui_title" className="mui-title">{this.props.titleName}</h1>
			</div>
		)
	}
}


export default Header;