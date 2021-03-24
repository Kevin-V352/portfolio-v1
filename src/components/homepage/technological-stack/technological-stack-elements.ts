/* Imports */
import styled from 'styled-components';
import { sm } from "../../../shared/styles/global-styles"
import {
	FaBootstrap,
	FaCss3Alt,
	FaSass,
	FaReact,
	FaHtml5,
	FaJsSquare
} from 'react-icons/fa';
import {
	SiStyledComponents,
	SiRedux,
	SiMaterialUi,
	SiTypescript
} from 'react-icons/si';

/* Styled components */

//Interfaces
interface IconBoxProps {
	fontColor: string;
	active: boolean;
};

//Default settings for icons
const defaultConfigIcon: string = `
  font-size: 8rem;
  margin: 1rem;
	@media (max-width: 600px) {
		font-size: 3.5rem;
	};
`;

export const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
	height: 100%;
	padding-top: 2rem;
`;

export const Column = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 70%;
	height: calc(100% - 10rem);
	
	// Less than 600px - small screens
	@media (max-width: ${sm}) {
		width: 90%;
		margin-bottom: 5rem;
	};
`;

export const Title = styled.h1`
	text-transform: uppercase;
	color: var(--gray);
	border-bottom: .15rem solid var(--gray);
	width: 100%;
	text-align: center;
	margin: 0;
	font-size: var(--primary-font-size);
`;

export const IconsContainer = styled.div`
	display: grid;
	justify-items: center;
	width: 100%;
	height: 100%;

	// Less than 600px - small screens
	@media (max-width: ${sm}) {
		grid-template-columns: repeat(4, 25%);
	};

	//Greater than 600px - large screens
	@media (min-width: ${sm}) {
		grid-template-columns: repeat(5, 20%);
	};
`;

export const IconBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	${(props: IconBoxProps) => (
		props.active ?
		`color: ${props.fontColor};
		transform: scale(1.10);` 
		:
		null
	)}

	// Less than 600px - small screens
	@media (max-width: ${sm}) {
		transition: var(--transition-normal);
		&:active {
			transform: scale(1.10);
			color: ${(props: IconBoxProps) => props.fontColor};
		};
	};
	
	//Greater than 600px - large screens
	@media (min-width: ${sm}) {
		transition: var(--transition-fast);
		&:hover {
			transform: scale(1.10);
			color: ${(props: IconBoxProps) => props.fontColor};
		};
	};
`;

export const IconName = styled.span`
  font-size: var(--secondary-font-size); 
	text-align: center; 
`;

export const SassIcon = styled(FaSass)`
	${defaultConfigIcon}
`;

export const ReactIcon = styled(FaReact)`
	${defaultConfigIcon}
`;

export const Html5Icon = styled(FaHtml5)`
	${defaultConfigIcon}
`;

export const JsIcon = styled(FaJsSquare)`
	${defaultConfigIcon}
`;

export const ReduxIcon = styled(SiRedux)`
  ${defaultConfigIcon}
`;

export const Css3Icon = styled(FaCss3Alt)`
	${defaultConfigIcon}
`;

export const BootstrapIcon = styled(FaBootstrap)`
  ${defaultConfigIcon}
`;

export const MaterialUiIcon = styled(SiMaterialUi)`
  ${defaultConfigIcon}
`;

export const StyledComponentsIcon = styled(SiStyledComponents)`
	${defaultConfigIcon}
`;

export const TsIcon = styled(SiTypescript)`
	${defaultConfigIcon}
`;





