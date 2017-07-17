import React from "react";

import heart from "../../../assets/img/heart.jpg";
import smallHeart from "../../../assets/img/small-heart.png"

export default class ProductCardComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: false
        };
    }

    selectProduct() {
        this.setState({selected: !this.state.selected});
    }

    getUiClass() {
        // this might need refactoring
        return "card-ui" + (this.state.selected ? " active" : "");
    }

    render() {
        return (
            <article className="wan-product-card" onClick={this.selectProduct.bind(this)}>
                <div className="image-wrapper">
                    <img src={this.props.img.url} alt={this.props.img.alt}/>
                    <div className={this.getUiClass()}>
                        <div className="info">
                            <p>@qamaneskigarik {/* this should be dynamic */}</p>
                            <span><img src={smallHeart} alt="small heart"/>2,950</span>
                        </div>
                        <button className="clickable">
                            SHOP NOW
                        </button>
                    </div>
                </div>
                <section className="content-container">
                    <div className="info-container">
                        <h1>{this.props.title}</h1>
                        <p>{this.props.price}</p>
                    </div>
                    <button className="clickable"><img src={heart} alt="heart" /></button>
                </section>
            </article>
        );
    }
}