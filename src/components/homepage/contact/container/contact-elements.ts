/* <---Styled components dependencies---> */
import styled from 'styled-components';

//Column props
interface CProps {
	height: number;
};

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	justify-content: center;
	background-color: rgba(0, 0, 0, .5);

	//Greater than 600px - large screens
	@media (min-width: 600px) {
		align-items: center;  
	};

	//Styles when the virtual keyboard is displayed
	@media screen and (orientation: landscape) {
		align-items: flex-end;
		padding-top: 0;
	};
`;

export const Column = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-top: 2rem;
	width: 70%;
	${(props: CProps) => props.height ? `min-height: ${props.height - 20}px` : "height: calc(100% - 10rem)"};

	// Less than 600px - small screens
	@media (max-width: 600px) {
		width: 90%;
	};
`;

export const Title = styled.h1`
	text-transform: uppercase;
	color: var(--gray);
	border-bottom: .15rem solid var(--gray);
	width: 100%;
	text-align: center;
	margin: 0;
	font-size: var(--primary-font-size);

	//Styles when the virtual keyboard is displayed
	@media screen and (orientation: landscape) {
		display: none;   
	};
`;


