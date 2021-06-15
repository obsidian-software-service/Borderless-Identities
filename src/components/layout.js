import React from 'react';
import './base.css';
import Container from './container';
import Navigation from './navigation';
import Footer from './Footer';

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <>
        <Container>
          <Navigation />
          {children}
        </Container>
        <Footer />
      </>
    );
  }
}

export default Template;
