import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import logo from "../../../assets/img/logo.png";
import camera from "../../../assets/img/camera.png";
import { userAction }  from "../../sdk/index";
import { MenuContainer } from "../index";

const mapStateToProps = state => {
	return {
        user: state.user.user
    }
}

export default connect(mapStateToProps)(class Header extends React.Component {
    constructor() {
        super();
        this.logo = {
            url: logo,
            alt: "logo"
        };

        this.state = {
            searchIsDirty: false
        }
    }

    componentWillMount() {
        this.props.dispatch(userAction.get());
	}

    searchKeyUp(evt) {
        if(evt.target.value.length == 0) {
            this.setState({searchIsDirty: false});
        } else {
            this.setState({searchIsDirty: true});
        }
    }

    getSearchClass() {
        return "wan-search" + (this.state.searchIsDirty ? " dirty" : "");
    }

    render() {
        let userTemplate = "";
        if(this.props.user) {
            userTemplate = (
                <ul className="wan-user-info">
                    <li><div>GEO</div></li>
                    <li><div><div className="logo-container"><img src={this.props.user.avatar.url} alt={this.props.user.avatar.alt}/></div><span>{this.props.user.firstName} {this.props.user.lastName[0]}</span></div></li>
                    <li><div><img src={camera} alt="camera"/></div></li>
                </ul>
            )
        }
        return (
            <header className="wan-header">
                <Link to="" className="wan-header-logo"><img src={this.logo.url} alt={this.logo.alt}/></Link>
                <nav>
                    <MenuContainer />
                    <input type="search" name="search" className={this.getSearchClass()} onKeyUp={this.searchKeyUp.bind(this)}/>
                    {userTemplate}
                </nav>
            </header>
        );
    }
})