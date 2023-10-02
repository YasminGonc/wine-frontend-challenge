import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../src/styles/global'
import { defaultTheme } from '../src/styles/theme/defaultTheme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'wine-light',
    values: [
      {
        name: 'wine-light',
        value: '#F5F5F5'
      }
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];
