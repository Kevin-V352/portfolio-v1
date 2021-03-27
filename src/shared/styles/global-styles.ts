/* Imports */
import { createGlobalStyle } from 'styled-components';

/* Breakpoints */
export const sm: string = "600px";
export const md: string = "960px";
export const lg: string = "1280px";
export const xl: string = "1920px";

/* Global Styles Settings */
const GlobalStyles = createGlobalStyle`
	
	:root {
		background-color: #1C1C1C;
		//Global colors
		--black: #1C1C1C;
		--gray: #B6B6B6;
		--orange: #E35E2A; 
		--transparent-gray: rgba(182, 182, 182, 0.3);
		--orange-gradient: linear-gradient(to top, #ff512f, #f09819);

		//Global transitions
		--transition-fast: ease 200ms;
		--transition-normal: ease 400ms;

		//Screen smaller than 600px - mobile
		@media (max-width: 600px) {
			--primary-font-size: 2rem;
			--secondary-font-size: 1rem;
    	};

		//Medium screens (600px - 1024px) - tablets
		@media (min-width: 600px) {
			--primary-font-size: 3rem;
			--secondary-font-size: 2rem;
		};

		//Screen greater than 1920px - desktop
		@media (min-width: 1920px) {
			--primary-font-size: 5rem;
			--secondary-font-size: 3rem;
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
		overflow-y: hidden;

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