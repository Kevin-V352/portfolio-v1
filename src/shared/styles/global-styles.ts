/* <---Styled components dependencies---> */
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	:root {
		--black: #1C1C1C;
		--gray: #B6B6B6;
		--orange: #F39C12; 
		--transition-time-fast: 200ms;
		--transition-time-normal: 400ms;
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