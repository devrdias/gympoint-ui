import { createGlobalStyle, css } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default createGlobalStyle`${css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background: linear-gradient(-90deg, #ee4d64, #ee415a);
    -webkit-font-smoothing: antialiased !important;
  }

  body,
  input,
  button {
    color: #222;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }

  button {
    cursor: pointer;
  }
  button:focus {
    outline: 0 !important;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`}`;
