import { createGlobalStyle } from "styled-components";

import image from '../images/image.avif'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        font-size: calc(60% + .8vmin);
        font-family: 'Montserrat', sans-serif;

        background-image: ${`url(${image})`};
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
        height: 100vh;
    }
`;