import React from 'react';
import ReactDOM from 'react-dom';
import app from '../js/app.js';
import Header from '../comp/header.js';
import listData from '../js/list_data.js'

class List extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			code : '',
			name : '',
			leaf : '',
			module : '',
			type : '',
			data : [],
			ldata : null
		}
	}
	
	componentDidMount(){
		var code = app.getQueryString("code");
		var name = app.getQueryString("name");
		var leaf = app.getQueryString("leaf");
		var module = "";

		if(leaf!="1"){
			module= code.split(':')[0];
		}else{
			module = code.split(':')[0]+"_"+code.split(':')[1];
		}
		var type = code.split(':')[1];
		
		var data = listData[module];
		
		let api = '';
		if(type == 'zllr' || type == 'list') {
			api = data.base.listlr;
		}

		app.ajax({
			url : app.domain + '/' + api,
			success:(data)=>{
				if(data.outOk == '1') {
					this.setState({
						ldata:data
					})
				}
			}
		});

		this.setState({
			code : code,
			name : name,
			leaf : leaf,
			module : module,
			type : type,
			data : data
		});

	}
	
	render(){

		let title = '列表',abut = 'show';
		
		//标题和按钮
		if(this.state.type == 'zllr' || this.state.type == 'list') {
			title = this.state.data.base.title + '录入';
			if(this.state.module == 'menu_msglist'){
				title = this.state.data.base.title;
			}
		}
		if(this.state.data.length != 0){
			if(this.state.data.list.search.type == 'none'){
				abut = 'none';
			}
		}

		return(
			<div>
				<Header titleName={title} rbut="show" abut={abut}/>
					<div className="outer" style={{borderTop}}"border-top: solid 1px #ccc;">
					    <div class="inner">
					        <ul class="lists">
					            
					        </ul>
					    </div>
				</div>
				{
					this.state.ldata.rows1.map((item) => {
						return(
							<ListItem key={item.bm} listData={item} />
						)
					})
				}
			</div>
		)
	}

}

//列表项
class ListItem extends React.Component{
	constructor(props){
		super(props);
/*
		const {listData} = this.props;

		this.state = {listData};*/
	}

	render(){
		return(

		)
	}
}

export default List;