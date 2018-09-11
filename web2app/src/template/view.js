import React from 'react';
import ReactDOM from 'react-dom';
import app from '../js/app.js';
import Header from '../comp/header.js';
import ViewData from '../js/view_data.js';

class View extends React.Component{

	constructor(props){
		super(props);

		const module = app.getQueryString("module");
		
		const {title} = ViewData[module];//标题
		const {field} = ViewData[module];//字段
		const {getapi} = ViewData[module];

		this.state = {
			title:title,
			field:field,
			getapi:getapi,
			vdata:{}
		}
	}

	componentDidMount(){
		app.ajax({
			url : app.domain + '/' + this.state.getapi + '?bm=' + app.getQueryString("code"),
			success:(data)=>{
				if(data.outOk == '1') {
					if(data.outOk == '1'){
						this.setState({
							vdata:data
						})
					}
				}
			}
		});
	}

	render(){
		return(
			<div>
				<Header titleName={this.state.title} rbut="show"/>
				<div className="mui-input-group">
				{
					this.state.field.map((item) => {
						return (
							<Field key={item.code} item={item} />
						)
					})
				}
				</div>
			</div>
		)

	}

}

class Field extends React.Component{

	constructor(props){
		super(props)
	}

	render(){
		const {type} = this.props.item;
		const {title} = this.props.item;
		let itemDom = (<div></div>);
		if(type === 'text'){//文本
			itemDom = (<div className="mui-input-row">
				<label>{title}</label>
				<div className="wrapdiv info"></div>
			</div>)
		}

		return(
			itemDom
		)
	}

}

export default View;