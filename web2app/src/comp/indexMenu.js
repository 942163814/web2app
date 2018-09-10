import React from 'react';
import ReactDOM from 'react-dom';
import app from '../js/app.js';
import { Redirect } from 'react-router';

//菜单模块
class MenuBlock extends React.Component{

	constructor(props){
		super(props);
	}

	render(){
		const mode = this.props.mode;
		let count = 0,bottomnum = 0;
		const rownum = 4;
		return(
			<ul className="mui-table-view mui-grid-view mui-grid-9">
			{
				this.props.data.map((item,index) => {
					
					let type = item.type;
					let code = item.code;
					if(type === "1" && code != "M10033") {
						if(item.parentCode === mode){
							if (item.code === 'M8501' || item.code === 'M8601') { //事故应对方法 事故分析研判app端未做 隐藏改模块直接空模块
								
							} else {
								let icon = '';
								if(item.icon != '' && item.icon.indexOf('/view') < 0){
									icon = item.icon.replace('../','').trim();
									icon = require('../' + icon.substring(0,icon.length-4) + '.png');
								}
								
								return(
									<li key={item.code} className="menu-go-page mui-table-view-cell mui-media mui-col-xs-3" code={item.code} name={item.name} leaf={item.leaf} url={item.url} href={item.href}>
										<a>
											<img style={{width:32,height:32}} src={icon} />
											<div className="mui-media-body">{item.name}</div>
										</a>
									</li>
								)
								


							}
						}
					}
				})
				

				/*if((count % rownum) > 0) {
					//空白模块
					for(var k = 0; k < rownum; k++) {
						count++;
						return(
							<li class="mui-table-view-cell mui-media mui-col-xs-3 nullMenu">
							</li>
						)
						if(count % rownum == 0) {
							break;
						}
					}
				}*/

			}
			</ul>
		)
	}

}

/*首页菜单*/
class IndexMenu extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			data:[],
			wdxxnum:0,
			redirect:''
		}
	}
	
	//菜单点击事件
	menuClick(e){
		const target = e.currentTarget
		var code = target.getAttribute('code');
		var name = target.getAttribute('name');
		var href = target.getAttribute('href');
		var leaf = target.getAttribute('leaf');
		var url = target.getAttribute('url');

		this.setState({
			redirect:'/list?code=' + href + '&name=' + name + '&leaf=' + leaf + app.uplink()
		})

	}
	
	//获数据
	componentDidMount(){
		
		app.ajax({
			url : app.domain + '/user_menu',
			success:(data)=>{
				if(data.outOk == '1') {
					this.setState({
						data:data.rows2
					})
				}
			}
		})

		app.ajax({
			url : app.domain + '/noReadNotify',
			success:(data)=>{
				if(data.outOk === 1){
					this.setState({
						wdxxnum:parseInt(data.outParam)
					})
				}
			}
		})

	}
	
	//渲染
	render(){

		if (this.state.redirect != '') {
			return (<Redirect to={this.state.redirect} />)
			//return <Redirect push to={this.state.redirect} />;
		}

		let innerMenu = '';
		if(this.state.data.length === 0){
			innerMenu = this.loading();
		}
		else{
			innerMenu = this.defaultmenu();
		}
	
		const contStyle = {
			height: 43
		}

		return(
			<div id="menu-box">
				{innerMenu}
				{	
					//加载菜单
					this.state.data.map((item,index) => {

						const parentCode = item.parentCode;

						if(parentCode == '0000'){
							const name = item.name, code = item.code, type = item.type;
							if(type === '1' && code != 'M1003'){
								return(
									<div className="mui-content" key={item.code}>
										<ul className="mui-table-view">
											<li className="mui-table-view-cell" style={contStyle}><span className="mui-pull-left">{name}</span></li>
											<MenuBlock mode={item.code} data={this.state.data} />
										</ul>
									</div>
								)
							}
						}
						
					})
				}
			</div>
		)
	}

	//加载中
	loading(){

		const menuStyle = {
			marginBottom : '20%',
			marginTop : '20%',
			backgroundColor : '#efeff4'
		}

		return(
			<div id="menu-list" className="mui-pull-bottom-pocket mui-block mui-visibility" style={menuStyle}>
				<div className="mui-pull">
					<div className="mui-pull-loading mui-icon mui-spinner mui-visibility"></div>
					<div className="mui-pull-caption mui-pull-caption-refresh">正在加载菜单...</div>
				</div>
			</div>
		)
	}

	/*默认菜单*/
	defaultmenu(){

		const wdxxStyle = {
			marginTop:-35,
			marginRight:-5,
			display: this.state.wdxxnum == 0?'none':'block'
		}

		return(
			<div>
				<ul id="mode-M1003" className="mui-table-view mui-grid-view mui-grid-9">
					<li className="menu-go-page mui-table-view-cell mui-media mui-col-xs-3" onClick={this.menuClick.bind(this)} name="提示信息" leaf="2" href="menu_msglist:zllr">
						<a>
							<img style={{width:35,height:35}} src={require('../images/icon/xx.png')} />
							<span className="mui-badge mui-badge-danger" id="wdxxnum" style={wdxxStyle}>{this.state.wdxxnum}</span>
							<div className="mui-media-body">提示信息</div>
						</a>
					</li>
					<li className="menu-go-page mui-table-view-cell mui-media mui-col-xs-3" href="index-todo">
						<a>
							<span className="mui-icon mui-icon-extra mui-icon-extra-regist mui-active"></span>
							<div className="mui-media-body">待办事项</div>
						</a>
					</li>
					<li className="menu-go-page mui-table-view-cell mui-media mui-col-xs-3" href="index-tongztb">
						<a>
							<span className="mui-icon mui-icon-extra mui-icon-extra-classroom mui-active"></span>
							<div className="mui-media-body">通知通报</div>
						</a>
					</li>
					<li className="menu-go-page mui-table-view-cell mui-media mui-col-xs-3" href="index-set">
						<a>
							<span className="mui-icon mui-icon-gear mui-active"></span>
							<div className="mui-media-body">设置</div>
						</a>
					</li>
				</ul>
			</div>
		)
	}


}

export default IndexMenu;