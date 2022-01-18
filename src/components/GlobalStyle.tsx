import { createGlobalStyle } from 'styled-components'

import Satoshi from '@/assets/fonts/Satoshi-Regular.woff'
import Satoshi2 from '@/assets/fonts/Satoshi-Regular.woff2'

export default createGlobalStyle`
    @font-face {
        font-family: 'Satoshi';
        src: local('Font Name'), local('FontName'),
        url(${Satoshi}) format('woff2'),
        url(${Satoshi2}) format('woff');
        font-weight: 500;
        font-style: normal;
    }

    *, ::after, ::before {
        background-repeat: no-repeat;
        box-sizing: inherit;
    }

    html, 
    body,
    #root {
        height: 100%;
        padding: 0;
        margin: 0;
    }

    #root {
        font-family: 'Satoshi';
        background: ${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text}
    }
`
