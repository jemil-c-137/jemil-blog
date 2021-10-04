import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }



  body {
    background-color: ${props => props.theme.global.bg};
    color: ${props => props.theme.global.color};
    font-family: ${props => props.theme.fonts.main};
    
    transition: background 0.2s ease-out;
  }
  
  a {
    color: ${props => props.theme.global.color};
    text-decoration: none;
  }
  a:hover {
    color: orange;
  }

  ul {
    list-style-type: none;
  }
`
