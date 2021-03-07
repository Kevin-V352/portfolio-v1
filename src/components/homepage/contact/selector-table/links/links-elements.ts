/* <---Styled components dependencies---> */
import styled from 'styled-components';

/* <---React icons---> */
import {
    FaEnvelope,
    FaWhatsapp,
    FaLinkedinIn,
    FaTelegramPlane,
    FaFacebookMessenger,   
} from 'react-icons/fa';

//Default settings for icons
const defaultConfigIcon: string = `
    color: var(--gray);
    font-size: 5rem;
    margin: 0 1rem;
    &:hover {
        color: var(--orange);
    };
`;

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const ButtonIcon = styled.button`
    border: none;
    background-color: transparent;
    transition: var(--transition-fast);
    &:hover {
        transform: scale(1.15);
        transition: var(--transition-fast);
    };
`;

export const LinkedinIcon = styled(FaLinkedinIn)`
    ${defaultConfigIcon};
`;

export const WhatsappIcon = styled(FaWhatsapp)`
    ${defaultConfigIcon};
`;

export const MailIcon = styled(FaEnvelope)`
    ${defaultConfigIcon};
`;

export const TelegramIcon = styled(FaTelegramPlane)`
    ${defaultConfigIcon};
`;

export const MessengerIcon = styled(FaFacebookMessenger)`
    ${defaultConfigIcon};
`;

