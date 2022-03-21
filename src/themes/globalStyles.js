import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }



  body {
    background-color: ${props => props.theme.global.color};
    color: ${props => props.theme.global.bg};
    font-family: ${props => props.theme.fonts.main};
    
    transition: background 0.2s ease-out;
  }
  
  a {
    color: ${props => props.theme.global.bg};
    text-decoration: none;
    transition: all .3s ease;
  }
  a:hover {
    color: orange;
  }

  ul {
    list-style-type: none;
  }

  button {
    border: none;
    background: none;
    font-family: ${props => props.theme.fonts.secondary};
    color: ${props => props.theme.global.color};
  }
`
