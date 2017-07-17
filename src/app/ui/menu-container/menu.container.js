import React from "react";
import { connect } from "react-redux";

import { menuAction } from "../../sdk/index"
import { MenuItem } from "../index";

const mapStateToProps = state => {
	return {
        items: state.menu.items
    }
}

export default connect(mapStateToProps)(class MenuContainer extends React.Component {

	componentWillMount() {
		this.props.dispatch(menuAction.get());
	}

    render() {
        return (
			<ul className="wan-menu-container">
				{this.props.items.map((item) => {
					return (<MenuItem key={item.key} name={item.name} link={item.link}/>)
				})}
			</ul>
        );
    }
})