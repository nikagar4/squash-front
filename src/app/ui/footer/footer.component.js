import React from "react";
import { connect } from "react-redux";

import gplay from "../../../assets/img/google-play.png";
import appstore from "../../../assets/img/app-store.png";
import ig from "../../../assets/img/ig.png";
import fb from "../../../assets/img/fb.png";
import { sitemapAction } from "../../sdk/index"

const mapStateToProps = state => {
	return {
        items: state.sitemap.items
    }
}

export default connect(mapStateToProps)(class Footer extends React.Component {

    componentWillMount() {
		this.props.dispatch(sitemapAction.get());
	}

    render() {
        return (
            <footer className="wan-footer">
                <div className="footer-container">
                    <div className="subscribe-container">
                        <div className="app">
                            <a href="#"><img src={gplay} alt="Google Play"/></a>
                            <a href="#"><img src={appstore} alt="App Store"/></a>
                        </div>
                        <div className="mail">
                            <p>Mail List</p>
                            <input type="email" />
                            <button className="subscribe-button clickable">SEND</button>
                        </div>
                    </div>
                    <div className="site-map-container">
                        <div className="site-map">
                            <ul>
                                {this.props.items.map((item) => {
                                    return (<li><a href={item.link}>{item.name}</a></li>)
                                })}
                            </ul>
                        </div>
                        <div className="copyright">
                            Made In Georgia - Copyright 2017 - All Rights Reserved.
                            {/* These Texts Should be Dynamic */}
                        </div>
                    </div>
                    <div className="social-container">
                        <small>Join Us On Social</small>
                        <div className="social-icons">
                            <a href="#"><img src={fb} alt="Facebook"/></a>
                            <a href="#"><img src={ig} alt="Instagram"/></a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
})