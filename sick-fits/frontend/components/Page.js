import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  @font-face {
      font-family: 'radnika_next';
      src: url('/static/radnikanext-medium-webfont')
      format('woff2');
      font-weight: normal;
      font-style: normal;
  }
  html {
      --red: #ff0000;
      --black: #393939;
      --grey: #3A3A3A;
      --gray: var(--grey);
      --lightGrey: #e1e1e1;
      --lightGray: var(---lightGrey);
      --offWhite: #ededee;
      --max-width: 1000px;
      --bs: '0 12px 24px 0 rgba(0,0,0,0,09)'
  }
  
  body {
      font-family: 'radnika_next', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }`;

export default function Page({ children, cool }) {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <p>I am the page comp</p>
      <h1>{cool}</h1>
      {children}
    </div>
  );
}

// props validation
// say what the prop type is
Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
