/* <---Styled components dependencies---> */
import styled from 'styled-components';

export const HompageContainer = styled.div`
	overflow: hidden;
	background: fixed center url('./assets/logo-final.gif');
	background-repeat: no-repeat;

	//Screen smaller than 600px - mobile
	@media (max-width: 600px) {
		margin-left: 0;
	};

	//Medium screens (600px - 1024px) - tablets
	@media (min-width: 600px) {
		margin-left: 0;
	};
	
	//Screen greater than 1024px - desktop
	@media (min-width: 1024px) {
		margin-left: 4rem;
	};
`;