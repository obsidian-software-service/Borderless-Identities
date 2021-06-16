import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Footer from './Footer';
import '../Style/base.css';
import { theme } from '../Style';

class Template extends React.Component {
  render() {
    const { children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    );
  }
}

export default Template;
