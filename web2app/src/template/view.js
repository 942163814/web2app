import React from 'react';
import ReactDOM from 'react-dom';
import app from '../js/app.js';
import Header from '../comp/header.js';

class View extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			title: '详情'
		}
	}

	render(){

		return(
			<Header titleName={this.state.title} rbut="show"/>
		)

	}

}

export default View;