import React from "react";

import { Banner, FavoriteProductsContainer, Footer, Header, MainProductsContainer } from "../../ui/index";

export default class MainPage extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <main className="main-page">
                    <section className="top-rated-section">
                        <h1>TOP RATED SHOPS</h1>
                        <span>|</span>
                        <div className="banner-container">
                            <Banner />
                        </div>
                    </section>
                    <MainProductsContainer />
                    <FavoriteProductsContainer />
                </main>
                <Footer/>
            </div>
        );
    }
}