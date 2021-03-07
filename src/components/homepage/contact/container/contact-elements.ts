/* <---Styled components dependencies---> */
import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;  
    justify-content: center;
    background-color: rgba(0, 0, 0, .65);
`;

export const Column = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 60%;
    min-height: 90%;
    // Less than 600px - small screens
    @media (max-width: 600px) {
        width: 90%;
    };
`;

export const Title = styled.h1`
    text-transform: uppercase;
    color: var(--gray);
    user-select: none;
    border-bottom: .15rem solid var(--gray);
    width: 100%;
    text-align: center;
    margin: 0;
    // Less than 600px - small screens
    @media (max-width: 600px) {
        font-size: 2rem;
    };
    //Greater than 600px - large screens
    @media (min-width: 600px) {
        font-size: 3rem;
    };
`;


