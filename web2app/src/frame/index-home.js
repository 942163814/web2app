import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../comp/header.js';
import PicSlider from '../comp/picSlider.js';
import IndexMenu from '../comp/indexMenu.js';

class Home extends React.Component{
	render(){

		const contStyle = {
			borderTop:'1px solid #CCCCCC'
		}
		return(
			<div>
				<Header titleName="农村交通"/>
				<div className="mui-content" style={contStyle}>
					<PicSlider/>
					<IndexMenu/>
				</div>
			</div>
		)
	}
}

export default Home;