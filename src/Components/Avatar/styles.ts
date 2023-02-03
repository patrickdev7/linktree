import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 10px 0;
    gap: 1rem;

    @media (min-width: 320px) AND (max-width: 590px) {
        gap: 1rem;
        padding: 10px 0;
        height: 300px;
    }

    @media (min-width: 600px) AND (max-width: 884px) {
        gap: 1rem;
        padding: 10px 0;
        height: 400px;
    }
    
    @media (min-width: 890px) AND (max-width: 1280px) {
        gap: 1rem;
        padding: 10px 0;
        height: 300px;
    }
`;
export const ContentAvatar = styled.div`
    img {
        width: 155px;
        border-radius: 50%;
        border: 3px solid #FFF;
        padding: 3px;

        @media (min-width: 600px) AND (max-width: 884px) {
            width: 250px;
        }
    }    
`;
export const ContentInsta = styled.div`
    p {
        color: #FFF;
        font-size: 1.2em;
    }
`;
