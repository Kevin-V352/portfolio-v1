/* <---Styled components dependencies---> */
import styled from 'styled-components';

//ButtonTab props
interface BTProps {
    active: boolean;
}

export const ContactContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;  
    justify-content: center;
    background-color: rgba(0, 0, 0, .65);
`;

export const ContactColumn = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 60%;
    min-height: 90%;
`;

export const TitleContact = styled.h1`
    text-transform: uppercase;
    color: var(--gray);
    user-select: none;
    font-size: 3rem;
    border-bottom: .15rem solid var(--gray);
    width: 100%;
    text-align: center;
    margin: 0;
`;

export const SubtitleContact = styled.h2`
    text-transform: uppercase;
    color: var(--gray);
    user-select: none;
    font-size: 1.5rem;
    margin-bottom: 0;
`;

export const ContactTab = styled.div`
    width: 100%;
    margin-bottom: 1rem; 
`;

export const ContactHeader = styled.div`
    position: relative; 
`;

export const ContactOptions = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
`;

export const ButtonTab = styled.button`
    font-size: 1.5rem;
    border: none;
    background-color: transparent;
    margin-top: 1rem;
    text-transform: uppercase;
    
    color: ${(props: BTProps) => props.active ? 'white;' : 'var(--gray);'};
`;

export const Maker = styled.div`
    position: absolute;
    border-bottom: .15rem solid var(--orange);
    transition: var(--transition-normal);
`;
