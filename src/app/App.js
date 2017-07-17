import React, { Component } from 'react';
import {
  HashRouter,
  Route
} from "react-router-dom";

import {
  MainPage,
  WomenPage,
  MenPage,
  KidsPage,
  OtherPage
} from "./pages/index";
import './app.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* this should go to separate routes file */}
        <HashRouter>
          <div>
            <Route exact path="/" component={MainPage} />
            <Route path="/women" component={WomenPage} />
            <Route path="/men" component={MenPage} />
            <Route path="/kids" component={KidsPage} />
            <Route path="/other" component={OtherPage} />
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
