/* <---Styled components dependencies---> */
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	:root {
		//Global colors
		--black: #1C1C1C;
		--gray: #B6B6B6;
		--orange: #E67E22; 
		--orange-gradient: linear-gradient(to top, #ff512f, #f09819);
		//Global transitions
		--transition-fast: ease 200ms;
		--transition-normal: ease 400ms;
	};

	* {
		//Global font settings
		font-size: 16px;
		font-family: 'Text Me One', sans-serif;
		//Custom scrollbar - Firefox
		scrollbar-color: var(--orange) var(--black) !important;
    	scrollbar-width: thin !important;
	}

	body {
		margin: 0;
		padding: 0;
		//Custom scrollbar - Chrome
		&::-webkit-scrollbar {
			width: .25rem;
		};
		&::-webkit-scrollbar-track {
			background-color: var(--black);
		};
		&::-webkit-scrollbar-thumb {
			background: var(--orange-gradient);
		};
	};
`;

export default GlobalStyles;