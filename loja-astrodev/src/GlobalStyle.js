import { createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    :root {
        --soft-white: #f2f2f2;
        --deep-purple: #201f41;
        --purple: #912e54;
        --rose: #dd7c86;
    }

    h1{
        font-family: 'Rowdies', cursive;
        color: var(--deep-purple);
    }
    h2,h3{
        font-family: 'Open Sans', sans-serif;
    }
    body{
        font-family: 'Open Sans', sans-serif;
        background: var(--rose);
        color: var(--deep-purple);
    }

    *{
        margin: 0;
        padding: 0;
        border-sizing: border-box;
    }
`