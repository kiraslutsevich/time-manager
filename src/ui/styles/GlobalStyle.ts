import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    outline: none;
    list-style: none;
    font-family: inherit;
    color: inherit;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  a {
    text-decoration: none;
  }

  input {
    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    :-webkit-autofill,
    :-webkit-autofill:hover, 
    :-webkit-autofill:focus {
      box-shadow: 0 0 0 30px ${({ theme }) => theme.palette.primary.main} inset;
      -webkit-text-fill-color: ${({ theme }) => theme.palette.primary.contrastText};
    }
  }

  *::selection {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
  }

  html {
    font-family: ${({ theme }) => theme.font.family.main};
    font-size:  ${({ theme }) => theme.font.size.md};
    font-weight: ${({ theme }) => theme.font.weight.md};
    color: ${({ theme }) => theme.palette.text.primary};
    background-color: ${({ theme }) => theme.palette.background.default};
  }

  html,
  body,
  #root {
    min-height: 100%;
    height: 1px;
  }

  #root {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`;
