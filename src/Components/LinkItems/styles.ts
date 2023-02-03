import styled from 'styled-components';

export const Container = styled.div`
    background: #333;
    border-radius: 8px;
    width: 100%;
    height: 45px;

    transition: .8s;

    &:hover {
        background: #555;
    }
    a {
        text-decoration: none;
        width: inherit;
        height: inherit;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
        color: #FFF;
        font-size: 1.3em;

        
        border-left: 8px solid cyan;
        border-right: 8px solid cyan;
        border-radius: 8px;
        h4 {
            font-weight: 200;
        }

        /* span {
        } */

        @media (min-width: 600px) AND (max-width: 884px) {
            font-size: 2em;
        }

    }

    @media (min-width: 320px) AND (max-width: 590px) {
        height: 50px;
    }

    @media (min-width: 600px) AND (max-width: 768px) {
        height: 60px;
    }
    @media (min-width: 770px) AND (max-width: 884px) {
        height: 80px;
    }
`;
