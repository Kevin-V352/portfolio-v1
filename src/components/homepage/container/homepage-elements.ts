/* <---Styled components dependencies---> */
import styled from 'styled-components';

export const HompageContainer = styled.div`
	margin-left: 0;
	background-color: blue;
	background-size: cover;
	background: fixed center url('./assets/logo-final.gif');
	overflow: hidden;
	background-repeat: no-repeat;

	//Greater than 600px - large screens
	@media (min-width: 600px) {
		margin-left: 4rem;
	};
`;