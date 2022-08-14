import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    transition: all 0.3s linear;
  }

  body {
    overflow-x: hidden;
  }

  textarea {
    :focus {
      outline: none;
    }
  }

  button {
    cursor: pointer;
  }

  p,h1,h2,h3,h4 {
    color: #212121;
  }

  a {
    color: #212121;
    text-decoration: none;
  }

  a:hover {
    color: #212121;
    text-decoration: none;
    cursor: pointer;
  }

  img {
    border-style: none;
  }
`;

export default GlobalStyle;
