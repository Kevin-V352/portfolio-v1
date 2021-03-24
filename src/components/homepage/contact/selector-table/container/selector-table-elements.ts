/* <---Styled components dependencies---> */
import styled from 'styled-components';

//ButtonTab props
interface BTProps {
	active: boolean;
};

export const Container = styled.div`
	width: 100%;
	height: 100%;
`;

export const Header = styled.div`
	position: relative; 
	margin-bottom: 1rem;

	//Styles when the virtual keyboard is displayed
	@media screen and (orientation: landscape) {
		display: none;   
	};
`;

export const Options = styled.div`
	display: flex;
	justify-content: space-around;
	width: 100%;
`;

export const OptionButton = styled.button`
	border: none;
	background-color: transparent;
	margin-top: 1rem;
	text-transform: uppercase;
	color: ${(props: BTProps) => props.active ? 'white;' : 'var(--gray);'};
	font-size: var(--secondary-font-size);
`;

export const OptionMaker = styled.div`
	position: absolute;
	border-bottom: .15rem solid var(--orange);
	transition: var(--transition-normal);
`;

export const TransitionBox = styled.div`
	height: calc(100% - 3.15rem);
	.fade-enter {
		opacity: 0;
		transform: scale(0.9);
	}
	.fade-enter-active {
		opacity: 1;
		transform: translateX(0);
		transition: opacity 300ms, transform 300ms;
	}
	.fade-exit {
		opacity: 1;
	}
	.fade-exit-active {
		display: none;
		transform: scale(0.9);
		transition: opacity 300ms, transform 300ms;
	}
`;