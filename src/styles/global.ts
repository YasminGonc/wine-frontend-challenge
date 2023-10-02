import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    &::before, &::after {
      box-sizing: inherit;
    }
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%; // convert px into rem
    }

    body {
      font-family: ${theme.font.families.lato};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`
