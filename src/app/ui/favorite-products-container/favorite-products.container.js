import React from "react";
import { connect } from "react-redux";

import heart from "../../../assets/img/red-heart.png"
import { productsAction } from "../../sdk/index"
import { ProductCard } from "../index";

const mapStateToProps = state => {
	return {
        favorites: state.products.favorites
    }
}

export default connect(mapStateToProps)(class FavoriteProductsContainer extends React.Component {

	componentWillMount() {
		this.props.dispatch(productsAction.getFavorites());
	}

    render() {
        return (
			<section className="wan-favorite-products-container">
				<h1>LOOKS WE L<img src={heart} alt="heart"/>VE</h1>
				<h2>The most-coveted essentials. Curated by us, inpired by you.</h2>
				<div className="products">
					{this.props.favorites.map((product) => {
						return (<ProductCard key={product.key} title={product.title} price={product.price} img={product.img}/>)
					})}
				</div>
			</section>
        );
    }
})