import React from 'react';
import ReactDOM from 'react-dom';
import app from '../js/app.js';
import Header from '../comp/header.js';
import listData from '../js/list_data.js';
import '../css/list.css';
import { Redirect } from 'react-router';
import $ from 'jquery';
require('../js/dist/dropload.css');
require('../js/dist/dropload.js');

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
			ldata : [],
			TotalCount: 0,
			TotalPageCount: 0,
			PageIndex: 1,
			PageSize: 15
		}

		//this.scrollHandler = this.scrollHandler.bind(this);
		this.loadList = this.loadList.bind(this);
		this.dropload = null;
	}
	
	componentDidMount() {

		var code = app.getQueryString("code");
		var name = app.getQueryString("name");
		var leaf = app.getQueryString("leaf");
		var module = "";

		if (leaf != "1") {
			module = code.split(':')[0];
		} else {
			module = code.split(':')[0] + "_" + code.split(':')[1];
		}
		var type = code.split(':')[1];

		var data = listData[module];

		this.setState({
			code: code,
			name: name,
			leaf: leaf,
			module: module,
			type: type,
			data: data
		});

		

		this.dropload = $('.inner').dropload({
			loadUpFn: (me) => {
				console.log('下拉刷新触发');
				this.setState({
					PageIndex: 1
				});
				this.loadList();
			},
			loadDownFn: (me) => {
				if (me.isData) {
					console.log('上滑加载触发');
					//page.info.isRefresh = false;
					//page.loadData();
					this.loadList();
				} else {
					me.resetload();
				}
			}
		});

	}

	//加载列表
	loadList(){

		var code = app.getQueryString("code");
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
			url : app.domain + '/risdz/api?apiCode=' + api,
			data: 'pageIndex=' + this.state.PageIndex + '&pageSize=' + this.state.PageSize,
			success:(data)=>{
				console.log('success');
				let rows;
				if(this.state.PageIndex == '1'){//第一页
					rows = data.rows1;
				}
				else{//后面页数直接push数据
					rows = this.state.ldata;
					rows.push(...data.rows1);
				}
				let TotalPageCount = data.TotalPageCount;
				if(parseInt(this.state.PageIndex) >= parseInt(TotalPageCount)){
					this.dropload.noData(true);
				}else{
					this.dropload.noData(false);
				}
				this.setState({
					ldata: rows,
					PageIndex: this.state.PageIndex + 1,
					TotalPageCount: TotalPageCount
				})
				this.dropload.resetload();
			}
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
				<div className="outer">
				    <div id="list" className="inner">
				        <ul className="lists">
				            {
								this.state.ldata.map((item) => {
									return(
										<ListItem key={item.bm} listData={item} modeData={this.state.data} />
									)
								})
							}
				        </ul>
				    </div>
				</div>
				
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

		//this.analysis = this.analysis.bind(this);
		this.state = {
			viewurl:''
		}
		this.clickItem = this.clickItem.bind(this);
	}

	analysis(params){
		const fields = params.fields.split(',');
		const {listData} = this.props;
		const title = (
			<span>
				{
					fields.map((field,index) => {
						let type = '';
						if(field.indexOf('*') != -1) {
							let s = field.split(':');
							if(s.length = 2) {
								type = s[0];
								field = s[1]
							}
						}

						let value = app.decodeURIComponent(listData[field]);

						//特殊处理字段
						if(type != '') {

							if(type == '*yyyy-mm-dd') { //时间格式
								value = value.split(' ')[0];
							} else if(type == '*yyyy-mm-dd-hh-mm') { //时间格式
								value = value.substring(0,16);
							} else if(type == "*replace") { //替换
								//*replace:||{CP} 违法行为:{WeiFXWMC}违法人:{XingM}[{phone}]$CP,WeiFXWMC,XingM,phone
								var pz = params.fields.split("||")[1];
								var fields = pz.split("$")[1];
								value = pz.split("$")[0];
								var field = fields.split(",");
								for(var k = 0; k < field.length; k++) {
									value = value.replace("{" + field[k] + "}", app.base.decodeURIComponent(listData[field[k]]));
								}
							} else if(type == "*sfck") {
								if(value == '0'){
									value = (
										<font color="red">未读</font>
									)
								}
								else if(value == '1'){
									value = (
										<font color="#ccc">已读</font>
									)
								}
							}
						}

						return (
							<span key={index}>
								{value}{params.separate}
							</span>
						);
					})
				}
			</span>
		);
		
		
		return title;

	}

	//点击列表项
	clickItem(){
		var code = app.getQueryString("code");
		var leaf = app.getQueryString("leaf");
		var module = "";

		if(leaf!="1"){
			module= code.split(':')[0];
		}else{
			module = code.split(':')[0]+"_"+code.split(':')[1];
		}

		this.setState({
			viewurl:'/view?code=' + this.props.listData.bm + '&module=' + module + app.uplink()
		})
	}

	shouldComponentUpdate(nextProps, nextState) {
		if(nextState.viewurl != ''){//路由地址不为''，继续render
			return true;
		} else {
			//判断这次列表数据是否与要渲染的数据一致，一致则不render，不一致继续render
			return JSON.stringify(this.props.listData) != JSON.stringify(nextProps.listData);
		}
	}

	render(){

		if(this.state.viewurl != ''){
			return (<Redirect to={this.state.viewurl} />)
		}

		let innerDom = '';
		
		if (this.props.modeData.list.show.type === 'concise'){
			const ZhuT = this.analysis({fields:this.props.modeData.list.show.ZhuT,separate: ''});
			innerDom = (
				<a className="mui-navigate-right">
					{ZhuT}
				</a>
			)
		} else if (this.props.modeData.list.show.type === 'double'){
			const h4 = this.analysis({fields:this.props.modeData.list.show.h4,separate: ' '});
			const p = this.analysis({fields:this.props.modeData.list.show.p,separate: '|'});
			innerDom = (
				<div className="mui-table list_items">
					<div className="mui-table-cell mui-col-xs-10">
						<h4 className="mui-ellipsis-2" style={{fontSize: 16}}>
							{h4}
						</h4>
						<p className="mui-h6 mui-ellipsis">
							{p}
						</p>
					</div>
				</div>
			)
		}

		return(
			<li className="mui-table-view-cell" onClick={this.clickItem}>
				{innerDom}
			</li>
		)
	}


}

export default List;