import React from 'react';

import { Header, Footer } from '../../ui/index';

export default class OtherPage extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <main>Other Content</main>
        <Footer />
      </div>
    );
  }
}
