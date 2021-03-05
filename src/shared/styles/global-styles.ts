/* <---Styled components dependencies---> */
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	:root {
		--black: #1C1C1C;
		--gray: #B6B6B6;
		--orange: #E67E22; 
		--transition-fast: ease 200ms;
		--transition-normal: ease 400ms;
	};

	* {
		font-size: 16px;
		font-family: 'Text Me One', sans-serif;
	}

	body {
		margin: 0;
		padding: 0;
	};
`;

export default GlobalStyles;