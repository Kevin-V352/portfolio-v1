/* <---Styled components dependencies---> */
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	:root {
		font-family: 'Text Me One', sans-serif;
		--black: #17202A;
		--gray: #B6B6B6;
		--orange: #F39C12; 
		--transition-time: 400ms;
	};

	* {
		font-size: 16px;
	}

	body {
		margin: 0;
		padding: 0;
	};
`;

export default GlobalStyles;