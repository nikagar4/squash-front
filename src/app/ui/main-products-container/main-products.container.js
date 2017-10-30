import React from 'react';
import { connect } from 'react-redux';

import { productsAction } from '../../sdk/index';
import { ProductCard } from '../index';

const mapStateToProps = state => {
  return {
    products: state.products.products,
  };
};

export default connect(mapStateToProps)(
  class MainProductsContainer extends React.Component {
    componentWillMount() {
      this.props.dispatch(productsAction.getAll());
    }

    render() {
      return (
        <section className="wan-main-products-container">
          <div className="products">
            {this.props.products.map((product, index) => {
              return (
                <ProductCard
                  key={product.key}
                  title={product.title}
                  price={product.price}
                  img={product.img}
                />
              );
            })}
          </div>
          <button className="clickable">view more products</button>
        </section>
      );
    }
  },
);
