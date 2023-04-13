import { createGlobalStyle } from 'styled-components';
import Fonts from './fonts';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${Fonts};
  ${variables};

  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  } 

  * {
    margin:0;
    padding: 0;
  }


  ::selection {
    background-color: var(--lightest-navy);
    color: var(--lightest-slate);
  }


  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--dark-slate) var(--navy);
  }
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background: var(--navy);
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--dark-slate);
    border: 3px solid var(--navy);
    border-radius: 10px;
  }

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--dark-gray);
    color: var(--slate);
    font-family: var(--font-montserrat);
  }
  
  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
    grid-template-columns: 100%;
  }

  section {
    margin: 16 auto;
    width: 100%;
    padding: 16px 0;
  }

  /* Style of H1 */ 
h1{
  position: absolute;
  width: 100%;
  font-family: 'Misto';
  font-size: 48px; /* updated font size */
  font-style: normal;
  font-weight: 400;
  text-align: center;
  color: rgba(247, 244, 228, 0.85);
}

@media (min-width: 600px) {
  h1{
    font-size: 72px; /* updated font size */
  }
}

@media (min-width: 992px) {
  h1{
    font-size: 96px; /* updated font size */
  }
}

/* Style of H2 */
h2{
  font-family: 'Misto';
  font-size: 24px; /* updated font size */
  font-style: normal;
  font-weight: 400;
  display: flex;
  align-items: center;
  text-align: center;
  color: rgba(247, 244, 228, 0.85);
}

@media (min-width: 481px) and (max-width: 1024px) { /* Tablet */
  h2{
    font-size: 32px;
    line-height: 58px;
  }
}

@media (min-width: 1025px) { /* Desktop */
  h2{
    font-size: 48px;
    line-height: 77px;
  }
}

/* Style of h3 */ 
h3 {
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  display: flex;
  align-items: center;
  color: rgba(247, 244, 228, 0.85);
  font-size: 18px; /* updated font size */
}

/* Tablet styles */
@media screen and (min-width: 600px) {
  h3{
    font-size: 24px; /* updated font size */
  }
}

/* Desktop styles */
@media screen and (min-width: 1024px) {
  h3 {
    font-size: 32px; /* updated font size */
  }
}

/* Style of p Tag */
p{
  font-family: 'Montserrat';
  font-style: normal;
  font-size: 12px;
  text-align: justify;
  color: rgba(247, 244, 228, 0.85);
}


/* Tablet styles */
@media (min-width: 600px) {
  p{
    font-size: 16px; /* updated font size */
    line-height: 32px;
    letter-spacing: 0.06em;
  }
}

/* Desktop styles */
@media (min-width: 1024px) {
  p{
    font-size: 20px; /* updated font size */
    line-height: 32px;
    letter-spacing: 0.06em;
  }
}
`;


export default GlobalStyle;
