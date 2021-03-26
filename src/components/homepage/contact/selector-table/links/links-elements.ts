/* <---Styled components dependencies---> */
import styled from 'styled-components';

/* <---React icons---> */
import {
	FaEnvelope,
	FaWhatsapp,
	FaLinkedinIn,
	FaTelegramPlane
} from 'react-icons/fa';

//Default settings for icons
const defaultConfigIcon: string = `
	color: var(--gray);
	font-size: 5rem;
	margin: 0 1rem;
`;

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100%;
`;

export const Description = styled.h2`
	color: var(--gray);
	text-transform: uppercase;
	font-size: var(--primary-font-size);
`;

export const LinkCotainer = styled.div`
	display: flex;
	justify-content: center;
	flex-wrap: wrap;
`;

export const ButtonIcon = styled.button`
	border: none;
	background-color: transparent;
	transition: var(--transition-fast);

	// Less than 600px - small screens
	@media (max-width: 600px) {
		&:active {
			transform: scale(.85);
		};
	};

	//Greater than 600px - large screens
	@media (min-width: 600px) {
		&:hover {
			transform: scale(1.15);
			transition: var(--transition-fast);
			color: var(--orange);
		};
	};  
`;

export const MailIcon = styled(FaEnvelope)`
	${defaultConfigIcon};
`;

export const WhatsappIcon = styled(FaWhatsapp)`
	${defaultConfigIcon};
`;

export const LinkedinIcon = styled(FaLinkedinIn)`
	${defaultConfigIcon};
`;

export const TelegramIcon = styled(FaTelegramPlane)`
	${defaultConfigIcon};
`;

