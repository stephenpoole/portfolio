import { createGlobalStyle } from 'styled-components';
import { theme } from './';
import { Config } from '../util';

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: AbrilFatface-Regular;
        font-style: normal;
        font-weight: 400;
        src: url(${Config.routePrefix}/assets/fonts/AbrilFatface-Regular.woff2) format('woff2'),
            url(${Config.routePrefix}/assets/fonts/AbrilFatface-Regular.woff) format('woff');
    }

    @font-face {
        font-family: San Francisco Sans;
        src: local('SanFranciscoSans-Bold'),
            url(${Config.routePrefix}/assets/fonts/SanFranciscoSans-Bold.woff2) format('woff2'),
            url(${Config.routePrefix}/assets/fonts/SanFranciscoSans-Bold.woff) format('woff');
        font-weight: 700;
        font-style: normal;
    }
    @font-face {
        font-family: San Francisco Sans;
        src: local('SanFranciscoSans-Regular'),
            url(${Config.routePrefix}/assets/fonts/SanFranciscoSans-Regular.woff2) format('woff2'),
            url(${Config.routePrefix}/assets/fonts/SanFranciscoSans-Regular.woff) format('woff');
        font-weight: 400;
        font-style: normal;
    }

    body {
        color: ${theme.color.text}
        margin: 0;
        padding: 0;
        font-family: ${theme.font.sansSerif};
        font-size: 12pt;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
        margin: 0;
        padding: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: ${theme.font.serif};
        letter-spacing: -1px;
    }

    h1,
    h2 {
        line-height: 1.1;
    }

    h1 {
        font-size: 2${theme.font.unit};
        letter-spacing: -2px;
    }

    h2 {
        font-size: 1.5${theme.font.unit};
        letter-spacing: -1px;
    }

    h3 {
        font-size: 1.17${theme.font.unit};
    }

    h4 {
        font-size: 1${theme.font.unit};
    }

    h5 {
        font-size: 0.83${theme.font.unit};
    }

    h6 {
        font-size: 0.67${theme.font.unit};
    }

    li {
        list-style: none;
    }

    *:focus {
        outline: none;
    }

    a {
        color: inherit;
        text-decoration: none;

        &:hover,
        &:focus {
            color: inherit;
        }
    }
`;
