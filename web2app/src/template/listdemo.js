import React from 'react';
import ReactDOM from 'react-dom';

class ListDemo extends React.Component{

	constructor(props){
		super(props);
	}

	addLi(){
		let ul = document.getElementById('ul');  // 获取ul列表
		let num = 11; // 添加li文本，可自定义

		let fragment = document.createDocumentFragment();
		for(let i=0;i<10;i++) {
		    let li = document.createElement('li');
		    li.className = 'li';
		    li.innerHTML = num++;
		    fragment.appendChild(li); // 用DocumentFragment提高渲染速度
		}
		ul.appendChild(fragment);
	}

	componentDidMount() {
	   	let ul = document.getElementById('ul');  // 获取ul列表
		let div = document.getElementById('article') // 获取包裹ul列表的div(css:  overflow:scroll;)
		let text = document.getElementById('text');
		let start;  // 辅助变量：触摸开始时，相对于文档顶部的Y坐标
		let refresh = false;
		let isLoad = false;

		div.addEventListener('scroll',()=>{

			
			if(div.scrollTop + div.clientHeight >= div.scrollHeight){
				isLoad = true;
		    	this.addLi();
		    	setTimeout(function(){
		      		isLoad = false;
		    	},50)  //  节流阀
			};


			/*if(div.scrollHeight-div.scrollTop<1000 && isLoad===false) {
		    	isLoad = true;
		    	this.addLi();
		    	setTimeout(function(){
		      		isLoad = false;
		    	},50)  //  节流阀
		  	}*/
		},false);

	   	div.addEventListener('touchstart',function(event){ 
	   		let touch = event.touches[0]; start = touch.pageY; // 辅助变量：触摸开始时，相对于文档顶部的Y坐标 
	   	},false); 

	   	div.addEventListener('touchmove',function(event){ // 下拉刷新 
	   		let touch = event.touches[0]; 
	   		if(div.scrollTop<=0){ 
		   		// 若ul偏移量过大,则修改文字,refresh置为true,配合'touchend'刷新 
		   		if(ul.offsetTop>=50) { 
		   			text.innerHTML = "释放刷新"; 
		   			refresh = true; 
		   		} else {
		   			// 如果ul列表到顶部，修改ul列表的偏移,显示“下拉刷新”，并准备触发下拉刷新功能，可自定义 
			   		ul.style.top = ul.offsetTop + touch.pageY - start +'px'; // ul.style.top = ul.offsetTop + 'px' 
			   		start = touch.pageY; 
		   		}
	   		} 
	   	},false); 

	   	div.addEventListener('touchend',function(event){ 
	   		// 若'touchend'时，ul偏移,用setInterval循环恢复ul的偏移量 
	   		if(ul.offsetTop>=0) { 
	   			let time = setInterval(function(){ 
	   				ul.style.top = ul.offsetTop -3 +'px'; 
	   				// 若ul的偏移量恢复，clearInterval 
	   				if(ul.offsetTop<=0){ 
	   					clearInterval(time); text.innerHTML = "下拉刷新"; 
	   					// 若恢复时'refresh===true',刷新页面 
	   					if(refresh){ 
	   						//location.reload(); 
	   					} 
	   				} 
	   			}) 
	   		} 
	   	},false);

	}
	
	// 上拉加载
	divScroll(div){
		if(div.scrollHeight-div.scrollTop<1000 && this.state.isLoad===false) {
			this.setState({
				isLoad:true
			})
		    this.addLi();
		    setTimeout(function(){
			    this.setState({
					isLoad:false
				})
		    },300)  //  节流阀
		}
	}

	render(){

		const headercss = {
		    position: 'fixed',
		    left: 0,
		    top: 0,
		    right: 0,
		    zIndex: 10,
		    background: '#fff',
		    lineHeight: '55px'
		}

		const ulcss = {
			position: 'relative',
		    listStyle: 'none',
		    width: '100%',
		    top: 0
		}

		const licss = {
			height:63,
			lineHeight:'63px',
			borderBottom:'1px solid #ccc'
		}

		return(
			<div id="app">
				<header id="header" style={headercss}>
					<input type="text" id="input" style={{width:'80%'}} /> 
					<input type="submit" id="submit" style={{margin:'11px 5px'}} /> 
				</header> 
				<article id="article" style={{overflow: 'scroll',position: 'relative',height: '100vh'}}> 
					<ul id="ul" style={ulcss}> 
						<li className="li" id="text" style={licss}>下拉刷新</li> 
						<li className="li" style={licss}>1</li> 
						<li className="li" style={licss}>2</li> 
						<li className="li" style={licss}>3</li> 
						<li className="li" style={licss}>4</li> 
						<li className="li" style={licss}>5</li> 
						<li className="li" style={licss}>6</li> 
						<li className="li" style={licss}>7</li> 
						<li className="li" style={licss}>8</li> 
						<li className="li" style={licss}>9</li> 
						<li className="li" style={licss}>10</li> 
						<li className="li" style={licss}>5</li> 
						<li className="li" style={licss}>6</li> 
						<li className="li" style={licss}>7</li> 
						<li className="li" style={licss}>8</li> 
						<li className="li" style={licss}>9</li> 
						<li className="li" style={licss}>10</li> 
					</ul> 
				</article>
			</div>
		) 
	}
}

export default ListDemo;