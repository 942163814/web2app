import React from 'react';
import ReactDOM from 'react-dom';

/*图片轮播*/
class PicSlider extends React.Component{

	render(){
		return(
			<div id="slider" className="mui-slider" >
				<div className="mui-slider-group mui-slider-loop">
					<div className="mui-slider-item mui-slider-item-duplicate">
						<a>
							<img src={require("../images/home1.png")} />
						</a>
					</div>
					<div className="mui-slider-item">
						<a>
							<img src={require("../images/home1.png")} />
						</a>
					</div>
					<div className="mui-slider-item">
						<a>
							<img src={require("../images/home2.png")} />
						</a>
					</div>
					<div className="mui-slider-item">
						<a>
							<img src={require("../images/home3.png")} />
						</a>
					</div>
					<div className="mui-slider-item mui-slider-item-duplicate">
						<a>
							<img src={require("../images/home1.png")} />
						</a>
					</div>
				</div>

				<div className="mui-slider-indicator">
					<div className="mui-indicator mui-active"></div>
					<div className="mui-indicator"></div>
					<div className="mui-indicator"></div>
				</div>
			</div>
		)
	}

}

export default PicSlider;