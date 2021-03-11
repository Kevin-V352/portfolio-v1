/* <---Styled components dependencies---> */
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
	:root {
		//Global colors
		--black: #1C1C1C;
		--gray: #B6B6B6;
		--orange: #E67E22; 
		--transparent-gray: rgba(182, 182, 182, 0.3);
		--orange-gradient: linear-gradient(to top, #ff512f, #f09819);

		//Global transitions
		--transition-fast: ease 200ms;
		--transition-normal: ease 400ms;

		// Less than 600px - small screens
		@media (max-width: 600px) {
		--title-font-size: 2rem;
		--subtitle-font-size: 1.5rem;
    	};

		//Greater than 600px - large screens
		@media (min-width: 600px) {
		--title-font-size: 3rem;
		};
		
	};

	* {
		//Global font settings
		font-family: 'Text Me One', sans-serif;
		font-weight: bold;
		font-size: 16px;
		user-select: none;

		//Custom scrollbar - Firefox
		scrollbar-color: var(--orange) var(--black) !important;
    	scrollbar-width: thin !important;

		//Avoid blue overlay when selecting - Chrome
		-webkit-tap-highlight-color: transparent;
	};

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

	input:focus, 
	select:focus, 
	button:focus,
	textarea:focus {
        outline: none;
    };
`;

export default GlobalStyles;