/* <---Styled components dependencies---> */
import styled from 'styled-components';

export const HompageContainer = styled.div`
	margin-left: 0;
	overflow: hidden;
	background: fixed center url('./assets/logo-final.gif');
	background-repeat: no-repeat;
	
	//Greater than 600px - large screens
	@media (min-width: 600px) {
		margin-left: 4rem;
	};
`;