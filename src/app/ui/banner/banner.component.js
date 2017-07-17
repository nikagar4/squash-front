import React from "react";
import { connect } from "react-redux";

import line from "../../../assets/img/banner-line.png";
import switchLeft from "../../../assets/img/arrow-left.png";
import switchRight from "../../../assets/img/arrow-right.png"
import { bannerAction } from "../../sdk/index"

const mapStateToProps = state => {
	return {
        items: state.banner.items
    }
}

export default connect(mapStateToProps)(class Banner extends React.Component {

	constructor() {
		super();
		this.curBannerIndex = 0;
	}
	componentWillMount() {
		this.props.dispatch(bannerAction.get());
	}

    render() {
		let bannerTemplate = ("");
		let banners = this.props.items;
		if(banners.length !== 0) {
			let banner = banners[this.curBannerIndex];
			let curBannerNumber = `0${this.curBannerIndex + 1}`;
			let bannerLength = `0${banners.length}`;
			bannerTemplate = (
				<div className="banner-wrapper">
					<div className="image-wrapper">
						<img className="main-banner" src={banner.img.url} alt={banner.img.alt}/>
						<img className="background-banner" src={banner.img.url} alt={banner.img.alt}/>
					</div>
					<div className="banner-ui">
						<h1>{banner.title}</h1>
						<img src={line} alt="line"/>
						<button className="clickable">VIEW COLLECTION</button>
						<div className="banner-switcher">
							<button className="clickable">
								<img src={switchLeft} alt="switch-left"/>
							</button>
							<i><span>{curBannerNumber}</span>/{bannerLength}</i> {/* button clicks should fire event that will select other banners */}
							<button className="clickable">
								<img src={switchRight} alt="switch-right"/>
							</button>
						</div>
					</div>
				</div>
			)		
		}
        return (
			<section className="wan-banner-container">
				{bannerTemplate}
			</section>
        );
    }
})