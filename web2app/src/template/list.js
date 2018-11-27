import React from 'react';
import ReactDOM from 'react-dom';
import app from '../js/app.js';
import Header from '../comp/header.js';
import listData from '../js/list_data.js';
import '../css/list.css';
import { Redirect } from 'react-router';

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
	}

	/*scrollHandler(event){
		let scrollTop = event.currentTarget.scrollTop;
        if(scrollTop === 0){
        	console.log(scrollTop);
        }
	}*/
	
	componentDidMount(){

		/*上拉加载下拉刷新参数*/
		let start;  // 辅助变量：触摸开始时，相对于文档顶部的Y坐标
		let refresh = false;
		let isLoad = false;
		const list = document.getElementById('list');
		const headerTop = document.getElementById('headerTop');
		headerTop.innerHTML = "下拉刷新"; 
		/*上拉加载下拉刷新参数*/

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

		this.setState({
			code : code,
			name : name,
			leaf : leaf,
			module : module,
			type : type,
			data : data
		});

		this.loadList();

		list.addEventListener('touchstart',function(event){ 
	   		let touch = event.touches[0]; 
	   		start = touch.pageY; // 辅助变量：触摸开始时，相对于文档顶部的Y坐标 
	   	},false); 

		list.addEventListener('touchmove',function(event){ // 下拉刷新 
	   		let touch = event.touches[0]; 
	   		if(list.scrollTop<=0){ 
		   		// 若ul偏移量过大,则修改文字,refresh置为true,配合'touchend'刷新 
		   		if(list.offsetTop>=60) { 
		   			headerTop.innerHTML = "释放刷新"; 
		   			refresh = true; 
		   		} else {
		   			// 如果ul列表到顶部，修改ul列表的偏移,显示“下拉刷新”，并准备触发下拉刷新功能，可自定义 
			   		list.style.top = list.offsetTop + touch.pageY - start +'px'; // ul.style.top = ul.offsetTop + 'px' 
			   		headerTop.style.top = list.style.top;
			   		start = touch.pageY; 
		   		}
	   		} 
	   	},false); 

	   	list.addEventListener('touchend',()=>{ 
	   		// 若'touchend'时，ul偏移,用setInterval循环恢复ul的偏移量 
	   		if(list.offsetTop>=0) { 
	   			let time = setInterval(()=>{ 
	   				list.style.top = list.offsetTop -3 +'px'; 
	   				headerTop.style.top = list.style.top; 
	   				// 若ul的偏移量恢复，clearInterval 
	   				if(list.offsetTop<=0){ 
	   					clearInterval(time); 
	   					headerTop.innerHTML = "下拉刷新"; 
	   					// 若恢复时'refresh===true',刷新页面 
	   					if(refresh){ 
	   						this.loadList();
	   					} 
	   				} 
	   			}) 
	   		} 
	   	},false);

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
				if(data.outOk == '1') {
					if(data.outOk == '1'){
						this.setState({
							ldata:data.rows1
						})
					}
				}
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
				<div className="outer" style={{borderTop:'solid 1px #ccc'}}>
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