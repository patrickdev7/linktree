import styled from 'styled-components';

export const Container = styled.div`
    width: 45%;
    height: 100vh;
    margin: auto;
    padding: 0 10px;

    display: flex;
    flex-direction: column;

    @media (min-width: 320px) AND (max-width: 590px) {
        width: 100%;
    }
    @media (min-width: 600px) AND (max-width: 884px) {
        width: 75%;
    }
`;

export const LinkTreeItemsArea = styled.div`
    flex: 1;

    display: flex;
    flex-direction: column;
    gap: 10px;
`;