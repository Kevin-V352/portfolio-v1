import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .5);
`;

export const Column = styled.div`
    margin-top: 2rem;
    height: calc(100% - 10rem);
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Title = styled.h1`
	text-transform: uppercase;
	color: var(--gray);
	border-bottom: .15rem solid var(--gray);
	width: 100%;
	text-align: center;
	margin: 0;
	font-size: var(--primary-font-size);
`;
