import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string

    colors: {
      background: string
      text: string
      headline: string
      button: string
      buttonText: string
    }
  }
}